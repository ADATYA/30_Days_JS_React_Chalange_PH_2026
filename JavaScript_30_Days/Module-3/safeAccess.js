//Optional Chaining and Nullish Coalexching (?. , ??, Safe Property Access)

let user1 = {
    name : "Bikrom",
    address:{
        city:"Dhaka",
    },
};

let user2 = {
    name: "Aahes",
    //no address
}; 

//Optional Chaining
console.log(user1.address.city); //Dhaka
console.log(user2?.address?.city); //safe access

//Nulish Chaining (Undefine value hole)
console.log(user2?.address?.city ?? "Rajshashi"); 