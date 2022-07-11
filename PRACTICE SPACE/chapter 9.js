'use strict';
const restaurant = {
  name: 'Tundetop',
  location: 'camp,abeokuta',
  categories: ['Nigerian', 'vegetarian', 'organic', 'pizzeria'],
  starterMenu: ['rice', 'bean', 'spagetti', 'salad'],
  mainMenu: ['pizza', 'pasta', 'risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thurs: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({
    mainIndex = 2,
    starterIndex = 1,
    time = '22:30',
    address = '7 surulere,camp',
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

/*
restaurant.orderDelivery({
  mainIndex: 1,
  starterIndex: 0,
  time: '20:45',
  address: '2,people of God street',
});
restaurant.orderDelivery({
  // mainIndex,
  // starterIndex: 1,
  // time,
  // address,
});

console.log(restaurant.order(2, 0));
const [starter, menu] = restaurant.order(2, 0);
console.log(starter, menu);

// mutating array
let [first, third] = restaurant.mainMenu;
console.log(first, third);
[first, third] = [third, first];
console.log(first, third);

// Destructing objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const { Menu = [], starterMenu: starters = [] } = restaurant;
console.log(Menu, starters);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
  starterMenu: choose,
} = restaurant;
console.log(restaurantName, hours, tags, choose);

// NESTED ARRAY
const nested = [2, 5, [7, 8, 9]];
const [i, , [k, , , , l = 3]] = nested;
console.log(i, k, l);

// Mutating objects
let a = 12;
let b = 21;
let c = [];
const numbers = { a: 0, b: 1, c: 2 };
({ a, b, c } = numbers);
console.log(a, b, c);
const {
  fri: { open: x, close: y },
} = openingHours;
// console.log(open, close);
console.log(x, y);
// spread operator
const arr = [4, 5, 6];
const newArr = [1, 2, 3, ...arr, 9];
console.log(...newArr, newArr);

const newMenu = [...restaurant.mainMenu, 'Eba'];
console.log(newMenu);

const menus = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menus);

const str = 'oluwagbemiga';
const letters = [...str, '', 'S.'];
console.log(...str);
console.log(letters);

// REAL WORLD EXAMPLE
// const ingredients = [
//   prompt(`let's make pasta! Ingredient 1?`),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//spread operator on OBJECTS
const newRestaurant = { foundedIn: 2020, ...restaurant, founder: 'gbemiga' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'skilz';
console.log(restaurantCopy.name, restaurant.name);

console.log(restaurantCopy, restaurant);

// DESTRUCTURING USING REST OPERATOR
// Rest pattern
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

let [beans, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  restaurant.starterMenu,
];
console.log(beans, risotto, otherFood);

[beans, risotto, otherFood] = [otherFood, risotto, beans];
console.log(beans, risotto, otherFood);

// REST ON OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// FUNCTIONS USING REST OPERATOR
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(4, 5);
add(2, 3, 4, 5, 6, 7, 8, 9);

const v = [39, 43, 56, 78, 90, 21];
add(...v);

restaurant.orderPizza('meat', 'fish', 'vegetables');

// SHORT CIRCUITING
console.log(true || 'jonas');
console.log(false && 0);
console.log(0 ?? true ?? false);



// CHALLENGE 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = game.players[0];
// console.log(players1);
// const players2 = game.players[1];
// console.log(players2);
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// const team1 = game.odds.team1;
// console.log(team1);
// const draw = game.odds.x;
// console.log(draw);
// const team2 = game.odds.team2;
// console.log(team2);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...goalScorers) {
  console.log(`${goalScorers.length} goals were scored`);
};
printGoals('davies', 'muller', 'lewandowski', 'kimmich');
printGoals(...game.scored);
team1 < team2 && console.log('Team 1 is likely to win');
team1 > team2 && console.log('Team 2 is likely to win');


// THE FOR OF LOOP
const menu = [...restaurant.starterMenu, 7, ...restaurant.mainMenu];
// THE NORMAL FOR LOOP WITH AN ADDITION OFBREAK AND CONTINUE
// for (let i = 0; i < menu.length; i++) {
//   if (typeof menu[i] !== 'number') continue;
//   console.log(menu[i]);
// }

for (const g of menu) {
  if (typeof g === 'number') break;
  console.log(g);
}
for (const g of menu.entries()) {
  // console.log(g);
  console.log(`${g[0] + 1}:${g[1]}`);
}
for (const [i, el] of menu.entries()) {
  // console.log(i);
  // console.log(el);
  // console.log(...menu.entries());
  console.log(`${i + 1}:${el}`);
}
// OPTIONAL CHAINING

const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for (const i of days) {
  const open = restaurant.openingHours[i]?.open ?? 'closed';
  console.log(`on ${i}, we open at ${open}`);
}


// CHALLENGE 2 CONTINUATION OF CHALLENGE 1
for (const [i, u] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${u}`);
}
let score = 0;
const gameOdd = Object.entries(game.odds);
for (const [condition, odd] of gameOdd) {
  const teams = condition === 'x' ? 'draw' : `victory ${game[condition]}`;
  score += odd;
  console.log(`odd of ${teams}: ${odd}`);
}

console.log(score / 3);
// SETS
const sets = new Set(['rice', 'beans', 'beans', 'yam', 'rice']);
console.log(sets);
console.log(sets.size, sets.has('rice'));
sets.delete('rice');
sets.add('bread');
// sets.clear();
console.log(sets);
// CONVERSION OF ASET INTO AN ARRAY
const arrays = [...sets];
console.log(arrays);
for (const i of sets) {
  console.log(i);
}
console.log(new Set('oluwagbemiga').size);


// MAPS
// EMPTY MAPS USING .SET TO INSERT VALUES
const maps = new Map();
maps.set('name', 'Adiyan');

maps
  .set('food', ['rice', 'beans', 'noodles', 'spag'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close')
  .set([1, 2], ['you', 'me']);
console.log(maps.get([1, 2]));

console.log(maps);
console.log(maps.get('name'));
console.log(maps.get(false));
console.log(maps.has('open'));

const time = 20;
console.log(maps.get(time > maps.get('open') && time < maps.get('close')));

// USING  ARRAYS TO INSERT VALUE
const me = new Map([
  ['Question', 'what is the best programming language in the world?'],
  ['Firstname', 'Oluwagbemiga'],
  ['Age', 21],
  ['work', 'Programmer'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try again'],
]);
console.log(me);
console.log(Object.entries(restaurant.openingHours));
const objectToMap = new Map(Object.entries(restaurant.openingHours));
console.log(objectToMap);

// const answer = Number(prompt('Your answer'));

console.log(me.get('Question'));
for (const [key, values] of me) {
  if (typeof key === 'number') console.log(`Answer ${key}, ${values}`);
}
// console.log(me.get(answer === 3) || false);
// console.log(me.get(me.get('correct') === answer));
// console.log(...me);
// console.log([...me.entries()]);
// console.log([...me.keys()]);
// console.log([...me.values()]);

// CHALLENGE 3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
const period = [...gameEvents.keys()].pop();
console.log(period);
console.log(
  `An event happened, on average, every ${period / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents.entries()) {
  const occurence = min <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${occurence}] ${min}:${event} `);
}

// WORKING WITH STRING
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(airline[0]);
console.log(airline.length);
console.log(airline.indexOf('P'));
console.log(airline.indexOf('Air'));
console.log(airline.lastIndexOf('P'));

// SLICE METHOD
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(airline.lastIndexOf(' ')).trim());
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log(airline.slice(-1).toUpperCase());

// example 1
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const position = seat.slice(-1);
  if (position === 'B' || position === 'E')
    console.log('You have the middle seat');
  else {
    console.log('you have the window view');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Example 2  //correction  of a mispelt name
const passenger = 'gbeNGa';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Example 3 //Comparing emails
const email = 'oluwagbemiga@gmail.com';
const loginEmail = '  OLUWAgbemiga@gmail.com \n';
const correctEmail = loginEmail.toLowerCase().trim();
console.log(email === correctEmail);

//Example 4
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

const flight = 'Airbus A320neo';
console.log(flight.includes('neo'));
console.log(flight.startsWith('neo'));
if (flight.startsWith('Airbus') && flight.endsWith('neo')) {
  console.log(`part of the NEW AIRBUS family`);
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('welcome on board');
  }
};
checkBaggage('i have a laptop, some food and a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// SPLIT AND JOIN
console.log('a+very+nice+string'.split('+'));
console.log('Gbangbola Oluwagbemiga'.split(' '));

const [firstName, lastName] = 'Gbangbola Oluwagbemiga'.split(' ');
console.log(firstName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  console.log(names);
  const namesUpper = [];

  for (const n of names) {
    // console.log(n[0]);
    // console.log(n.slice(1));
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('oluwagemiga gbangbola');


// PADEND AND PADSTART
const message = 'Go to gate 23!';
console.log(message.padStart(25, '*').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(58753534279));
console.log(maskCreditCard(3042512));

// REPEAT
const message2 = 'Bad weather......... All departures delayed... ';
console.log(message2.repeat(10));
const planesInLine = function (planes) {
  console.log(`There are ${planes} planes in line ${'✈'.repeat(planes)}`);
};
planesInLine(9);

// CHALLENGE 4

// RAW FUNCTION
// const conversion = function (name) {
//   const myName = name;
//   const reArrange = myName.toLowerCase();
//   const [first, last] = reArrange.split('_');
//   const myNewName = last[0].toUpperCase() + last.slice(1);
//   const overAll = first + myNewName;
//   return overAll;
//   // const myNewName=
// };
// console.log(conversion('OLUWA_gbemiga'));
// console.log(conversion('ADE_oBA'));

// TESTING VALUES
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure


// THE MAIN CHALLENGE 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  const seperate = text.split('\n');
  // console.log(seperate);

  for (const [no, names] of seperate.entries()) {
    // console.log(names);
    const [right, correction] = names.toLowerCase().split('_');
    // console.log(correction);
    // const reArrange = correction[0].toUpperCase() + correction.slice(1);
    const reArrange = correction.replace(
      correction[0],
      correction[0].toUpperCase()
    );
    // console.log(reArrange);
    const done = right + reArrange;
    // console.log(done);
    const all = done.padEnd(20, ' ') + '✅'.repeat(no + 1);
    console.log(all);
  }
});

*/
// TO BE CONTINUED
const flight = `_Delayed_Departure;fao93766109;txl2133758440;11:25
+_Arrival;bru0943384722;fao93766109;11:45
+_Delayed_Arrival;hel7439299980;fao93766109;12:05
+_Departure;fao93766109;lis2323639855;12:30`;

const movement = ticket => ticket.slice(0, 3).toUpperCase();
const flights = flight.split('+');
for (const name of flights) {
  const [depart, from, to, time] = name.split(';');
  const period = time.replace(':', 'h');
  const coming = movement(from);
  const going = movement(to);
  const departures = depart.replaceAll('_', ' ');

  console.log(departures, coming, going, time);
}
