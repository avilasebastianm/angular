export class Person{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const ironman = new Person('Ironman', 45);
console.log(ironman);