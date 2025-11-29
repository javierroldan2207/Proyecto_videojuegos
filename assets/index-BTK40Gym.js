(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const u="/Proyecto_videojuegos/assets/portada-CRRpsD_2.jpg";function a(){return`
    <footer>
      <p>&copy; 2025 Javier Roldan -Videojuegos</p>
    </footer>
  `}function f(){return`
    <section class="home">
      <h1>Bienvenido a la Home</h1>
      <p>Explora nuestra lista de videojuegos y agrega tus favoritos.</p>
      <div class="home-image">
        <img src="${u}" alt="Videojuegos">
      </div>
    </section>
    ${a()}
  `}const h="https://692aa71e7615a15ff24d3f93.mockapi.io/api/games";async function l(){try{const t=await fetch(h);if(!t.ok)throw new Error(`Error al cargar los juegos: ${t.status}`);return await t.json()||[]}catch(t){return console.error("Error en fetchGames:",t),[]}}const s={favorites:(JSON.parse(localStorage.getItem("favorites"))||[]).filter(t=>t&&typeof t.id=="string")};function g(t){t&&!s.favorites.find(e=>String(e.id)===String(t.id))&&(s.favorites.push(t),localStorage.setItem("favorites",JSON.stringify(s.favorites)))}function p(t){s.favorites=s.favorites.filter(e=>e.id!==t),localStorage.setItem("favorites",JSON.stringify(s.favorites))}window.addFavoriteFromList=async t=>{const e=String(t),n=(await l()).find(o=>String(o.id)===e);return n?(g(n),window.location.hash="#/list",window.router(),!0):!1};async function m(){const t=await l();if(!Array.isArray(t)||t.length===0)return`
      <section>
        <h1>Listado de Juegos</h1>
        <p>No se pudieron cargar los juegos. (Verifica consola o la URL de la API).</p>
      </section>
      ${a()}
    `;let e=`
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
  `;return t.forEach(r=>{e+=`
      <tr>
        <td>${r.name}</td>
        <td>${r.genre}</td>
        <td>${r.description}</td>
        <td>$${r.price.toFixed(2)}</td>
        <td><button onclick="addFavoriteFromList('${r.id}')">❤️ Añadir</button></td>
      </tr>
    `}),e+=`
        </tbody>
      </table>
    </section>
    ${a()}
  `,e}window.removeFavoriteFromView=t=>{const e=String(t);p(e),window.location.hash="#/favorites",window.router()};function v(){const t=s.favorites;let e=`
    <section>
      <h1>Mis Favoritos</h1>
      ${t.length===0?"<p>No hay favoritos.</p>":""}
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
  `;return t.forEach(r=>{e+=`
      <tr>
        <td>${r.name}</td>
        <td>${r.genre}</td>
        <td>${r.description}</td>
        <td>$${r.price.toFixed(2)}</td>
        <td><button onclick="removeFavoriteFromView('${r.id}')">❌ Quitar</button></td>
      </tr>
    `}),e+=`
        </tbody>
      </table>
    </section>
    ${a()}
  `,e}function y(){return`
    <section class="about">
      <h1>Sobre mí</h1>
      <ul>
        <li><strong>Nombre:</strong> Javier Roldan</li>
        <li><strong>Email:</strong> javier12@gmail.com</li>
        <li><strong>Teléfono:</strong> +34 600 123 456</li>
        <li><strong>Dirección:</strong> Calle Velazquez 13, Sevillla, España</li>
      </ul>
    </section>
    ${a()}
  `}function w(){return`
    <section>
      <h1>404</h1>
      <p>Página no encontrada.</p>
    </section>
  `}async function d(){const t=document.getElementById("view"),e=location.hash.slice(1).toLowerCase()||"/",n={"/":f,"/list":m,"/favorites":v,"/about":y}[e]||w;t.innerHTML=typeof n=="function"?await n():n()}function b(){return`
    <nav>
      <a href="#/">Inicio</a>
      <a href="#/list">Listado</a>
      <a href="#/favorites">Favoritos</a>
      <a href="#/about">About</a>
    </nav>
  `}window.router=d;document.querySelector("#app").innerHTML=`
  ${b()}
  <main id="view"></main>
`;d();window.addEventListener("hashchange",d);
