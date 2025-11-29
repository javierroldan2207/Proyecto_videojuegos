import { state, removeFavorite } from '../state.js';
import { Footer } from '../components/Footer.js';

window.removeFavoriteFromView = (id) => {
    const gameIdString = String(id);
    removeFavorite(gameIdString); 
    window.location.hash = '#/favorites';
    window.router(); 
};

export function Favorites() {
  const games = state.favorites;

  let html = `
    <section>
      <h1>Mis Favoritos</h1>
      ${games.length === 0 ? '<p>No hay favoritos.</p>' : ''}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Género</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
  `;
  games.forEach(game => {
    html += `
      <tr>
        <td>${game.name}</td>
        <td>${game.genre}</td>
        <td>${game.description}</td>
        <td>$${game.price.toFixed(2)}</td>
        <td><button onclick="removeFavoriteFromView('${game.id}')">❌ Quitar</button></td>
      </tr>
    `;
  });
  html += `
        </tbody>
      </table>
    </section>
    ${Footer()}
  `;

  return html;
}