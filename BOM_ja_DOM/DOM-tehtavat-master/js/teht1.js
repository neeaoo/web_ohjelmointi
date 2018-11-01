document.getElementsByTagName('td')[0].innerHTML = '<td>Neea</td>';

document.getElementsByTagName('td')[1].innerHTML = '<td>Oja</td>';

document.getElementsByTagName('td')[2].innerHTML = '<td>neea_neekeri_944</td>';

document.getElementsByTagName('td')[3].innerHTML = '<td>Puistikko 3, 00666 HEL</td>';


let puh = document.getElementsByTagName('tr')[0];
let x = puh.insertCell(4);
x.innerHTML = 'Puhelin';

let nro = document.getElementsByTagName('tr')[1];
let y = nro.insertCell(4);
y.innerHTML = '+357 85456789';

document.getElementsByTagName('td')[3].innerHTML = '<td></td>';
document.getElementsByTagName('th')[2].innerHTML = '<th></th>';