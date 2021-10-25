const aplicacion = document.querySelector('#app')
const getURL =  new URLSearchParams(window.location.search)
id = getURL.get('id')

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

console.log(`${API_URL}/${id}`);

fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(data => {
        
        const pokemon = document.createElement('p');
        pokemon.innerHTML = data.name;
        const peso = document.createElement('p');
        peso.innerHTML = data.weight;
        const altura = document.createElement('p');
        altura.innerHTML = data.height;

        image1 = new Image();
        image1.src = data.sprites.back_default;
        var aTag = document.createElement('a');
        aTag.href = data.sprites.back_default;
        aTag.appendChild(image1)

        aplicacion.appendChild(aTag);

        aplicacion.appendChild(pokemon);
        aplicacion.appendChild(peso);
        aplicacion.appendChild(altura);

    })