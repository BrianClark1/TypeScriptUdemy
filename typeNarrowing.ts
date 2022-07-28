//typeof Type Gaurds ==> conditional if statements
function triple(value: number | string) {
  if (typeof value === "string") {
    //TS is smart enough to now know this is a string in this block
    return value.repeat(3);
  }
  //Now it knows it a number since we have a return statement above
  return value * 3;
}

const el = document.getElementById("idk");
//Truth Gaurd
if (el) {
  //Now TS knows for sure it is not null
  el;
}

//Truth Gaurd since word can be a string or null
const printLetters = (word?: string) => {
  //Truth Gaurd
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("YOU DID NOT PASS IN A WORD");
  }
};

//EQUALITY NARROWING

function someDemo(x: string | number, y: string | boolean) {
  //if x is a string & y is a string & they are the same
  if (x === y) {
    //TS knows they are both string, very smart! only possible combination to make this conditional true
    x;
    y;
  }
}

//IN OPERATOR
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  //Check whether its a TVShow
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  //Now TS knows it is a Movie
  return media.duration;
}

//INSTANCEOF NARROWING
//  if (date instanceof Date)
//"is this thing instantiated from this?""

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    //TS knows this must be of type Date now
    console.log(date.toUTCString());
  } else {
    //TS knows this must be  a string
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    //TS knows its a user
    entity;
  } else {
    //It must be a company
    entity;
  }
}

//Type Predicates

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

//If this function returns true, then we know the parameter is Cat
//animal is Cat ==> this is the type predicate that is impacting the return value
//without this TS would not know it is a cat inside the isCat conditional block, only humans would know which defeats the purpose of using TS!
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    //TS now knows it is a cat
    animal;
    return "Meow";
  } else {
      animal;
      return 'woof';
  }
}

//Discriminated Union
//Add a property called 'kind' that is descriptive and makes the interface unique
//must add a literal value to the property, to make it unique
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}
interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}
interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Rooster | Pig | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
    //Check the unique property and TS will narrow the type as we go down the chain 
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Mooo!";
    case "rooster":
      return "Cockadooodledoo!";
    case "sheep":
      return "Baaaa!";
      default:
          // We should never ever make it here if we handled all cases correctly
          //Good way to see whether we exhausted all possibilities
          //"Exhaustive check "
          const shouldNeverGetHere: never = animal;
          return shouldNeverGetHere;
  }
}
