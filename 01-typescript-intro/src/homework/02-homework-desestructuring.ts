

interface Product {
    description: String;
    price: number;

}


const phone: Product = {
    description: "Nokia",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}


interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}



//const { tax: tax, products: shoppingCart } = taxCalculationTemplate;





function taxCalculation(options: TaxCalculationOptions): [number,number] {

    const{tax,products} = options;

    let total: number = 0;



    products.forEach(function (product) {
        const {price}=product;
        total += price;
    })

    return [total, total * tax];
}


const shoppingCart:Product[] = [tablet,phone];
const tax:number = 0.15;






const [total,finalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log("Total",total, "Tax", finalTax);



export { };