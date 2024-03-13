import { Product, taxCalculation} from './05-function-destructuring';



const shoppingCart:Product[] = [{
    description:"Nokia",
    price:150
},{
    description:"iPad",
    price:250
}];





const [total,tax] = taxCalculation({
    products:shoppingCart,
    tax:0.15
});

console.log("Total",total,"Tax",tax);


