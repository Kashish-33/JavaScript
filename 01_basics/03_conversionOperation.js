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


//************************ Operations *********************/

let value = 3
let negValue = -value
console.log(negValue);

let str1  = "hello"
let str2 = " Hitesh"

console.log(str1+str2);

console.log("1"+ 2);
console.log(1+"2");

console.log("1"+"2");

console.log("1"+2+2);// 122   string phle to sbhi string me covert
console.log(1+2+"3"); // 33   string last me h to phle jo opr h wo hojyega phir string 

console.log(+true); // 1
console.log(+""); // 0

let count = 4
console.log(++count) // increments &returns value after increment

let count2 = 8
console.log(count2++); // ncrement but returns value before increment








