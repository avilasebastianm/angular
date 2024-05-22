import {Product} from "./06-function-destructuring.ts";
import {taxCalculation} from "./06-function-destructuring.ts";



const shoppingCard: Product[] = [
    {
        description: 'Nokia A1',
        price: 150.00
    },
    {
        description: 'Nokia A2',
        price: 250.00
    },
];

const[total,tax] = taxCalculation({
        products: shoppingCard,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);
