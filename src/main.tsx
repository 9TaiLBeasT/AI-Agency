import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { preloadCriticalResources, setupLazyLoading } from './utils/performance-optimization';

// Initialize performance optimizations
preloadCriticalResources();

// Setup lazy loading after DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupLazyLoading);
} else {
  setupLazyLoading();
}

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
