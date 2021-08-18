import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './css/tailwind.css';

if (localStorage.getItem('nightwind-mode') === 'dark' || (!('nightwind-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
