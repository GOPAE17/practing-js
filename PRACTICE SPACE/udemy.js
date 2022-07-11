// let js = "amazing";
// if (js === "amazing") alert("javascript is fun🌹");

//my first and second assessment
/*
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.88;

const markBmi = markWeight / markHeight ** 2;
console.log(markBmi);

const johnBmi = johnWeight / johnHeight ** 2;
console.log(johnBmi);

const markHigherBmi = markBmi > johnBmi;
console.log(markHigherBmi);

// the second assessment aspect

if (markBmi > johnBmi) {
    console.log(`mark's BMI (${markBmi}) is higher than john's! (${johnBmi})`);
} else {
    console.log(`john's BMI (${johnBmi}) is higher than mark's! (${markBmi})`);
}
*/

/*
// testing template strings
const firstName = "oluwagbemiga";
const lastName = "philip";
const surName = "gbangbola";

const fullName = `My name is ${surName} ${firstName} ${lastName}`;
console.log(fullName);

console.log(`gbangbola
oluwagbemiga
philip`);


console.log("gbangbola \n\
oluwagbemiga \n\
philip");
 */

/*
//if & else statement
const age = 16;
const law = age >= 18

if (law) {
    console.log("gbenga can start driving a car 🚗");
}
else {
    console.log("wait for your time bro")
}

// another explanation

const partyInvitation = 18;

if (partyInvitation >= 21) {
    let me = "you are welcome";
    console.log(me);
} else {
    let me = "you are too young for this"
    console.log(me);

}
*/

/*
// i made use of prompt Numberof amd else if

const yourAge = Number(prompt(`what's your age?`));

if (yourAge > 18) {
    console.log('you can vote');
}
else if (yourAge === 18) {
    console.log('register for your pvc');
}
else {
    console.log('you are still young for this');
}
 */

// boolean and practing typeof
// const me = true;
// console.log(typeof me);

/*
const goodBoy = true;
const playful = false;
const footballer = false;


if (playful) {
    console.log('give him a job')

} else {
    console.log("we'll get back to him soon")

}

const me = goodBoy && !playful;
if (me) {
    console.log('then give him the job');
} else {
    console.log('we are very sorry');
}
 */

// CHALLENGE 3
/*
let dolphin = (96 + 108 + 89) / 3;
let koalas = (88 + 91 + 110) / 3;
console.log(dolphin, koalas);

if (dolphin > koalas) {
    console.log('Dolphin wins✨🏆');
} else if (koalas > dolphin) {
    console.log('koalas wins✨🏆');
} else {
    console.log('it was a draw👏');

}

const average = 100;
dolphin = (97 + 112 + 101) / 3;
koalas = (109 + 95 + 123) / 3;
console.log(dolphin, koalas);


const dolphinWins = dolphin > koalas; console.log(dolphinWins);
const koalasWins = koalas > dolphin; console.log(koalasWins);

if (dolphinWins && dolphin >= average) {
    console.log('Dolphin wins✨🏆');
} else if (koalasWins && koalas >= 100) {
    console.log('koalas wins✨🏆');
} else {
    console.log('No winner');

}

koalas = (109 + 95 + 106) / 3;
console.log(dolphin, koalas);
const draw = dolphin === koalas; console.log(draw);

if (draw && koalas >= average && dolphin >= average) {
    console.log('it was a Draw😜');

} else {
    console.log('No winner');

}
*/

/*
// ternary operators
const age = 13;
age >= 18 ? console.log('i am a man') : console.log('i am a boy');

// the short method of ternary operators without repeating console.log everytime

const me = age >= 18 ? 'i am a man' : 'i am a boy'; console.log(me);




// the short method of (if and else) without repeating console.log everytime
let you;
if (age >= 18) {
    you = 'A guy';

} else {
    you = 'A boy';

}
console.log(you);
console.log(`i am a ${age >= 18 ? 'man' : 'boy'}`);

*/

// CHALLENGE 4
let bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill value was ${bill}, the tip was ${tip} and the total value is ${
    bill + tip
  }`
);

bill = 40;
tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill value was ${bill}, the tip was ${tip} and the total value is ${
    bill + tip
  }`
);

bill = 430;
tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill value was ${bill}, the tip was ${tip} and the total value is ${
    bill + tip
  }`
);

