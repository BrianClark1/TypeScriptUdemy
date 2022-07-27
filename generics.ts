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



function getRandomElement<Type>(list: Type[]): Type {

};