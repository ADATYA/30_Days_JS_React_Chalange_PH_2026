//array operation

let marks = [55, 82, 91, 45, 98, 63];

let max = marks[0];

for(let i = 1; i<marks.length; i++){
    if(max < marks[i]){
        max = marks[i];
    }
}
console.log(max);

// manualy find the sum values
let sum = 0;
for (let mark of marks){
    sum += mark;
}
console.log(sum); //sum value
console.log(sum/marks.length); //average

//manualy reverse method.

let  reMarks = [];
for (let i = marks.length-1; i>=0; i--){
    reMarks.push(marks[i]);
}
console.log(reMarks);
