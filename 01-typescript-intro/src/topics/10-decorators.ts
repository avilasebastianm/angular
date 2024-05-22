// function classDecorator(
// ) {
//
// }
//
// //@classDecorator

export class SuperClass {
    public myProperty: string = 'ABC123';

    print() {
        console.log('Hola mundo');
    }
}

console.log(SuperClass)

const myClass = new SuperClass();

console.log(myClass);

