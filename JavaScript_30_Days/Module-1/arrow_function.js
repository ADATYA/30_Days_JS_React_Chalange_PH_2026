// function total (price , quantity){
//     const grandTotal = price * quantity;
//     return grandTotal;
// }

const total = (price=10 , quantity=12) =>{
    const grandTotal = price * quantity;
    return grandTotal;
}
const spend = total(11);
console.log(spend);

const add = (a,b) => a+b; //return value lage nah one liner code hole
const sum = add(15,30);
console.log("sum of the value is: ",sum);