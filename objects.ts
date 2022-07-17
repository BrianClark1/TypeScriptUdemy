const dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
};


function printName(person: { first: string, last: string }): void {
    console.log(`${person.first} ${person.last}`);
 };

printName({ first: "Thomas", last: "Jenkins" });


let coordinate: { x: number; y: number } = { x: 34, y: 2 };

//Supposed to return an object that follows this format
function randomCoordinate(): {x: number, y: number} {
    return {x: Math.random(), y: Math.random()} 
};

//This is not okay
printName({ first: "Mick", last: "Jagger", age: 473 });
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true};
//This is okay, any excess properties are ignored  
printName(singer)