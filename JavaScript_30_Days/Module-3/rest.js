//rest operator

//Function:
function add(...numbers){
    //console.log(numbers);
    let total = 0;
    for (const num of numbers){
        total += num;
    }
    return total;
}

console.log(add(1,2,3,4,5,6,100));

//Object rest
const obj = {
    name :"polovi",
    age: 25,
    address : "Mymanshing",
    occupation: "Software Engineer level-2",

};
const {name , ...remaining} = obj;

console.log(remaining);


//Array..

const arr = [1,2,3,100,200];
const [, , , ...rest]=arr;
console.log(rest);

//Function
function something(one, ...remaining){
    console.log(one,remaining);
}
console.log(something("first",1,2,3,4,5,6,7));
//rest operator sober ses e bose.nahole kaj korbe nah
