import {StrictMode, lazy, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import ColdRoom from './ColdRoom.tsx';
import Freezer from './Freezer.tsx';
import './index.css';
const Commercial = lazy(() => import('./Commercial.tsx'));
const pagePath = window.location.pathname.replace(/\/+$/, '');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {pagePath === '/refrigeracao-comercial' ? <Suspense fallback={<div role="status" className="p-6">Carregando LS Assistência Técnica…</div>}><Commercial /></Suspense> : pagePath === '/camara-fria' ? <ColdRoom /> : pagePath === '/freezer' ? <Freezer /> : <App />}
  </StrictMode>,
);
