export const state = {
<<<<<<< HEAD
  favorites: (JSON.parse(localStorage.getItem('favorites')) || []).filter(g => g && typeof g.id === 'string')
=======
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
  
>>>>>>> d014c1124a89f6eb52771552c9fc73ba2b5a3aa7
};

export function addFavorite(game) {
  if (game && !state.favorites.find(g => g.id === game.id)) {
    state.favorites.push(game);
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }
}

export function removeFavorite(gameId) {
  state.favorites = state.favorites.filter(g => g.id !== gameId);
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
}