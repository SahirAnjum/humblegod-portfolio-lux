import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import './index.css'

// Handle SPA redirect from 404.html
const params = new URLSearchParams(window.location.search);
const redirectPath = params.get('redirect');
if (redirectPath) {
  window.history.replaceState(null, '', redirectPath);
}

const hasNavFlag = sessionStorage.getItem('classicNav');
if (hasNavFlag) {
  sessionStorage.removeItem('classicNav');
} else if (window.location.pathname.startsWith('/classic') && !redirectPath) {
  window.location.href = '/';
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
