//Mostrar listado de videojuegos
import Navbar from '../components/Navbar.js';

export default function Listado() {
    const div = document.createElement('div');
    div.className = 'listado';

    div.appendChild(Navbar());

    const content = document.createElement('div');
    content.className = 'listado-content';
    content.innerHTML = `
        <h1>Listado de Videojuegos</h1>
        <p>Aquí encontrarás una lista de videojuegos disponibles.</p>
    `;
    div.appendChild(content);

    return div; 
}
