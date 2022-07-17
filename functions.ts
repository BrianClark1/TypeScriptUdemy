const add = (x: number, y: number): number => {
    return x + y;
};

function greet(person: string = "stranger"): string {
    return `Hi there, ${person}!`;
}


const colors = ["red", "orange", "yellow"];
colors.map(color => {
    return color.toFixed();
})



function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}

function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop(): never {
    while (true) {
        console.log('GAME LOOP RUNNING!')
    }
}