// en la firma de la funcion se debede indicar que tipo de argumento recibe

function addnumbers(a:number, b:number) {
    return a + b;
}
// arrow function en la firma indicamos que devuelve un number  despues de los argumentos que recibe
const addnumbersarrow = (a:number,b:number):number=>{return a + b}


//si queremos poner un argumentocomo opcional debemos colocar un signo de pregunta
function multiply (firstNumber:number, secondNumber?:number, base:number=2){
    return firstNumber*base;
}


// const result : number = addnumbers(1, 2);
// const result2 : number = addnumbersarrow(5, 1);
// const result3 : number = multiply(5, );
//
//
// console.log({result, result2, result3})

