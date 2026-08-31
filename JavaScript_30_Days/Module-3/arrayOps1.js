//Array Method part-1

//foreach, map

//foreach

let fruits = ['Apple', "Banana", "Mango", "Jrackfrout"];

let newFruets = fruits.forEach((f,idx) => {
    console.log(`${idx +1} ->${f}`);
    //return `${idx +1} ->${f}`; foreach can't return values.
});
//console.log(newFruets); //outpute :undefined


//How map was return values.

let newFruets1 = fruits.map((f,idx) => {
    console.log(`${idx +1} ->${f}`);
    return `${idx +1} ->${f}`; 
});
console.log(newFruets1);



let newFruets2 = fruits.map((f) => f.toLocaleLowerCase());

console.log(newFruets2, "\n", fruits);

let customFruits = fruits.filter((f) => f.length >5);

console.log(customFruits);