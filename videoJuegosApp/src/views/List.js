import { fetchGames } from '../api.js';
import { addFavorite } from '../state.js';
import { Footer } from '../components/Footer.js';

window.addFavoriteFromList = async (id) => {
  const gameIdString = String(id); 
  const games = await fetchGames();
  
  const game = games.find(g => String(g.id) === gameIdString); 
  
  if (game) {
    addFavorite(game);
    window.location.hash = '#/list'; 
    window.router(); 
    return true; 
  }
  return false; 
};

export async function List() {
  const games = await fetchGames(); 

  if (!Array.isArray(games) || games.length === 0) {
    return `
      <section>
        <h1>Listado de Juegos</h1>
        <p>No se pudieron cargar los juegos.</p>
      </section>
      ${Footer()}
    `;
  }
  
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

  games.forEach(game => {
    html += `
      <tr>
        <td>${game.name}</td>
        <td>${game.genre}</td>
        <td>${game.description}</td>
        <td>$${game.price.toFixed(2)}</td>
        <td><button onclick="addFavoriteFromList('${game.id}')">❤️</button></td>
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