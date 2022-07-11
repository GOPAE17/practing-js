'use strict';

// using stack overflow to solve problems
/*
const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcAmp = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    // if (temps[i] > max) max = temps[i];
    if (curTemp > max) max = curTemp;
    // if (temps[i] < min) min = temps[i];
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcAmp(temperatures);
console.log(amplitude);
// let's assume we were expected to merge 2 arrays using concat

const temperature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [17, 21, 20, -24, -29, 35];
const temps = temperature1.concat(temperature2);
console.log(temps);
const calcAmp = function (t1, t2) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    // if (temps[i] > max) max = temps[i];
    if (curTemp > max) max = curTemp;
    // if (temps[i] < min) min = temps[i];
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcAmp(temperature1, temperature2);
console.log(amplitude);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsuis',
    value: prompt('Degree celsuis'),
  };

  // practing console.table
  console.table(measurement);
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());

// using a debugger
const temperature1 = [3, 2 - 6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [17, 21, 20, -24, -29, 35];
const temps = temperature1.concat(temperature2);
console.log(temps);
const calcAmpBug = function (t1, t2) {
  let max = temps[0];
  let min = temps[0];


  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    // if (temps[i] > max) max = temps[i];
    if (curTemp > max) max = curTemp;
    // if (temps[i] < min) min = temps[i];
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

const amplitudeBug = calcAmpBug(temperature1, temperature2);
console.log(amplitudeBug);

*/

// CHALLENGE 1
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}c in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast(data1, data2);
