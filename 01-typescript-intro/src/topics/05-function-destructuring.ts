



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


function taxCalculation(options: TaxCalculationOptions): number[] {

    let total:number =0;

   options.products.forEach(function(product){
        total+=product.price;
   })

   return [total,total*options.tax];
}

const shoppingCart:Product[] = [phone, tablet];
const tax: number = 0.15;




const result:number[] =taxCalculation({
    products:shoppingCart,
    tax:tax
});

console.log("Total",result[0],"Tax",result[1]);



export { };