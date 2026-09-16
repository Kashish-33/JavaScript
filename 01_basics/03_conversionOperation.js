let score = "33cbg"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof score);
console.log(valueInNumber); //Nan thats why conversion became prob here

console.log(typeof valueInNumber); 

//"33"=> 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
let stringIsLoggedIn = String(isLoggedIn)

console.log(typeof booleanIsLoggedIn)
console.log(typeof stringIsLoggedIn);

//""=> false;
// "kashish" => 1

console.log(Number(stringIsLoggedIn));





