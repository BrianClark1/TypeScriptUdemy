var dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
;
printName({ first: "Thomas", last: "Jenkins" });
var coordinate = { x: 34, y: 2 };
//Supposed to return an object that follows this format
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
;
//This is not okay
// printName({ first: "Mick", last: "Jagger", age: 473 });
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
//This is okay, any excess properties are ignored  
printName(singer);
function calculatePayout(song) {
    return song.numStream * 0.033;
}
;
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
;
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Borthers",
    numStream: 12678953,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North "
    }
};
calculatePayout(mySong);
printSong(mySong);
var myPoint = { x: 1, y: 3, z: 9 };
var user = {
    id: 12837,
    username: "catgurl"
};
console.log(user.id);
var happyFace = {
    radius: 4,
    color: "yellow"
};
var christy = {
    numLives: 7,
    breed: "Husky",
    age: 9
};
