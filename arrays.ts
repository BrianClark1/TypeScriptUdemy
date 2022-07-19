
const activeUsers: string[] = ["colt"];
activeUsers.push("Tony");
let username: string = "Colt";

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;


//Same Thing 
//const bools: Array<boolean> = [];
const bools: boolean[] = [];

type Point = {
    x: number,
    y: number
}

//Array of custom Point type 
const coords: Point[] = [];
coords.push({ x: 23, y: 8 });

//Multidimensional Arrays

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[1]]];