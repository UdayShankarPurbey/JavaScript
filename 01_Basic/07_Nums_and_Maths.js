const score = 400
const balance = new Number(1000)
console.log(score , balance);

console.log(balance.toFixed(2));
console.log(balance.toString().length);

const  otherNUmber = 23434.4
console.log(otherNUmber.toPrecision(4));

const data = 100000000
console.log(data.toLocaleString());
console.log(data.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-400));
console.log(Math.round(5.545));
console.log(Math.floor(49.87));
console.log(Math.ceil(49.37));
console.log(Math.random());
console.log(Math.random()*10 + 1);

const min = 30;
const max = 60;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);