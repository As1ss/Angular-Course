

function classDecorator(constructor: any): any {

    return class extends constructor {
        newProperty = "New Property";
        hello = "override";
    }
}


@classDecorator
export class SuperClass {
    public myProperty: string = "Abc123";

    print() {
        console.log("Hola mundolf");
    }
}


console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);


console.log();
console.log("---------------------------------");


class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @loggedMethod
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const p = new Person("Ron");
p.greet();

console.log(p);


function loggedMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(this: any, ...args: any[]) {
        console.log("Entering method");
        const result = originalMethod.apply(this, args);
        console.log("Exiting method");
        return result;
    };

    return descriptor; // Devuelve el descriptor de propiedad modificado
}