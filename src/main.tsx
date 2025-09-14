import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Add type declarations for window.ethereum
declare global {
  interface Window {
    ethereum?: {
      request: (args: {
        method: string;
        params?: unknown[];
      }) => Promise<unknown>;
      on: (event: string, handler: (data: string | string[]) => void) => void;
      removeListener: (
        event: string,
        handler: (data: string | string[]) => void
      ) => void;
    };
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
