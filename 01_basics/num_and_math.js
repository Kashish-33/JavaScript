const score = 400;

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));  // 100.00
const num= 2356.897
console.log(num.toPrecision(6));

const hund = 100000
console.log(hund.toLocaleString('en-IN')); //1,00,000

//+++++++++++++++++++ Maths ++++++++++++\\

console.log(Math.abs(4));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));
console.log(Math.round(4.7));
console.log(Math.pow(3, 2))
console.log(Math.min(4.7, 89, 6.5, 0.3));
console.log(Math.max(4.7, 67, 90, 32));
console.log(Math.random());  // random prints val always btw 0 and 1
console.log((Math.random()*10)+1); // make value shift accordinly


const min = 10
const max = 20

console.log((Math.floor(Math.random() * (max-min+1))+min));

