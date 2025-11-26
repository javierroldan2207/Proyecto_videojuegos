import Home from './views/Home.js';
import Listado from './views/listado.js';

const routes = {
    '/': Home,
    '/listado': Listado
};

export default function router() {
    const app = document.getElementById('app');
    app.innerHTML = ''; 

    const hash = location.hash ;
    const viewFunc = routes[hash];

    if(viewFunc) {
        app.appendChild(viewFunc());
    } 
}
