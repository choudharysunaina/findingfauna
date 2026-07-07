import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGA } from './utils/analytics';

// load GA4 after first paint so gtag.js never competes with initial render
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => initGA());
} else {
  setTimeout(initGA, 2000);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
