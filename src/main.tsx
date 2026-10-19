import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import ColdRoom from './ColdRoom.tsx';
import Freezer from './Freezer.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {window.location.pathname.replace(/\/+$/, '') === '/camara-fria' ? <ColdRoom /> : window.location.pathname.replace(/\/+$/, '') === '/freezer' ? <Freezer /> : <App />}
  </StrictMode>,
);
