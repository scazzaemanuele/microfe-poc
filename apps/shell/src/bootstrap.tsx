import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import './styles.css';

const mountApp = () => {
  // Find all elements with data-app="shell-app"
  const mountPoints = document.querySelectorAll('[data-app="shell-app"]');

  if (mountPoints.length === 0) {
    // Fallback to the regular root element if no custom mount points found
    const rootElement = document.getElementById('root');
    if (rootElement) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(
        <StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StrictMode>
      );
    }
  } else {
    // Mount the app at each found element
    mountPoints.forEach((mountPoint) => {
      const root = ReactDOM.createRoot(mountPoint as HTMLElement);
      root.render(
        <StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StrictMode>
      );
    });
  }
};

// Initialize the app
mountApp();

// Export a function that can be called to mount the app manually if needed
(window as any).mountShellApp = mountApp;
