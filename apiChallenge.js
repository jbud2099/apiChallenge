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
        let img = document.createElement('img')
        p.name === "bulbasaur" ? img.src = "./assets/baulbasaur.jpg": ""
        p.name === "ivysaur" ? img.src = "./assets/ivysaur.jpg": ""
        p.name === "venusaur" ? img.src = "./assets/venusaur.jpg": ""
        p.name === "charmander" ? img.src = "./assets/charmander.jpg": ""
        p.name === "charmeleon" ? img.src = "./assets/charmeleon.jpg": ""
        p.name === "charizard" ? img.src = "./assets/charizard.jpg": ""
        p.name === "squirtle" ? img.src = "./assets/squirtle.jpg": ""
        p.name === "wartortle" ? img.src = "./assets/wartortle.jpg": ""
        p.name === "blastoise" ? img.src = "./assets/blastoise.jpg": ""
        p.name === "caterpie" ? img.src = "./assets/caterpie.jpg": ""
        p.name === "metapod" ? img.src = "./assets/metapod.jpg": ""
        p.name === "butterfree" ? img.src = "./assets/butterfree.jpg": ""
        p.name === "weedle" ? img.src = "./assets/weedle.jpg": ""
        p.name === "kakuna" ? img.src = "./assets/kakuna.jpg": ""
        p.name === "beedrill" ? img.src = "./assets/beedrill.jpg": ""
        p.name === "pidgey" ? img.src = "./assets/pidgey.jpg": ""
        p.name === "pidgeotto" ? img.src = "./assets/pidgeotto.jpg": ""
        p.name === "pidgeot" ? img.src = "./assets/pidgeot.jpg": ""
        p.name === "rattata" ? img.src = "./assets/rattata.jpg": ""
        p.name === "raticate" ? img.src = "./assets/raticate.jpg": ""
        pokemonList.appendChild(img)
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
        var pokeCards = document.createElement("img");
        pokeCards.src = "https://images-na.ssl-images-amazon.com/images/I/71jjQ9osadL._AC_SY606_.jpg";
        
    }
}

