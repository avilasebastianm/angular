export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 350.0
}


interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


export function taxCalculation(options: TaxCalculationOptions): number[] {
    let total = 0;
    //{price} indica que solo necesitamos el precio en vez de escribir prodict.price
    options.products.forEach(({price}) => {
            total += price;})
      return [total, total * options.tax];}

const shoppingCard = [phone, tablet];
const tax = 0.15;



const result:number[] = taxCalculation({
    products: shoppingCard,
    tax: tax,
});

console.log('resultado', result[0], result[1]);


// destructurado



