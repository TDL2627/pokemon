let pokemon = [
    {
        Ppic:"https://picsum.photos/300?random=1",
        name:"Charizard",
        type:"fire",
        details:"The final form of charmander looks like a dragon but isnt."
    },
    {
        Ppic:"https://picsum.photos/300?random=2",
        name:"Lucario",
        type:"Dark",
        details:"The final for of Riolu .Can fight like a ryu from street fighter"
    }
];
function createPokeball(pokeball) {
    let createdPokeball = `<div class="pokeball">
        <img src="${pokeball.Ppic}">
        <h3>${pokeball.name}</h3>
        <h5>${pokeball.type}</h5>
        <p>${pokeball.details}</p>
      </div>
    `;
    return createdPokeball;
  }

function displayBalls() {
    let pokemons = document.querySelector(".pokemon");
    for (pokeball of pokemon ){
        let item = createPokeball(pokeball);
        pokemons.innerHTML += item;
    }
}
displayBalls();