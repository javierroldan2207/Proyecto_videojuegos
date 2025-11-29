import { fetchGames } from '../api.js';
import { addFavorite } from '../state.js';
import { Footer } from '../components/Footer.js';

window.addFavoriteFromList = async (id) => {
  const gameIdString = String(id); 
  const games = await fetchGames();
  
  const game = games.find(g => g.id === gameIdString); 
  
  if (game) {
    addFavorite(game);
    window.router(); 
  }
};

export async function List() {
  const games = await fetchGames(); 

  if (!Array.isArray(games) || games.length === 0) {
    return `
      <section>
        <h1>Listado de Juegos</h1>
        <p>No se pudieron cargar los juegos. (Verifica consola o la URL de la API).</p>
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

  games.forEach((game) => {
    html += `
      <tr>
        <td>${game.name}</td>
        <td>${game.genre}</td>
        <td>${game.description}</td>
        <td>$${game.price.toFixed(2)}</td>
        <td><button onclick="addFavoriteFromList('${game.id}')">❤️ Añadir</button></td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </section>
    ${Footer()}
  `;

<<<<<<< HEAD
=======
  window.addFavoriteFromList = (id) => {
    const game = games.find(g => g.id == id);
    addFavorite(game);
    document.getElementById('view').innerHTML = List();
  };

>>>>>>> d014c1124a89f6eb52771552c9fc73ba2b5a3aa7
  return html;
}