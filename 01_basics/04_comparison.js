console.log(2 > 1)
//onsole.log(2 >= 1)
//console.log(2<1)

console.log("2" > 1); // diff dataype compariosn => not predictable result bcz automatic conversion of string and number in js

console.log(null > 0)
console.log(null == 0);
console.log(null >= 0) // js automatically converts null to zero here

// === - Tiple check => strict check not only values but datatypes

console.log("2" === 2)

// avoid inefficient comparisons compare same dtat types