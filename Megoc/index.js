const pasio = document.getElementById('pasio');
const pasioH1 = document.querySelector('main article#pasio > h1');
const quiSom = document.getElementById('qui-som');
const proximsConcerts = document.getElementById('proxims-concerts');
const main = document.querySelector('main');
const media = window.matchMedia('(max-width: 960px)');
const footer = document.querySelector('footer');
let checkModal = false;

media.addEventListener('change', refresh);

function mostraConcerts() {
  checkModal = true;
  quiSom.classList.add('animate__fadeOut');
  pasio.classList.add('animate__fadeOut');
  setTimeout(() => {
    quiSom.style.display = 'none';
    pasio.style.display = 'none';
    main.style.display = 'flex';
    proximsConcerts.classList.add('animate__fadeIn');
    proximsConcerts.style.display = 'block';
    proximsConcerts.addEventListener('click', amagaConcerts);
  }, 1000);
}

function amagaConcerts() {
  quiSom.classList.remove('animate__fadeOut');
  pasio.classList.remove('animate__fadeOut');

  main.style.display = 'grid';
  proximsConcerts.style.display = 'none';
  quiSom.style.display = 'block';
  pasio.style.display = 'block';
  //   pasio.style.position = 'relative';
  pasioH1.style.display = 'none';
  //   quiSom.classList.add('animate__fadeIn');
  //   pasio.classList.add('animate__fadeIn');
}

function refresh() {
  if (checkModal) {
    main.style.display = 'none';
    footer.style.display = 'none';
    location.reload();
  }
}
