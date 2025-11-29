const API_URL = 'https://692aa71e7615a15ff24d3f93.mockapi.io/api/games';

export async function fetchGames() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Error al cargar los juegos: ${res.status}`);
    const data = await res.json();
    
    return data || []; 
    
  } catch (error) {
    console.error("Error en fetchGames:", error);
    return [];
  }
}