const API_URL = 'https://pokeapi.co';

const xhr = new XMLHttpRequest();

const HTMLResponse = document.querySelector("#app")
const ul = document.createElement('ul');
const i = 0;

fetch(`${API_URL}/api/v2/pokemon`)
    .then((response) => response.json() )
    .then((pokemons) => {
        
        pokemons.results.forEach((pokemon, indice) => {
            
            const elem = document.createElement('p');

            elem.setAttribute('id', indice+1);
            elem.innerHTML = pokemon.name

            elem.addEventListener('click', function(){
                window.location.href = `./detail.html?id=${indice+1}`
            })

            HTMLResponse.appendChild(elem);
            
        });
        HTMLResponse.appendChild(ul);
        
    });
 

