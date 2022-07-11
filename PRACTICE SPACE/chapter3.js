'use strict';
/*
// practicing function declaration

function names(surName, firstName, middleName) {
    const myNames = `my name is ${surName} ${firstName} ${middleName}`
    return myNames;
}

let fullName = names('gbangbola', 'oluwagbemiga', 'philip');
console.log(fullName);

fullName = names('celestina', 'temitope', 'adetutu');
console.log(fullName);


// practicing function expression

const myAge = function (date, year) {
    return 2047 - year;
}

const fullAge = myAge(17, 2001);
console.log(fullAge);

// arrow function (a single demo)
const me = date => date + 30;
const fullMe = me(50);
console.log(fullMe);
*/

/*
// wanna calculate numbers of years left before i retire

const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirementAge = 65 - age;
    return retirementAge;
}
const me = yearsUntilRetirement(2001);
console.log(me);
 */

/*
// practicing array of 2 functions

const yearsUntilRetirement = (birthYear, myName) => {
    const age = 2022 - birthYear;
    const retirementAge = 65 - age;
    const user = `${myName} will retire when he is ${retirementAge} years old`;
    return user;
}
const me = yearsUntilRetirement(2001, `oluwagbemiga`);
console.log(me);

console.log(yearsUntilRetirement(1998, `celestina`));

// calling a function into another function

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const orangePieces = cutFruitPieces(oranges);
    const applePieces = cutFruitPieces(apples);

    const juice = `juice with ${orangePieces} pieces of orange and ${applePieces} pieces of apple`;
    return juice;
}


console.log(fruitProcessor(4, 5));
// practicing return value in if and else

const yearsUntilRetirement = function (birthYear) {
    const age = 2022 - birthYear;
    const retirementAge = 65 - age;

    if (retirementAge > 0) {
        return retirementAge;

    } else {
        return 0;
    }
}
const me = yearsUntilRetirement(1880);
console.log(me);



// if and else in a function and also the use of return and console in an if and else statement
function me(birthyear) {
    const age = 2022 - birthyear;
    const retirement = 67 - age;
    if (retirement > 0) {
        console.log(`i feel good`);
        return retirement;

    } else {
        return Left;
        console.log(`rest`);

    }
}
console.log(me(2001));


// Assessment 1
const calAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3;
    return average;
}

const Dolphin = calAverage(85, 54, 41);
const Koalas = calAverage(23, 34, 27);
console.log(Dolphin, Koalas);


function checkWinner(avgDolphin, avgKoalas) {
    if (avgDolphin >= 2 * avgKoalas) {
        console.log(`Dolphins wins 🎇🎉 ${avgDolphin} vs .${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphin) {
        console.log(`koalas wins 🎇🎉 ${avgKoalas} vs .${avgDolphin}`);
    }
    else {
        console.log(`NO WINNER 😒`);


    }

}
const winner = checkWinner(Dolphin, Koalas);
console.log(winner);

*/

/*

// ARRAY
const everyone = ['gbenga', 'adeoba', 'celestina'];
console.log(everyone);

console.log(everyone[2]);
console.log(everyone.length);

everyone[3] = 'bess';
console.log(everyone);

const fams = 'temitope'
console.log(fams, 2022 - 2001, everyone, 'adetutu');


// Adding an element to an Array
everyone.push('seyi');
everyone.unshift('wale');
console.log(everyone);

// Removing an element Array
everyone.pop();
everyone.shift();
console.log(everyone);


// ASSESSMENT 2

function calcTip(bill) {
    let calcBill = bill <= 300 && bill >= 50;
    if (calcBill) {
        const tip = bill * 0.15;
        console.log(`The bill value was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);
        return tip;
    } else {
        const tip = bill * 0.2;
        console.log(`The bill value was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);
        return tip;
    }

}

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tip);

const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log(total);

*/

