import { fetchGames } from '../api.js';
import { addFavorite } from '../state.js';
import { Footer } from '../components/Footer.js';

export async function List() {
  const games = await fetchGames();

  let html = `
    <section>
      <h1>Listado de Juegos</h1>
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

  games.forEach((game) => {
    html += `
      <tr>
        <td>${game.name}</td>
        <td>${game.genre}</td>
        <td>${game.description}</td>
        <td>$${game.price.toFixed(2)}</td>
        <td><button onclick="addFavoriteFromList(${game.id})">❤️ Añadir</button></td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </section>
    ${Footer()}
  `;

  window.addFavoriteFromList = (id) => {
    const game = games.find(g => g.id == id);
    addFavorite(game);
    document.getElementById('view').innerHTML = List();
  };

  return html;
}
