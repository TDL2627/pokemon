let pokemon = [
    {
        Ppic:"/images/charizard.png",
        name:"Charizard",
        type:"Fire",
        details:"The final form of Charmander looks like a dragon but isnt."
    },
    {
        Ppic:"/images/greninja.png",
        name:"Greninja",
        type:"Water",
        details:"The final form of Froakie.A ninja frog."
    },
    {
        Ppic:"/images/lucario.png",
        name:"Lucario",
        type:"Dark",
        details:"The final form of Riolu .Can fight like a ryu from street fighter."
    },
    {
        Ppic:"/images/zekrom.png",
        name:"Zekrom",
        type:"Lightning",
        details:"A legendary pokemon .A electric dragon."
    },
    {
        Ppic:"/images/arceus.png",
        name:"Arceus",
        type:"god",
        details:"The god of pokemon.All types can beat anything."
    }
];
function createPokeball(pokeball) {
    let createdPokeball = `
    <div class="pokeball">
        <img class="pic" src="${pokeball.Ppic}">
        <h3>${pokeball.name}</h3>
        <h5>${pokeball.type}</h5>
        <p>${pokeball.details}</p>
      </div>
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