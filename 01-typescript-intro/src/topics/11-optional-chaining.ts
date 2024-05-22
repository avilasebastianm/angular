interface Passenger {
    name: string;
    children?: string[];// el signo de interrogacoin indica que es una propiedad opcional
}
const passenger1: Passenger = {
    name: 'John'
}
const passenger2: Passenger = {
    name: 'John2',
    children: ['John', 'John']
}



function printChildren(passenger: Passenger) {
    const howManyChildren = passenger.children?.length || 0;// el signo de interrogacion indica que si tiene children devuelve el lengh del arreglo si no devuelve 0
    console.log(passenger.name,howManyChildren);
}
printChildren(passenger1)
printChildren(passenger2)