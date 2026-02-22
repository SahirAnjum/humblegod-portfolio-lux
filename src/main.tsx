import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const hasNavFlag = sessionStorage.getItem('luxNav');
if (hasNavFlag) {
  sessionStorage.removeItem('luxNav');
} else if (window.location.pathname.startsWith('/lux')) {
  window.location.href = '/';
}

createRoot(document.getElementById("root")!).render(<App />);
