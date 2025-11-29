import { Home } from './views/Home.js';
import { List } from './views/List.js';
import { Favorites } from './views/Favorites.js';
import { About } from './views/About.js';
import { NotFound } from './views/NotFound.js';

export async function router() {
  const view = document.getElementById('view');
  const route = location.hash.slice(1).toLowerCase() || '/';

  const routes = {
    '/': Home,
    '/list': List,
    '/favorites': Favorites,
    '/about': About
  };

  const screen = routes[route] || NotFound;
  view.innerHTML = typeof screen === 'function' ? await screen() : screen();
}