import { Footer } from '../components/Footer.js';

export function About() {
  return `
    <section class="about">
      <h1>Sobre mí</h1>
      <ul>
        <li><strong>Nombre:</strong> Javier Roldan</li>
        <li><strong>Email:</strong> javier12@gmail.com</li>
        <li><strong>Teléfono:</strong> +34 600 123 456</li>
        <li><strong>Dirección:</strong> Calle Velazquez 13, Sevillla, España</li>
      </ul>
    </section>
    ${Footer()}
  `;
}
