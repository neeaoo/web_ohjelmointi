function kello() {
  let day = new Date;
  let hour = day.getHours();
  let min = day.getMinutes();
  let sec = day.getSeconds();

  document.getElementById('kello').innerHTML = hour + ': ' + min + ': ' + sec;
}
setInterval(kello, 1000);