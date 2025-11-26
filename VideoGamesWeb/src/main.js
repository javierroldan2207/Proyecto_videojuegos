import Navbar from '../src/components/Navbar.js';

export default function Home() {
    const div = document.createElement('div');
    div.className = 'home';

    div.appendChild(Navbar());

    const content = document.createElement('div');
    content.className = 'home-content';
    content.innerHTML = `
        <h1>🎮 Bienvenido a GameZone</h1>
        <p>Explora tus videojuegos favoritos.</p>
    `;
    div.appendChild(content);

    return div; 
}

