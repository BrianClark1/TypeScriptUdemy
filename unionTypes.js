//Specify that this variable 
var age = 21;
age = 23;
age = "24";
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
//Typescript is smart!
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
//Array Union Type
// const stuff: (number | string)[]
var coords = [];
coords.push({ x: 213, y: 442 });
//Literal Types 
var zero = 0;
var mood = "Happy";
mood = "Sad";
var today = "Monday";
