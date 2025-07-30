const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function xmenMasAntiguo(xMen) {
  if (xMen.length === 0) return null;

  let masAntiguo = xMen[0];

  for (let i = 1; i < xMen.length; i++) {
    if (xMen[i].year < masAntiguo.year) {
      masAntiguo = xMen[i];
    }
  }

  return oldest;
}

const masAntiguo = xmenMasAntiguo(xMen);
console.log("El miembro más antiguo es:", masAntiguo);
