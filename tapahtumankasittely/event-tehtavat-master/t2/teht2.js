const kuva = document.getElementById('kuva');
const teksti = document.querySelector('p');

kuva.addEventListener('mouseover', function () {
  teksti.style.display = 'block';
});

kuva.addEventListener('mouseleave', function () {
  teksti.style.display = 'none';
});