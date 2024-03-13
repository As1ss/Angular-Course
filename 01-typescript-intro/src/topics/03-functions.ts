


function addNumbers(a: number, b: number): number {

    return a + b;

}


const addNumbersArrow: Function = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(n1: number, n2?: number, b: number = 2): number {

    return n1 * b;
}


// const result: number = addNumbers(1, 2);
// const resultArrow: string = addNumbersArrow(3, 5);

// const multiplyResult: number = multiply(5);



// console.log({ result, resultArrow, multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHP: () => void;
}


const heal: Function = (character: Character, amount: number) => {
    if (character.hp + amount < 100) {
        character.hp += amount;
    }
    else {
        character.hp = 100;
    }



}



const sam: Character = {
    name: "Sam",
    hp: 55,
    showHP() {
        console.log(`La vida de ${this.name} es de ${this.hp} puntos.`);
    }
}


heal(sam, 35);
heal(sam, 8);


sam.showHP();






export { };