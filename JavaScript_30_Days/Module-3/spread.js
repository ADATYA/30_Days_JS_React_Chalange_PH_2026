//Spread Operator - three Dot
//let newArr = [...oldArr]
// let newObj = {...oldObj}

let cart =["fruits","rice"];
cart.push("egg");
console.log(cart);

let cart1 = [...cart, "spicy","vegetable","water"];
console.log(cart, cart1);

// Full Operation of spread operator.

const personalInfo ={
    name:"Nomita Roy",
    age: 50,
    address:{
        city:"Natore",
        upzela:"Bagatipara",
        post: "Laxmanhati",
        zip: 6410,
    },
};

const contactInfo = {
    email: "nomitaroy@gmail.com",
    phone: "01323245678" // Kono number zero diye start hoy nah tahole decimal zero not allowed show korbe.
};

const fullProfile ={
    ...personalInfo,
    ...contactInfo,
    firther_info:{
        other_contact: 12345577,
        other_email: "roynomita1234@gmail.com",
        husbend_name: "Bireswer Roy",
        status: "Job Holder",

    }
}

console.log(fullProfile);