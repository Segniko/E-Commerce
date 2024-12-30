import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App'; // Adjust the import path as necessary
import './index.css'; // Your global styles if any

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
