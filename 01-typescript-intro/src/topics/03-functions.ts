// en la firma de la funcion se debede indicar que tipo de argumento recibe

function addnumbers(a:number, b:number) {
    return a + b;
}
// arrow function en la firma indicamos que devuelve un number  despues de los argumentos que recibe
const addnumbersarrow = (a:number,b:number):number=>{return a + b}


//si queremos poner un argumentocomo opcional debemos colocar un signo de pregunta
function multiply (firstNumber:number, secondNumber?:number, base:number=2){
    secondNumber=secondNumber || 2;
    return firstNumber*base;
}


// const result : number = addnumbers(1, 2);
// const result2 : number = addnumbersarrow(5, 1);
// const result3 : number = multiply(5, );
//
//
// console.log({result, result2, result3})


// definimos la clase
interface Character{
    name:string;
    hp:number;
    showHp:()=>void;

}
const healCharacter = (character:Character, amount:number)=>{
    character.hp += amount;
}

const aragon : Character ={
    name : 'Aragon',
    hp : 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter(aragon,20);
aragon.showHp()
