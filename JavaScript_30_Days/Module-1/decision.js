//if else, switch case, ternary.

let age = 19;

if(age >= 18){
    console.log("He is a Voter");
}else{
    console.log("Not a Voter");
}

let marks = 90;

if(marks>=80  && marks >= 90){
    console.log("A+ BOY");
}else if(marks >=70){
    console.log("A");
}else if(marks >= 60){
    console.log("A-");
}else{
    console.log("Need Improvement");
}

//Swithc Case

switch (true){
    case marks >=80:
        console.log("A+");
    case marks>=70:
        console.log("A");
        break;
    default:
        console.log("Improvement needed");
        break;
    
}

//Ternery condition ? true : flase;

age>=18 ? console.log("Voter") : console.log("Not a voter");