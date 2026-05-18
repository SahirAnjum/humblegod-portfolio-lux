#!/usr/bin/env node
/**
 * Pre-render React SPA routes into static HTML so Googlebot sees real content
 * on first crawl instead of `<div id="root"></div>`.
 *
 * Reads from   dist/             (Vite output + main-site copied to root)
 * Writes back  dist/classic/<route>/index.html
 *
 * Per-route SEO is also rewritten here (title / description / canonical / og:url)
 * to avoid duplicate signals across the SPA shell.
 *
 * Intended to run in CI only — install puppeteer transiently:
 *   npm install --no-save puppeteer
 *   node scripts/prerender.mjs
 */

import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.mjs':  'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.ico':  'image/x-icon',
  '.xml':  'application/xml',
  '.txt':  'text/plain',
  '.pdf':  'application/pdf',
};

/**
 * Per-route SEO. The Vite app ships one HTML shell, so we rewrite the head
 * after rendering so each route gets distinct title / description / canonical.
 *
 * Canonical strategy:
 *  - /classic/            → canonical = https://sahiranjum.com/  (alt view of root)
 *  - /classic/life-story/ → canonical = self (unique content)
 */
const ROUTES = {
  '/classic/': {
    title: 'Sahir Anjum — Data Engineer | Classic View',
    description:
      'Portfolio of Sahir Anjum — Data Engineer with approx. 7 years of experience in Telecom, skilled in Azure, Databricks, PySpark, Python, SQL, and Tableau.',
    canonical: 'https://sahiranjum.com/',
    ogUrl: 'https://sahiranjum.com/',
  },
  '/classic/life-story/': {
    title: 'Sahir Anjum — Life Story | From Kanpur to Data Engineering',
    description:
      'The journey of Sahir Anjum from student at PSIT Kanpur to Data Engineer at Amdocs — building real-time data pipelines for Three UK and Spark NZ.',
    canonical: 'https://sahiranjum.com/classic/life-story/',
    ogUrl: 'https://sahiranjum.com/classic/life-story/',
  },
};

async function startServer(root) {
  const server = createServer(async (req, res) => {
    try {
      let url = decodeURIComponent(req.url.split('?')[0]);
      if (url.endsWith('/')) url += 'index.html';
      const filePath = join(root, url);

      if (existsSync(filePath)) {
        const buf = await readFile(filePath);
        const ct = MIME[extname(filePath).toLowerCase()] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': ct });
        res.end(buf);
        return;
      }

      // SPA fallback for unknown /classic/ sub-routes (e.g. /classic/life-story/ before the cp step runs)
      if (url.startsWith('/classic/')) {
        const shell = await readFile(join(root, 'classic', 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(shell);
        return;
      }

      res.writeHead(404);
      res.end('404');
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });
  await new Promise((r) => server.listen(0, r));
  return { server, port: server.address().port };
}

const escAttr = (s) =>
  String(s).replace(/[&"<>]/g, (c) => ({ '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' }[c]));
const escText = (s) =>
  String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

function rewriteHead(html, meta) {
  const replacements = [
    [/<title>[^<]*<\/title>/i, `<title>${escText(meta.title)}</title>`],
    [/<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escAttr(meta.description)}" />`],
    [/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escAttr(meta.canonical)}" />`],
    [/<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escAttr(meta.title)}" />`],
    [/<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escAttr(meta.description)}" />`],
    [/<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${escAttr(meta.ogUrl)}" />`],
    [/<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escAttr(meta.title)}" />`],
    [/<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escAttr(meta.description)}" />`],
  ];
  for (const [regex, replacement] of replacements) {
    html = html.replace(regex, replacement);
  }
  return html;
}

async function main() {
  if (!existsSync(DIST)) {
    console.error(`✗ dist folder not found at ${DIST}. Run "vite build" first.`);
    process.exit(1);
  }
  if (!existsSync(join(DIST, 'classic', 'index.html'))) {
    console.error('✗ dist/classic/index.html missing — did the Vite build run?');
    process.exit(1);
  }

  console.log('▸ Starting static server for dist/...');
  const { server, port } = await startServer(DIST);
  console.log(`  serving at http://localhost:${port}`);

  console.log('▸ Launching Chromium...');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  try {
    for (const [route, meta] of Object.entries(ROUTES)) {
      console.log(`▸ Rendering ${route}`);
      const page = await browser.newPage();
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      // Set a flag so the (now-removed) /classic/ redirect path is bypassed defensively
      // and to skip any animation-blocked entry transitions.
      await page.evaluateOnNewDocument(() => {
        try { sessionStorage.setItem('classicNav', '1'); } catch {}
      });
      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 45000,
      });
      // Ensure React root has actually hydrated content
      await page.waitForFunction(
        () => document.querySelector('#root')?.children.length > 0,
        { timeout: 15000 }
      );
      // Tiny settle so GSAP commits initial state (any active animations are skipped via prefers-reduced-motion)
      await new Promise((r) => setTimeout(r, 400));

      let html = await page.content();
      html = rewriteHead(html, meta);

      const outPath = join(DIST, route, 'index.html');
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, html);
      console.log(`  ✓ wrote ${outPath}  (${(html.length / 1024).toFixed(1)} KB)`);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log('▸ Pre-render complete.');
}

main().catch((err) => {
  console.error('✗ Pre-render failed:', err);
  process.exit(1);
});
