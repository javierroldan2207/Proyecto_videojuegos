export const state = {
  favorites: (JSON.parse(localStorage.getItem('favorites')) || []).filter(g => g && typeof g.id === 'string')
};

export function addFavorite(game) {
  if (game && !state.favorites.find(g => String(g.id) === String(game.id))) {
    state.favorites.push(game);
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }
}

export function removeFavorite(gameId) {
  state.favorites = state.favorites.filter(g => String(g.id) !== String(gameId));
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
}