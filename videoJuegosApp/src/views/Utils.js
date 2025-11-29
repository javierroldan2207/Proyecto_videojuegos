const FAVORITOS_KEY = 'favoritos';

export function getFavoritos() {
  const favs = localStorage.getItem(FAVORITOS_KEY);
  return favs ? JSON.parse(favs) : [];
}

export function setFavoritos(favs) {
  localStorage.setItem(FAVORITOS_KEY, JSON.stringify(favs));
}
