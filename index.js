const fetch = require('node-fetch');
const fs = require('fs');

// Create a command line application that processes a file list of pokemon names 
// (each name seperated by a new line) and logs each Pokemon's types (for some 
// there are many) according to the pokeapi.co API.

const pokemonS = fs.readFileSync('pokemon.txt').toString().split('\n')
pokemonS.forEach(pokemon => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then(response => response.json())
.then(function (json) {
  let name = json.name[0].toUpperCase() + json.name.slice(1);
  let types = json.types.map(type => type['type']['name'])
  console.log(name + ': ' +types.join(', '))
}))