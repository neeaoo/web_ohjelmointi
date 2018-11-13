document.getElementById('berry').style.backgroundColor ="red";
const mansikka = document.getElementById('berry').innerHTML;
console.log('I found the berry: ' + mansikka);

document.querySelector('li[data-foodtype = squishy]').style.backgroundColor="orange";
const appelsiini = document.querySelector('li[data-foodtype = squishy]').innerHTML;
console.log('I found the berry: ' + appelsiini);

const lista = document.getElementsByTagName('li');
console.log(lista);

for(let i = 0; i < lista.length; i++) {
  lista[3].style.backgroundColor = 'green';
  lista[i].style.width = '100px';
  lista[i].style.listStyleType = 'none';
  console.log('Using the for loop here: ' + lista);
}

const nodeLista = document.querySelectorAll('li');
console.log(nodeLista);

nodeLista.forEach(item => {
  item.style.border = '1px solid black';
});
