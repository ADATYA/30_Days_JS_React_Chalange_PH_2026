//Array Methods part-2

let students =[
    {name:"Bikrom", marks:70},
    {name:"Sporsho", marks:93},
    {name:"Ankita", marks:90},
];

let fruits = ["Apple","Banana","Mango","Jrackfruit","Lichi"];

//find

let customFruits = fruits.find((f) => f.length >5);
console.log(customFruits);

let findFr = fruits.includes("Mango") // true false  //Boolean values.
console.log(findFr);

let studentCheck = students.some((s) => s.marks >80); //some
console.log(studentCheck);

let studentCheck1 = students.every((s) => s.marks >80);
console.log(studentCheck1);