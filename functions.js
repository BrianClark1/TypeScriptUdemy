var add = function (x, y) {
    return x + y;
};
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
    return color.toFixed();
});
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log('GAME LOOP RUNNING!');
    }
}
