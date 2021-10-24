const API_URL = 'https://pokeapi.co';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200){



        const data = JSON.parse(this.response);
        console.log(data.results);
       
        const HTMLResponse = document.querySelector('#app');

        const template = data.results.map((pokemon) => `<li>${pokemon.name}</li>`);
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
    }

}


xhr.addEventListener("load", onRequestHandler);
xhr.open("GET",  `${API_URL}/api/v2/pokemon`)
xhr.send();