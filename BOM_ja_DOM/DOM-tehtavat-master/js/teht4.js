const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];



for (let i = 0; i < kuvat.length; i++) {
  const lista = document.createElement('li');
  const kuva = document.createElement('img');
  kuva.src = kuvat[i];
  lista.appendChild(kuva);
  document.querySelector('ul').appendChild(lista);


}

