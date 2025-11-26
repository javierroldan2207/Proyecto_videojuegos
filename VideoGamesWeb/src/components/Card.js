export default function Card(juego) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = 
    `<h3>${juego.nombre}</h3>
        <p>Plataforma: ${juego.plataforma}</p>
        <p>Género: ${juego.genero}</p>
        <a href="#/detalle/${juego.id}">Ver detalle</a>`;
    return card;
}
