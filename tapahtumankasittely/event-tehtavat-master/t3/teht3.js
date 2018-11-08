const sum = document.getElementById('sum');
const sub =document.getElementById('sub');
const multi = document.getElementById('multi');
const div = document.getElementById('div');

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

sum.addEventListener('click', function() {
   let sum1 = parseFloat(num1.value);
   let sum2 = parseFloat(num2.value);
   let sumresult = sum1 + sum2;
   vastaus.innerHTML = sumresult;
})

sub.addEventListener('click', function() {
  let sub1 = parseFloat(num1.value);
  let sub2 = parseFloat(num2.value);
  let subresult = sub1 - sub2;
  vastaus.innerHTML = subresult;
})

multi.addEventListener('click', function() {
  let multi1 = parseFloat(num1.value);
  let multi2 = parseFloat(num2.value);
  let multiresult = multi1 * +multi2;
  vastaus.innerHTML = multiresult;
})

div.addEventListener('click', function() {
  let div1 = parseFloat(num1.value);
  let div2 = parseFloat(num2.value);
  let divresult = div1 / div2;
  vastaus.innerHTML = divresult;
})

