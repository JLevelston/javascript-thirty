
const players = [
  { first: 'LeBron', last: 'James', birth: 1984, pro: 16},
  { first: 'Russell', last: 'Westbrook', birth: 1988, pro: 1},
  { first: 'Allen', last: 'Iverson', birth: 1975, pro: 14},
  { first: 'Kobe', last: 'Bryant', birth: 1978, pro: 19},
  { first: 'Damian', last: 'Lillard', birth: 1990, pro: 7},
  { first: 'Kyrie', last: 'Irving', birth: 1992, pro: 8},
  { first: 'DeAaron', last: 'Fox', birth: 1997, pro: 2},
  { first: 'Ja', last: 'Morant', birth: 1999, pro: 1},
  { first: 'Jayson', last: 'Tatum', birth: 1998, pro: 2},
  { first: 'Michael', last: 'Jordan', birth: 1963, pro: 15},
  { first: 'Kawhi', last: 'Leonard', birth: 1991, pro: 8},
];



//Filter players who played pro over 10 years
const ten = players.filter(function(years) {
  if(years.pro >= 10 && years.pro < 20) {
    return true;
  }
});
console.table(ten);



//Gives a list of players full names
const fullNames = players.map(player => player.first + ' ' + player.last);
console.table(fullNames);



//Sorts players from oldest to youngest
const age = players.sort(function(a, b) {
  if(a.birth > b.birth) {
    return 1;
  } else {
      return -1;
  }
});
console.table(age);



//Sorts players by pro years (low to high)
const exp = players.sort(function(a, b) {
  if(a.pro > b.pro) {
    return 1;
  } else {
      return -1;
  }
});
console.table(exp);
