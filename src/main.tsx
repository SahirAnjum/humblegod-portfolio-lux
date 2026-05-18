import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import './index.css'

// NOTE: previously this file hard-redirected /classic/ → /, which created conflicting
// SEO signals with the canonical tag in index.html. Per-page canonical now declares
// `/` as the canonical URL for /classic/, and life-story is self-canonical — so the
// JS redirect is no longer needed. /classic/ remains reachable as an alternate view.
const navFlag = sessionStorage.getItem('classicNav');
if (navFlag) sessionStorage.removeItem('classicNav');

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
