// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
//(number | string)[] ==> This means it can be a mixutre of either
//number[] | string[] ==> This means it is mutually exclusive
var stuff;
var colors;
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(input) {
    if (typeof input === "string") {
        console.log("Hello, ".concat(input));
    }
    else {
        for (var item in input) {
            console.log("Hello, ".concat(item));
        }
    }
}
