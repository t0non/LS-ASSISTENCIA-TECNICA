import {StrictMode, lazy, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import ColdRoom from './ColdRoom.tsx';
import Freezer from './Freezer.tsx';
import Fridge from './Fridge.tsx';
import Areas from './Areas.tsx';
import About from './About.tsx';
import Contact from './Contact.tsx';
import Blog from './Blog.tsx';
import {blogPosts} from './blog-posts';
import './index.css';
const Commercial = lazy(() => import('./Commercial.tsx'));
const pagePath = window.location.pathname.replace(/\/+$/, '');
const blogSlug = pagePath.startsWith('/blog/') ? pagePath.slice(6) : undefined;
const isBlog = pagePath === '/blog' || blogPosts.some(post=>post.slug===blogSlug);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {pagePath === '/contato' ? <Contact /> : isBlog ? <Blog slug={blogSlug} /> : pagePath === '/sobre' ? <About /> : pagePath === '/onde-atendemos' ? <Areas /> : pagePath === '/conserto-de-geladeira' ? <Fridge /> : pagePath === '/refrigeracao-comercial' ? <Suspense fallback={<div role="status" className="p-6">Carregando LS Assistência Técnica…</div>}><Commercial /></Suspense> : pagePath === '/camara-fria' ? <ColdRoom /> : pagePath === '/freezer' ? <Freezer /> : <App />}
  </StrictMode>,
);
