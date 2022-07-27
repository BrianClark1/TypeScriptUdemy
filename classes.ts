//readonly => "These shouldnt change
//By default every property & method are public
//thus adding public is for clarity and being explicit to other developers, clarity
//private => only accessible/usable inside the class, meaning it can be used in methods and manipulated only within the class
//public & private are unique to TS, dont exist in Js
//#score => # is a private identifier / whilst 'private' is an accesability modifier

// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//     private secretMethod(): void {
//         console.log('SECRET METHOD!!');
//     }

// };

//Parameter Properties Shorthand
//This is equivalent to the above
class Player {
  //   private _score: number = 0;
  protected _score: number = 0;
  constructor(public first: string, public last: string) {}

  private secretMethod(): void {
    console.log("SECRET METHOD!!");
  }

  //Object accessers, getters & setters

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error("Score cannot be negative");

    this._score = newScore;
  }
}

//protected comes into play when we are talking about inheritance 
//protected is only accessible in the child class 
//truly only accessible in one class no inheritance, use private
class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 999999;
    }
}


let elton = new Player("Elton", "Steele");
// elton.score = '123';



interface Colorful {
    color: string; 
};

interface Printable {
    print(): void; 
}

//classes can also interact with interfaces 
class Bike implements Colorful {
    constructor(public color: string) {}''
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {};

    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

const bike1 = new Bike('red');

const jacket1 = new Jacket("Prada", "black");


//abstract enforces some type stuff and can also outline functionality like:
//this class must have an getPay() method , sorta similar to how interfaces require things 
//abstract classes adds properties and built in methods, 
//cant instantiate an abstract class only the children that extend it 
abstract class Employee  {
    constructor(public first: string, public last: string) {};
    abstract getPay(): number;
    greet() {
        console.log("Hello");
    }
};

class FullTimeEmployee extends Employee {
    constructor(public first: string, last: string, private salary: number) {
        super(first, last)
    }
  getPay() {
    return this.salary;
  }
};


class PartTimeEmployee extends Employee {
  constructor(
    public first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay() {
    return this.hourlyRate * this.hoursWorked;
  }
};


const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay);

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);