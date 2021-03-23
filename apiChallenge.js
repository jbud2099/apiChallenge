let pokemonList = document.querySelector('ul');

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let pokemon = json.results;
    displayPokemon (pokemon)
    // for(p of pokemon) {
    //     let listItem = document.createElement('li');
    //     listItem.innerHTML = '<p>' + p.name + '</p>';
    //     pokemonList.appendChild(listItem);
    // }

});

function displayPokemon (pokemon) {
    console.log(pokemon)
    for(p of pokemon) {
        let listItem = document.createElement('li');
        const pokemonLists = p.name;
        let lists = pokemonLists[0].toUpperCase() + pokemonLists.substring(1);
        console.log(lists)
        listItem.innerHTML = '<p>' + lists + '</p>';
        pokemonList.appendChild(listItem);
    }

    let pokeArray = ["https://pokeapi.co/api/v2/pokemon/1/","https://pokeapi.co/api/v2/pokemon/2/","https://pokeapi.co/api/v2/pokemon/3/","https://pokeapi.co/api/v2/pokemon/4/","https://pokeapi.co/api/v2/pokemon/5/","https://pokeapi.co/api/v2/pokemon/6/","https://pokeapi.co/api/v2/pokemon/7/","https://pokeapi.co/api/v2/pokemon/8/","https://pokeapi.co/api/v2/pokemon/9/","https://pokeapi.co/api/v2/pokemon/10/","https://pokeapi.co/api/v2/pokemon/11/","https://pokeapi.co/api/v2/pokemon/12/","https://pokeapi.co/api/v2/pokemon/13/","https://pokeapi.co/api/v2/pokemon/14/","https://pokeapi.co/api/v2/pokemon/15/","https://pokeapi.co/api/v2/pokemon/16/","https://pokeapi.co/api/v2/pokemon/17/","https://pokeapi.co/api/v2/pokemon/18/","https://pokeapi.co/api/v2/pokemon/19/","https://pokeapi.co/api/v2/pokemon/20/"]
    pokeArray.forEach((pokemonList, index) => {
        fetch(pokemonList)
        .then(function(response) {
            return response.json();
        })
        .then(function(results) {
            pokeInfo(results)
        })
    })

    function pokeInfo (pokemon) {
        console.log(pokemon)
    }
}

