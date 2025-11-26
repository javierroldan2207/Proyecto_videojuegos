import { router } from './router.js';
import { Navbar } from './components/Navbar.js';
import './styles/style.css';

document.querySelector('#app').innerHTML = `
  ${Navbar()}
  <main id="view"></main>
`;

router();
window.addEventListener('hashchange', router);
