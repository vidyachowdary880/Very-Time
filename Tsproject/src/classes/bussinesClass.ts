import { loggedMethod } from "../decorations/utils";

export class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    @loggedMethod
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

