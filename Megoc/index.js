const pasio = document.getElementById('pasio');
const pasioH1 = document.querySelector('main article#pasio > h1');
const quiSom = document.getElementById('qui-som');
const proximsConcerts = document.getElementById('proxims-concerts');
const main = document.querySelector('main');
const media = window.matchMedia('(max-width: 960px)');
const footer = document.querySelector('footer');
const cantar = document.getElementById('cantar');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.style.display = 'none';

const estat = {
  modal: false,
  quiSom: true,
  pasio: true,
  concerts: false,
  cantar: false,
  mobileMenu: false,
};

media.addEventListener('change', refresh);

function mostraConcerts() {
  if (estat.cantar) {
    estat.concerts = true;
    estat.modal = true;
    estat.cantar = false;
    cantar.style.display = 'none';
    proximsConcerts.style.display = 'block';
    proximsConcerts.classList.remove('animate__fadeOut');
    proximsConcerts.addEventListener('click', amagaConcerts);
    return;
  }
  estat.concerts = true;
  estat.pasio = false;
  estat.quiSom = false;
  estat.modal = true;
  quiSom.classList.add('animate__fadeOut');
  pasio.classList.add('animate__fadeOut');
  setTimeout(() => {
    quiSom.style.display = 'none';
    pasio.style.display = 'none';
    main.style.display = 'flex';
    proximsConcerts.classList.remove('animate__fadeOut');
    proximsConcerts.style.display = 'block';
    proximsConcerts.classList.add('yellow-shadow2');
    proximsConcerts.addEventListener('click', amagaConcerts);
  }, 500);
}

function amagaConcerts() {
  estat.concerts = false;
  estat.pasio = true;
  estat.quiSom = true;
  estat.modal = true;
  quiSom.classList.remove('animate__fadeOut');
  pasio.classList.remove('animate__fadeOut');
  quiSom.classList.add('animate__fadeIn');
  pasio.classList.add('animate__fadeIn');
  proximsConcerts.classList.add('animate__fadeOut');
  proximsConcerts.classList.add('animate__fadeOut');
  main.style.display = 'grid';
  proximsConcerts.style.display = 'none';
  quiSom.style.display = 'flex';
  pasio.style.display = 'flex';
}

function tagradaCantar() {
  if (estat.concerts) {
    estat.concerts = false;
    estat.modal = true;
    estat.cantar = true;
    proximsConcerts.style.display = 'none';
    cantar.style.display = 'block';
  }
  if (estat.quiSom) {
    estat.quiSom = false;
    estat.pasio = false;
    estat.modal = true;
    estat.cantar = true;
    main.style.display = 'flex';
    quiSom.style.display = 'none';
    pasio.style.display = 'none';
    cantar.style.display = 'flex';
  }
}

function refresh() {
  if (estat.modal) {
    // main.style.display = 'none';
    // footer.style.display = 'none';
    location.reload();
  }
}
function burguerMenu() {
  estat.modal = true;
  if (estat.mobileMenu === false) {
    estat.mobileMenu = true;
    mobileMenu.style.display = 'flex';
  } else {
    estat.mobileMenu = false;
    mobileMenu.style.display = 'none';
  }
}
