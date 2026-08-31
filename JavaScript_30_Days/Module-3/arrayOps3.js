//reduce sort, chaining

let products = [
  { title: "Mouse", price: 500, inStock: true },
  { title: "Keyboard", price: 1500, inStock: true },
  { title: "Monitor", price: 8000, inStock: true },
  { title: "Headphone", price: 2500, inStock: true },
];

// reduce
let totalPrice = products.reduce((acc, current) => {
  return acc + current.price;
}, 0);

console.log("Total Price:", totalPrice);

// sort - high to low
let sorted = products.sort((a, b) => b.price - a.price);

console.log("Sorted:", sorted);

let estPrice = products
.filter((p) => p.inStock == true)
.reduce((acc, cur) => {
    return (acc += cur.price);
}, 0);

console.log(estPrice);
