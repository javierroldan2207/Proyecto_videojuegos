export default function Navbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.innerHTML = `
        <a href="">Home</a>
        <a href="listado">Listado de Juegos</a>
        <a href="favoritos">Favoritos</a>
        <a href="about">About</a>
    `;
    return nav;
}
