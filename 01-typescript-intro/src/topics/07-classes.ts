

export class Person {
    // public name: string;
    // private address: string;

    constructor(public firstName: string,
        public lastName:string,
        private address: string = "N/A") { }

    public get getAddress(): string {
        return this.address;
    }
}

// export class Hero extends Person {



//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, "New York");
//     }

// }



export class Hero {

    // public person:Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person:Person
    ) {
        // this.person= new Person(this.realName);
    }

}



const peter = new Person("Peter","Parker","New York");
const spoiderman = new Hero("Spoiderman", 33, "Peter Parker",peter);




console.log("Nombre Hero: ", spoiderman);
