//object

let user = {
    name: "Bikrom Roy",
    age: 24,
    id: "213-15-4561",
    subject: "Web Engineering",
    status:"Masters of Science",
    
};
console.log(user.name);
console.log(user['name']);

delete user.address;  //use delete key to remove any values form user.
console.log(user);

user.number ="123456789"; //Add any kind of values.
user.number ={
    other : "23456789",  // Modify the value
    id: "mobile",
};
console.log(user); //add fresh new value to modify old values.

user.address ="Rajshashi";
user.address={
    Devision: "Rajsashi",
    District: "Natore",
    Upozela: "Bagatipara",
    Country: "Bangladesh",
};
console.log(user);

console.log(user.keys);
//console.log(user.entries());
console.log(Object.entries(user)); //This is one kind of tupple.
console.log(Object.keys(user)); //This is one kind of tupple.
console.log(Object.values(user)); //This is one kind of tupple.