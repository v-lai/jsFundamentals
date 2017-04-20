// Part 1
function difference(a, b){
    return a - b;
}

difference(2,2); // 0
difference(0,2); // -2

function product(a, b){
    return a * b;
}
product(2,2); // 4
product(0,2); // 0

function printDay(num){
    var day = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    };
    return day[num];
}
printDay(4); // "Wednesday"
printDay(41); // undefined

function lastElement(arr){
    return arr.pop();
}
lastElement([1,2,3,4]); // 4
lastElement([]); // undefined

function numberCompare(a, b){
    if (a === b){
        return "Numbers are equal";
    } else if (a > b){
        return "First is greater";
    } else {
        return "Second is greater";
    }
}

numberCompare(1,1); // "Numbers are equal"
numberCompare(2,1); // "First is greater"
numberCompare(1,2); // "Second is greater"

function singleLetterCount(str, char){
    var newStr = str.toLowerCase();
    var newChar = char.toLowerCase();
    var count = 0;
    for (var i = 0; i < newStr.length; i++){
        if (newStr[i] === newChar){
            count++;
        }
    }
    return count;
}
singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2

// Part 2
function multipleLetterCount(str){
    var obj = {};
    for (var i = 0; i < str.length; i++){
        if (str[i] in obj){
            obj[str[i]]++
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj;
}
multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

function arrayManipulation(arr, command, location, val){
    if (command === "remove"){
        if (location === "end"){
            return arr.pop();
        } else if (location == "beginning"){
            return arr.shift();
        }
    } else if (command == "add"){
        if (location == "beginning"){
            arr.unshift(val);
            return arr;
        } else if (location == "end"){
            arr.push(val);
            return arr;
        }
    }
}
arrayManipulation([1,2,3], "remove", "end"); // 3
arrayManipulation([1,2,3], "remove", "beginning"); // 1
arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]

function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}
isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome('hannah'); // true
isPalindrome('robert'); // false

// Part 3 - rock/paper/scissors
function rps(){
    var userPrompt = prompt("rock, paper, or scissors?").toLowerCase();
    var rpsArr = ["rock", "paper", "scissors"];
    var rand = Math.floor(Math.random() * rpsArr.length);

    if (!userPrompt || rpsArr.indexOf(userPrompt) === -1){
        return "invalid input";
    }
    if (rpsArr[rand] === userPrompt){
        return "tie, you both chose " + rpsArr[rand];
    } 
    if (rpsArr[rand] === "rock" && userPrompt === "paper"){
        return "you win, computer chose " + rpsArr[rand];
    } 
    if (rpsArr[rand] === "paper" && userPrompt === "scissors"){
        return "you win, computer chose " + rpsArr[rand];
    }
    if (rpsArr[rand] === "scissors" && userPrompt === "rock"){
        return "you win, computer chose " + rpsArr[rand];
    }
    return "you lose, computer chose " + rpsArr[rand];
}