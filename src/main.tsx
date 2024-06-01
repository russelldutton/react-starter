import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { styleSheet } from './css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <style dangerouslySetInnerHTML={{ __html: styleSheet() }} />
    <App />
  </React.StrictMode>
);
