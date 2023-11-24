import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import { ThemeSwitcher } from "./components/ThemeSwitcher";

import './style.css';
import './flags.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <ThemeSwitcher />
             <App />
        </PrimeReactProvider>
    </React.StrictMode>
);