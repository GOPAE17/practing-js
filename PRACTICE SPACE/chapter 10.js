'use script';
/*
const flight = 'LH234';
const me = {
  name: 'Gbangbola Oluwagbemiga',
  passport: 234677387,
};

const checkIn = function (flightNum, passenger) {
  flightNum = '4aacba0';
  passenger.name = 'mr' + passenger;
  const correct =
    passenger.passport === 234677387
      ? alert('checked in')
      : alert('wrong passport');
};
checkIn(flight, me);
console.log(flight);
console.log(me);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(me);
console.log(me);
checkIn(flight, me);

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  //   console.log(oneWord(str));
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('javascript is damn fun', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// FUNCTION IN FUNCTION

// const greet = function (greeting) {
    //   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Elijah');
// greet('Hello')('Oluwagbemiga');

const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('Hello')('Oluwagbemiga');
const emirates = {
    airline: 'Emirates',
  iatacode: 'EM',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iatacode}${flightNum}`,
      name,
    });
  },
};
emirates.book(21, 'Gbangbola Oluwagbemiga');
emirates.book(20, 'Awokoya Opeyemi');
console.log(emirates);

const book = emirates.book;

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};
const swiss = {
  airline: 'Swiss',
  iatacode: 'SW',
  bookings: [],
};
// CALL AND APPLY METHOD
person = [21, 'bess'];
book.call(eurowings, 2001, 'Elijah');
book.apply(eurowings, person);
book.call(eurowings, ...person);

//BIND METHOD
const bookEw = book.bind(eurowings);
bookEw(24, 'celestina');

const bookSw = book.bind(swiss);
const bookEm = book.bind(emirates);
bookSw(29, 'Adetutu');

console.log(eurowings);

emirates.planes = 300;
emirates.buyPlanes = function () {
  this.planes++;
  console.log(this.planes);
};
console.log(emirates);
document
  .querySelector('.buy')
  .addEventListener('click', emirates.buyPlanes.bind(emirates));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.3);
console.log(addVat(2000));

// REDOING THE ABOVE USING AN ARROW FUNCTION AND ALSO FUNCTION IN FUNCTION
const addTaxRate = rate => value => value + value * rate;
console.log(addTaxRate(0.1)(200));
const addVat2 = addTaxRate(0.3);
console.log(addVat2(2000));

// CHALLENGE 1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswers() {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(me) {
    if (me === 'array') {
      console.log(this.answers);
    } else if (me === 'string') {
      console.log(`polls results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswers();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswers.bind(poll));

poll.displayResults.call({ answers: [2, 7, 8] }, 'string');
*/
// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
(function () {
  console.log(`i am a boy`);
})();
(() => console.log('i am a guy'))();

// CLOSURES

const secureBooking = function () {
  let passenger = 1;
  return function () {
    passenger++;
    console.log(`${passenger} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers `);
  }, 2000);
  console.log(`will start boarding in ${wait}`);
};
boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
