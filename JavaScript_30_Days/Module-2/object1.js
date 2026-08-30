let student ={
    name: "Sporsho Singha",
    id: 1082,
    marks:{
        software_engieering:87,
        data_mining: 82,
        operating_system:76,
        ai_machine_learning:90,
        engineering_mathamatic: 67,
        software_project: 93, 
        object_orianted_programming: 89,
        discrit_mathamatics: 91,
        algorithm_with_C_lang: 68,

    }
};

let totalMarks = 0;
let totalSubject =0;

for (const subject in student.marks){
    totalMarks += student.marks[subject];
    totalSubject++;
}

//Total sum of marks
console.log(totalMarks, totalSubject);

//Total average marks
let avg = (totalMarks / totalSubject).toFixed(2);
//console.log(avg.toFixed(2));

if(avg >= 80){
    console.log("Passed with total numbers:",avg,"%");

}else{
    console.log("Fail, focus on study!!as much as you can");
}

let cart =[
    {name : "Shirt", price : 1200, quantity:2},
    {name : "Pants", price : 1800, quantity:1},
    {name : "Jackets", price : 5200, quantity:3},
];


//task : koto gulo items kinechea And koto taka bill hoywche sita bdt te deskahite hobe now to solve this

let totalItems = 0;
let totalBill = 0;
 for (let item of cart){
    totalItems = totalItems + item.quantity;
    totalBill = totalBill +(item.price * item.quantity);
 }
 console.log("TOTAL Items : ", totalItems);
 console.log("Total Bills : ", totalBill,"BDT");

