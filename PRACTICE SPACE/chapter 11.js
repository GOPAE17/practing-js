'use script';
/*
const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.slice(1, 5));
console.log(arr.slice(1, 2));
console.log(arr.slice(-3));
console.log(arr.slice(3, -2));

// splice method
console.log(arr.splice(1, 3));
console.log(arr.splice(-1));
console.log(arr);

// REVERSE
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const alphabet = arr.concat(arr2);
console.log(alphabet);

// FOR EACH LOOP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [money, i] of movements.entries()) {
  //   console.log(money);
  if (money > 0) {
    console.log(`Movement ${i + 1}: You deposited ${money}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(money)}`);
  }
}
console.log('----FOREACH----');

movements.forEach((money, i, arr) => {
  //   console.log(money + 20);
  //   console.log(arr);
  if (money > 0) {
    console.log(`Movement ${i + 1}: You deposited ${money}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(money)}`);
  }
});

// THE MAP METHOD
const eurToUsd = 1.1;
const movementToUsd = account1.movements.map(mov => mov * eurToUsd);
console.log(movementToUsd);

// using d forEach loop
const movementToUsdForEach = [];
account1.movements.forEach(mov => {
  movementToUsdForEach.push(mov * eurToUsd);
});
console.log(movementToUsdForEach);

const movementsDescriptions = account1.movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
  
  if (mov > 0) {
      return `Movement ${i + 1}: You deposited ${mov}`;
    } else {
        return `Movement ${i + 1}:You withdrew ${Math.abs(mov)}`;
    }
});
console.log(movementsDescriptions);

// THE FILTER METHOD
const deposited = account1.movements.filter(mov => mov > 0);
console.log(deposited);
const redrawal = account1.movements.filter(mov => mov < 0);
console.log(redrawal);


// CHALLENGE 1
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const newJulia = [...dogsJulia];
  newJulia.splice(0, 1);
  newJulia.splice(-2);

  const dogs = newJulia.concat(dogsKate);
  dogs.forEach((no, i) => {
    if (no >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and it's ${no} years old`);
    } else if (no < 3) {
      console.log(`Dog number ${i + 1} is a puppy, and it's ${no} years old`);
    }
  });
};
checkDogs(julia, kate);

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(dog => {
    if (dog <= 2) {
      const humanAge = 2 * dog;
      return humanAge;
    } else {
      const humanAge = 16 + dog * 4;
      return humanAge;
    }
  });

  const matured = humanAge.filter(human => {
    if (human >= 18) return human;
  });

  const summation = matured.reduce((acc, avr) => acc + avr, 0) / matured.length;
  
  console.log(humanAge);
  console.log(matured);
  console.log(summation);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
*/

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// const user = account4.owner.toLowerCase().split(' ').map(name =>  name[0]
// ).join('')
const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movement) {
  containerMovements.innerHTML = '';

  movement.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type} </div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovement(account1.movements);

const createUsername = function (user) {
  user.forEach(names => {
    names.username = names.owner
      .toUpperCase()
      .split(' ')
      .map(letters => letters[0])
      .join('');
  });
};

createUsername(accounts);
console.log(accounts);

const calcPrintBalance = function (mov) {
  const balance = mov.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = balance;
};
calcPrintBalance(account1.movements);

const calcDisplayBalance = function (movement) {
  const incomes = movement
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}`;

  const outcomes = movement
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcomes)}`;

  const interest = movement
    .filter(mov => mov > 0)
    .map(mov => (mov * 1.2) / 100)
    .filter((mov, i, arr) => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = interest;
};
calcDisplayBalance(account1.movements);

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  //   console.log('login');

  const currentAcc = accounts.find(
    user => user.username === inputLoginUsername.value
  );
});

//
const maximum = account1.movements.reduce((acc, mov) => {
  //   console.log(acc);
  if (acc > mov) return acc;
  else return mov;
}, account1.movements[0]);
console.log(maximum);

const eurToUsd = 1.1;
const currency = account1.movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(currency);

// THE FIND METHOD
const search = accounts.find(name => name.owner === 'Jessica Davis');
console.log(search);
