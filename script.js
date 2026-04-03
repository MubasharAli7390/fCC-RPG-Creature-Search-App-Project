const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const creatureName = document.getElementById('creature-name');
const creatureId = document.getElementById('creature-id');
const weightEl = document.getElementById('weight');
const heightEl = document.getElementById('height');
const typesEl = document.getElementById('types');
const hpEl = document.getElementById('hp');
const attackEl = document.getElementById('attack');
const defenseEl = document.getElementById('defense');
const specialAttackEl = document.getElementById('special-attack');
const specialDefenseEl = document.getElementById('special-defense');
const speedEl = document.getElementById('speed');
const apiUrl = 'https://rpg-creature-api.freecodecamp.rocks/api/creature/';

async function fetchData(apiUrl) {
  try {
    let url = `https://rpg-creature-api.freecodecamp.rocks/api/creature/${searchInput.value}`;
    console.log(url);
    let data = await fetch(url);
    let simpleData = await data.json();
    let fill = await fillUI(simpleData);
    let type = await getTypes(simpleData.types);
    console.log("success");

  } catch(err) {
    console.log(err);
    alert(`Creature not found`);
  }
}
searchButton.addEventListener("click", fetchData);

function fillUI(d) {
  let name = d.name.toUpperCase();
  creatureName.innerText = `${name}`;
  creatureId.innerText = `${d.id}`;
  weightEl.innerText = `${d.weight}`; 
  heightEl.innerText = `${d.height}` 
  hpEl.innerText = `${d.stats[0].base_stat}`;
  attackEl.innerText = `${d.stats[1].base_stat}`
  defenseEl.innerText = `${d.stats[2].base_stat}`
  specialAttackEl.innerText = `${d.stats[3].base_stat}`
  specialDefenseEl.innerText = `${d.stats[4].base_stat}`
  speedEl.innerText = `${d.stats[5].base_stat}`

}


function getTypes(types) {
  typesEl.innerText = ``;
  for(let i = 0; i < types.length; i++) {
    typesEl.innerHTML += `<span class="type">${types[i].name.toUpperCase()}</span>`;

    console.log(types[i].name);
  }
}
