let x = "10.99";
let num = parseFloat(x);
console.log(num);

const a = isNaN(9);
console.log(a);

let b = isNaN('stringFull');
console.log(b);

let money = 1000;
let oranges = 300;
let apples = 400;
let mote = oranges + apples;
let returnPrice = money - mote;
console.log(returnPrice);

let mathematics = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;
let sum = mathematics + biology + chemistry + physics + bangla;
let sumMark = sum / 5
console.log(sumMark.toFixed(2));

let c = 119;
let d = c % 5;
console.log(typeof d, d);

var e = isNaN("data");
var f = isNaN(-8);
console.log(e, f);