/*
// OBJECTS

const fullMe = {
    firstName: 'Oluwagbemiga', lastName: 'Gbangbola', birthYear: 2001, job: 'Developer',
    friends: ['Bess', 'seyi', 'wale'], hasDriversLicense: true,
    //  calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     return 2022 - this.birthYear;

    // }
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    }
};

console.log(fullMe.calcAge());
// console.log(fullMe.calcAge(2001)); 

fullMe.location = 'lagos';


console.log(fullMe);
console.log(`${fullMe.firstName} has ${fullMe.friends.length} friends and his best friend is ${fullMe.friends[0]}`);

// Retrieving data using the dot(.) method
console.log(fullMe.friends, fullMe.job);

// Retrieving data using the bracket([]) method
console.log(fullMe['age'], fullMe['lastName']);


const nameKey = 'Name';
const trial = 'ob'
console.log(fullMe['first' + nameKey], fullMe['j' + trial]);

const yourCuriousity = prompt('what do you wanna know abt me? job, friends, age, firstname, lastname. ')
console.log(fullMe[yourCuriousity])

// Adding an element to an object
fullMe.location = 'camp';
fullMe['gmail'] = 'gbangbolaphilip@gmail.com'
console.log(fullMe);


// putting it in a conditional statement

if (fullMe[yourCuriousity]) {
    console.log(`${fullMe[yourCuriousity]}
    Now you know😊`);

} else {
    console.log(`invalid input`);

}
*/

/*
// CHALLENGE 3
const markBmi = {
    fullName: 'mark miller',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        // const bmi = this.mass / (this.height ** 2);
        // return bmi;

        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};
const johnBmi = {
    fullName: 'john smith',
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        //     const bmi = this.mass / (this.height ** 2);
        //     return bmi;

        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;

    }

    // console.log(markBmi.calcBmi(), johnBmi.calcBmi())
}
markBmi.calcBmi()
johnBmi.calcBmi()
console.log(markBmi.bmi, johnBmi.bmi);
// anywhere we might have used (markBmi.calcBmi(), johnBmi.calcBmi()) can now be replaced with (markBmi, johnBmi)

if (johnBmi.calcBmi() > markBmi.calcBmi()) {
    console.log(`${johnBmi.fullName}'s BMI (${johnBmi.calcBmi()}) is higher than ${markBmi.fullName}'s ${markBmi.calcBmi()}`);

}
else if (markBmi.calcBmi() > johnBmi.calcBmi()) {
    console.log(`${markBmi.fullName}'s BMI (${markBmi.calcBmi()}) is higher than ${johnBmi.fullName}'s (${johnBmi.calcBmi()})`);
}
else {
    console.log('it was a draw');
}

// NOTE: IN THE ABOVE SOLUTION I CAN AS WELL USE this.bmi to input my answer in the object 

*/

/*
// FOR LOOP
for (let rep = 7; rep <= 10; rep++) {
    console.log(`you have a missed call ${rep}`)

}
const fullMe = ['oluwagbemiga', 'gbangbola', 2022 - 2001, ['gbenga', 'adeoba', 'celestina'], true, 1947];
console.log(fullMe);

for (let i = 0; i < fullMe.length; i++) {
    console.log(fullMe[i]);

}

// pushing a for loop into an empty array
const years = [2001, 1949, 1947, 1960];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);

}
console.log(ages);

// CONTINUE AND BREAK

// CONTINUE
for (let i = 0; i < fullMe.length; i++) {
    if (typeof fullMe[i] !== "number") continue;

    console.log(fullMe[i], typeof fullMe[i]);
}

// BREAK

for (let i = 0; i < fullMe.length; i++) {
    if (typeof fullMe[i] === "object") break;

    console.log(fullMe[i], typeof fullMe[i]);
}

// LOOPING BACKWARDS
for (let i = fullMe.length - 1; i >= 0; i--) {
    console.log(fullMe[i]);
}

// LOOPING INSIDE ANOTHER LOOP
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: lifting weight repetition ${rep}`);
        
    }
}


// WHILE LOOP
let rep = 0;
while (rep <= fullMe.length) {
    console.log(fullMe[rep]);
    rep++;
    
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
    console.log(`you rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    
    if (dice === 6) console.log(`loop is about to end`)
}

*/

// LAST ASSESSMENT UNDER JS FUNDAMENTALS
// THE TIP CALCULATOR

function calcTip(bill) {
  let calcBill = bill <= 300 && bill >= 50;
  if (calcBill) {
    const tip = bill * 0.15;
    // console.log(`The bill value was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);
    return tip;
  } else {
    const tip = bill * 0.2;
    // console.log(`The bill value was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);
    return tip;
  }
}

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {
  const tip = calcTip(bill[i]);
  tips.push(tip);
  totals.push(tip + bill[i]);
}

console.log(bill, tips, totals);

// THIS IS FOR CALCULATING THE AVERAGE OFALL THAT  WAS SPENT

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];

    // console.log(arr[i])
  }
  // console.log(sum)
  return sum / arr.length;
};
console.log(calcAverage([12, 3, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bill));
