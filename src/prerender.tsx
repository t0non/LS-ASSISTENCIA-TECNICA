import {createElement} from 'react';
import {renderToString} from 'react-dom/server';
import App from './App';
import ColdRoom from './ColdRoom';
import Freezer from './Freezer';
import Commercial from './Commercial';
import Fridge from './Fridge';
import Areas from './Areas';
import About from './About';
import Contact from './Contact';
const components={'/':App,'/camara-fria/':ColdRoom,'/freezer/':Freezer,'/refrigeracao-comercial/':Commercial,'/conserto-de-geladeira/':Fridge,'/onde-atendemos/':Areas,'/sobre/':About,'/contato/':Contact};
export function renderPage(path:string) {
 const Component=components[path as keyof typeof components];
 if(!Component)throw new Error(`Página sem renderizador: ${path}`);
 return renderToString(createElement(Component));
}
