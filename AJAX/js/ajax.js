function hakuF (){
  const hakuteksti = document.getElementById('hakuteksti').value;
  fetch(`https://api.tvmaze.com/search/shows?q=${hakuteksti}`).
      then(vastaus => vastaus.json()).
      then(sarjat => {
        console.log(sarjat);
        const tulos = document.getElementById('tulos');
        tulos.innerHTML = sarjat.map(({show}) => `
           ${show.image ? `<img src = "${show.image.medium}">` : ''}
               <h2>${show.name}</h2>
                   <h7>${show.url}</h7> <br>
                   <h7>${show.genres}</h7>
                   <h7>${show.summary}</h7>
               `).join('');
      })

}
const hakunappi = document.getElementById('hakunappi');
hakunappi.addEventListener('click', hakuF);

