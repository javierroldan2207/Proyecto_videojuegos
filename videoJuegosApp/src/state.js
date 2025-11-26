export const state = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
};

export function addFavorite(game) {
  if (!state.favorites.find(g => g.id === game.id)) {
    state.favorites.push(game);
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }
}

export function removeFavorite(gameId) {
  state.favorites = state.favorites.filter(g => g.id !== gameId);
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
}
