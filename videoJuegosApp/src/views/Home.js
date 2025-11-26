import imgSrc from '../assets/portada.jpg';
import { Footer } from '../components/Footer.js';

export function Home() {
  return `
    <section class="home">
      <h1>Bienvenido a la Home</h1>
      <p>Explora nuestra lista de videojuegos y agrega tus favoritos.</p>
      <div class="home-image">
        <img src="${imgSrc}" alt="Videojuegos">
      </div>
    </section>
    ${Footer()}
  `;
}
