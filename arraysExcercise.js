// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
var game = {
    name: 'chess',
    price: 5
};
var fun = {
    name: "life",
    price: 10
};
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    return products.reduce(function (accumulator, product) {
        accumulator += product.price;
        return accumulator;
    }, 0);
}
console.log(getTotal([game, fun]));
