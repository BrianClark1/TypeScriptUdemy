const nums: Array<number> = [];
const colors: Array<string> = [];

//Tells javascript that querySelector to select a certain type rather than the default wide ranign <Element> type
//telling this function what type you want it to return
const inputEl = document.querySelector<HTMLInputElement>("#username")!;
const btn = document.querySelector<HTMLButtonElement>(".btn")!;

//Writing our own generic function
function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

//Defeats purpose of TS, just use JS in this case take any return any, no explicit restraints
// function identity(item: any): any {
//     return item;
// };

//Generic function called indentity, provide it a Type and it will return that type and that type only, different from union and other functional type declarations we've seen in the past
//works with manually created types too 
//Sometimes uppercase T instead of written out Type, shorthand syntax... conventions 
function identity<Type>(item: Type): Type {
  return item;
}

identity<number>(7);
identity<string>("hello");



//Takes a list of things, will accept an array of those types and will return an element of that type
//expect input to be an array of that type 
function getRandomElement<Type>(list: Type[]): Type {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};


console.log(getRandomElement<string>(['a', 'b', 'c'])); 

//TS can infer the type of x is a number
//the same as let x: number = 23;
let x = 23;

//TS is smart enough to know that the generic Type is string!
getRandomElement(['a', 'v', 'avd']);
//Smart enough to know its a number!
getRandomElement([1, 2, 3, 4]);



//Merging 2 objects!
//This generic function says that it can accept parameters of 2 different types 
// extends is an addtional constraint telling TS that it needs to be something that is an OBJ 
function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2
  }
};
//Avoids TS from assuming an 'any' return type 

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });


//this generic helps you avoid having to explicity define the objects, i.e.
//merge<{name: string}, {pets: string[]}>

interface Lengthy {
  length: number;
}

//Similarly you can explicityly say that the T input type must adhere to the interface 'Lengthy' Properties 
function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

//Accomplishes the same thing as the following:
function printDoubleLength(thing: Lengthy): number {
  return thing.length * 2;
}


//Default type parameters 
function makeEmptyArray<T = number>(): T[] {
  return [];
};

//Check the type of nums, it defaults to number 
const nums = makeEmptyArray();
//However if we define the type as boolean it no longer defualts as number 
const bools = makeEmptyArray<boolean>();


//Classes with Generics 

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class VideoPlaylist {
  public videos: Video[] = [];
}

class SongPlaylist {
  public songs: Song[] = [];
}


//Now we have a generic Class called Playlist 
//which can be used to create a queue of videos or songs, since its a generic 
class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();

//Element parameter is expted to be a video 
videos.add();













