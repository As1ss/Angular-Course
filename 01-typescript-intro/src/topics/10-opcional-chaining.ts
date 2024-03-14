


export interface Passenger{
    name:string;
    children?:string[];
}

const passenger1:Passenger = {
    name: "Joado",
}

const passenger2:Passenger ={
    name: "Pepe",
    children: ["Sara","Rocío"],
}


function printChildren(passenger:Passenger):void{

    const howManyChildren:number = passenger.children?.length || 0;

    console.log(`El pasajero ${passenger.name} tiene ${howManyChildren} hijos.`);

}

printChildren(passenger1);
printChildren(passenger2);