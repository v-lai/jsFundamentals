var people = ["Greg", "Mary", "Devon", "James"];
// 1. Using a loop, iterate through this array and console.log all of the people.
for (var i = 0; i < people.length; i++){
    console.log(people[i]);
}

// 2. Write the command to remove "Greg" from the array.
people.shift();

// 3. Write the command to remove "James" from the array.
people.pop();

// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");

// 5. Write the command to add your name to the end of the array.
people.push("V. Lai");

// 6. Using a loop, iterate through this array and after console.log-ing 
//  "Mary", exit from the loop.
for (var i = 0; i < people.length; i++){
    console.log(people[i]);
    if (people[i] === "Mary"){
        break;
    }
}

// 7. Write the command to make a copy of the array using slice. The copy 
//  should NOT include "Mary" or "Matt".
people.slice(2);

// 8. Write the command that gives the indexOf where "Mary" is located.
people.indexOf("Mary");

// 9. Write the command that gives the indexOf where "Foo" is located 
//  (this should return -1).
people.indexOf("foo");

// 10. Redefine the people variable with the value you started with. Using the 
//  splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". 
//  Your array should look like this when you are done 
//  ["Greg", "Mary", "Elizabeth", "Artie", "James"].
var people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");

// 11. Create a new variable called withBob and set it equal to the people 
//  array concatenated with the string of "Bob".
var withBob = people.concat("Bob");