const name = "Kashi"
const repocount = 3

// outdated //console.log(name + repocount + "value");
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const name1 = new String("Hitesh")
console.log(name1);

console.log(name1[1]);

console.log(name1.length);
console.log(name1.charAt(2));
console.log(name1.indexOf('t'));

const newStr = name1.substring(0,5)
console.log(newStr);

// slice has advantage of reverse strings 
const new2 =name1.slice(-3, 4)
console.log(new2);

const new3 = "         Hitesh  "
console.log(new3.trim());


const url= "https://hoshi.com/hitesh%20choudh"
console.log(url.replace('%20','-'));
console.log(url.includes('hite'));

console.log(url.split('/'));


