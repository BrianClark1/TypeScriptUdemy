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
// printName({ first: "Mick", last: "Jagger", age: 473 });
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true};
//This is okay, any excess properties are ignored  
printName(singer)


type Song = {
  title: string;
  artist: string;
  numStream: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
    return song.numStream * 0.033;
};

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);  
};


const mySong: Song = {
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

//Optional Properties 
//Z is not mandatory 
type Point = {
    x: number;
    y: number;
    z?: number;
};

const myPoint: Point = { x: 1, y: 3, z: 9 };

//readonly cannot alter/change that property after declaration
type User = {
    readonly id: number,
    username: string;
};

const user: User = {
    id: 12837,
    username: "catgurl"
};

console.log(user.id);
//Not Allowed 
//user.id = 4634;

type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

//Intersection of Circle and Colorful via the ampersand 
//associated variables of this type must contain both the radius and color properties 
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow",
};

type Cat = {
    numLives: number
};

type Dog = {
    breed: string
}

//Interseciton of both types and adds another property via an additional ampersand 
type CatDog = Cat & Dog & {
    age: number
};

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9
};
