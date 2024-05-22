// export class Person{
//    public name: string;
//     private age: number;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }}


/*
* FORMA COMUN DE DECLARAR UNA CLASS (EN EL CONSTRUCTOR ENCAPSULAMOS )
* */
export class Person {
    constructor(
        public name: string,
        public address: string,
    ) {
    }
}


/*
*
*
* */
// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, address);
//     }
// }

/**
 * LA FORMA CORRECTA DE HEREDAR DE UNA CLASE !! REVISAR
 *
 */


export class Hero {


    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {

    }
}

const toni = new Person('jorgeStark', 'New York');


const ironman = new Hero(
    'Ironman',
    45,
    'Stark',
    toni,
);
console.log(ironman);