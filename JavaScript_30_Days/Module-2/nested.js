//nested
let user ={
    name: "Bikrom Adatya Roy",
    age:24,
    address: {
        city: "Natore",
        village:"Bagatipara",
        zipcode :6410,
    },
};
console.log(user.address); // ami chile eita . o use kora jay 
console.log(user["name"]); //ba [" "] o use kora jay 
console.log(user.age);

console.log(user["address"]["zipcode"]);
console.log(user.address.zipcode);

let entry = Object.entries(user);
console.log(entry);

console.log(entry[0][1]); //declear array of array

let students=[
{
    name: "Sporsho",
    id: 123,
    dept : "CSE",
    batch: 63,
},
{
    name: "Polovi",
    id: "345",
    dept : "SWE",
    batch: 65,
    address: {
        area:"Mymanshing",
        roadname:"natokghar lean",
        devision:"Mymanshing",
        number:['1234567','3456789'], //array define values
              
    },
},
{
    name: "Ankita",
    id: 789,
    dept : "Pharmacy",
    batch: 73,
    
},

];
console.log(students[1]["name"]);
console.log(students[1].id);

console.log(students[1].address.number);

students[1].address.number[1] = "0987654321" // modify values
console.log(students[1].address.number[1]);
console.log(students[1].address.number); // final output vlaues