const API_URL = 'https://692aa71e7615a15ff24d3f93.mockapi.io/api/games';

export async function fetchGames() {
  try {
<<<<<<< HEAD
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Error al cargar los juegos: ${res.status}`);
    const data = await res.json();
    
    return data || []; 
    
=======
    const response = await fetch('http://localhost:3000/games');
    const data = await response.json();
    return data;
>>>>>>> d014c1124a89f6eb52771552c9fc73ba2b5a3aa7
  } catch (error) {
    console.error("Error en fetchGames:", error);
    return [];
  }
}