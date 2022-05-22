import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

const { worker } = require('./mocks/browser');
worker.start();

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
