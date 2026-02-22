import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const hasNavFlag = sessionStorage.getItem('classicNav');
if (hasNavFlag) {
  sessionStorage.removeItem('classicNav');
} else if (window.location.pathname.startsWith('/classic')) {
  window.location.href = '/';
}

createRoot(document.getElementById("root")!).render(<App />);
