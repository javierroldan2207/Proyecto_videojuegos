export async function fetchGames() {
  try {
    const response = await fetch('http://localhost:3000/games');
    const data = await responese.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
