/*
*cuiando no sabemos el tipo de datos que va a devolver la funcion
* en vez de colocar any utilizamos una funcion generica
*
* */

export function whatsMyType<T>(argument: T): T {
    return argument ;
}

const amIString = whatsMyType<string>('Hola mundo');
const amINumber = whatsMyType(100);
const amIArray = whatsMyType([1,2,3,4,5,6,7,8,9,10]);
console.log(amIString,amINumber,amIArray)