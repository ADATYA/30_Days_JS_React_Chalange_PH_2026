function total (price , quantity){
    const grandTotal = price * quantity;
    return grandTotal;
}

const spend = total(12,40);
console.log(spend);

//void Function
function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello("Bikrom Adatya Roy");