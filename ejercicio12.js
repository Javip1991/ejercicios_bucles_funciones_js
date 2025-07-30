const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function encontrarMutantePorPoder(mutants, power) {
  const mutanteEncontrado = [];

  for (let i = 0; i < mutants.length; i++) {
    if (mutants[i].power === power) {
      mutanteEncontrado.push(mutants[i].name);
    }
  }

  if (mutanteEncontrado.length > 0) {
    return `Mutante(s) con el poder "${power}": ${mutanteEncontrado.join(', ')}.`;
  } else {
    return `No se encontró ningún mutante con el poder "${power}".`;
  }
}


console.log(encontrarMutantePorPoder(mutants, 'telepathy'));
console.log(encontrarMutantePorPoder(mutants, 'invisibility'));
