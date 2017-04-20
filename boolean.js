// Part 1 - evaluate the following
// 2 == "2";       // true
// 2 === 2;        // true
// 10 % 3;         // 1
// 10 % 3 === 1;   // true
// true && false;  // false
// false || true;  // true
// true || false;  // true

// Part 2
var isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
// 1. code should console.log the string Keep it up!
// 2. we don't need to specify if(isLearning === true) 
// because isLearning is already a boolean

var firstVariable;
var secondVariable = "";
var thirdVariable = 1;
var secretMessage = "Shh!";

if(firstVariable){
    console.log("first");
} else if(firstVariable || secondVariable){
    console.log("second");
} else if(firstVariable || thirdVariable){
    console.log("third");
} else {
    console.log("fourth");
}
// 1. code should console.log the string third
// 2. the value of firstVariable when it is initialized is undefined
// 3. firstVariable is not a truthy value because it is undefined
// 4. secondVariable is not a truthy value because it is an empty string
// 5. thirdVariable is a truthy value because it is not false, undefined,
//  an empty string, 0, null, or NaN

// Part 3
// 1. use Math.random
if (Math.random() > 0.5){
    console.log("over 0.5");
} else {
    console.log("equal or under 0.5");
}

// 2. a falsey value is a value that is false when used where JavaScript
//  expects a boolean value. the falsey values are:
// false, undefined, an empty string (""), 0, null, or NaN