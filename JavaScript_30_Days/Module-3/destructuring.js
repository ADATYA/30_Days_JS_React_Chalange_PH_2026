/* ### 🧠 Destructuring — Short Summary

**Destructuring** = Array/Object থেকে value সহজে variable-এ নেওয়া।

**Object:**

```js
let user = { name: "Bikrom", age: 24 };

let { name, age } = user;
```

**Array:**

```js
let numbers = [10, 20, 30];

let [a, b, c] = numbers;
```

👉 **Object → `{ }`**
👉 **Array → `[ ]`**

**One-line note:**

> Destructuring হলো Array/Object-এর value সহজে আলাদা করে variable-এ assign করার syntax।
 */

const student = {
    name: "Krishno",
    age: 37,
    address: "Brindabon"
};

const OldName = student.name;

const {name,age, address } = student;

//console.log(name);

// Output : Krishno.

const student1 = {
    name: "Radha",
    age: 27,
    address:{
        city: "Natore",
        zip: 6410,
        post: "Laxmanhati"
    },
};

//Nested and Name alias.
const {
    name: stdName,
    address:{ city, zip},
} =student1;

console.log(stdName,city); //Output : Radha Natore

// array 

const arr = ['Red', 'Green', 'Blue'];
const [,,third] = arr;
console.log(third); //output : Blue

// Nested array

const student2 = {
    name: "Gopal Bhar",
    age: 90,
    address:{
        city: "Mymanshing",
        zip: 2070,
        post: "Natokghar lean"
    },
    hobbies:["Commidy","Claver","Intelegent"],
};
const {name:std2Name, address:{city:stdCity}, hobbies:[firstHobby]}=student2;
 console.log(firstHobby,stdCity); //Output : Commidy Mymanshing
 //This is nested array and finding the value form array list.