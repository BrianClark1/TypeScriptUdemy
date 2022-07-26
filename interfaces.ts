//type Aliases
type Pointer = {
  x: number;
  y: number;
};

const pt: Pointer = { x: 213, y: 414 };

//Very similar to type Aliases syntax w/o equals sign
//can use semi colons and commas
interface Pointed {
  x: number;
  y: number;
  z: number;
}

const pts: Pointed = { x: 213, y: 414, z: 3 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  //Must be a method & returns a string
  sayHi: () => string;
  //   sayHi(): string;
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 32423,
  sayHi: () => {
    return "Hello!";
  },
};
thomas.first = "Kaivon";
//Cannot change read only
//thomas.id = 43534;

//Applying function parameters
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

//You can extend Interfaces as well
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "WOOF WOOF!";
  },
};

//Inherits existing job properties, similar to class syntax
//Can extend multiple interfaces at onc e
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 12334,
  email: "p@mail.com",
  level: "senior",
  languages: ["JS", "Python"],
};
