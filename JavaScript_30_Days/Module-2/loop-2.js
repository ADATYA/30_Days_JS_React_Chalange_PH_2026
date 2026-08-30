let techStack  = ["JavaScript","TelwinCSS","TypeScript","React","PSQL"];
for(const tech of techStack){  //for of in loop
    //console.log("I know this language very well :",techStack);
    console.log("Iam learning this lnaguange very soon :", tech);
}


let obj = {
    name : "Bikrom",
    age: 24,
    address:"Natore",
};

for (let element in obj){ // for in  at loop function
    console.log(element);
}

for (let element in obj){
    console.log(element, "== >>",obj[element]);
}

/* 
| বিষয়         | `for...of`                 | `for...in`           |
| ------------ | -------------------------- | -------------------- |
| কী দেয়?      | **Value**                  | **Key / Index**      |
| মূলত ব্যবহার | Array                      | Object               |
| Array-তে     | সরাসরি value দেয়           | index দেয়            |
| Object-এ     | সাধারণত ব্যবহার করা যায় না | key দেয়              |
| Example      | `for (let x of arr)`       | `for (let x in obj)` |
 */

//Break
let marks =80;
for (let i = marks; i <=100;i++){
    if (i> 90){  //90 is the beggest point so that the break point is end in 90.
        break;
    }
    console.log(i);
}
//even or odd...

for (let i =1; i<15;i++){
    if(i %2 !=0){
        continue;
    }
    console.log(i);
}