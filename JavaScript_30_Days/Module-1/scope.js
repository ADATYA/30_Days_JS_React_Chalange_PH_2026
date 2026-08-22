//Scope
if(true){
    let age; //global scope
}

function sayAge(){   //functional scopes
    age =21; 

}
sayAge();
console.log(age);