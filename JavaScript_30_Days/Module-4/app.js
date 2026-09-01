// ========================
// CLASS-1 |Part-1 Practice
// ========================

// Summary : getElementById, querySelector

console.log("todo start");

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// console.log(taskInput, addBtn,taskList)

// let addBtnAlt = document.querySelector("button");
// console.log(addBtnAlt);

// let addBtnAlt1 = document.querySelector("#addBtn");  // # samne nah dile error show korbe  or null show korbe
// console.log(addBtnAlt1);

// ========================
// CLASS-2 |Part-2 Practice
// ========================

//Summary:

// addBtn.addEventListener("click", function (){
//     console.log("Btn was clicked by me");
// });

//Modern js er part
addBtn.addEventListener("click", () => {
  console.log("Btn was clicked by me");
});

// addBtn.addEventListener("click", () =>{
//     console.log("taskInput");
// });


// ========================
// CLASS-3 |Part-3 Practice
// ========================

addBtn.addEventListener("click", () => {
  let li = document.createElement("li");
//   li.textContent = taskInput.value;
//   taskList.appendChild(li);

let span = document.createElement("span");
span.textContent = taskInput.value;

// ========================
// CLASS-4 |Part-4 Practice
// ========================

let btnWrapper = document.createElement("span"); 
let completeBtn = document.createElement("button");
completeBtn.textContent = "Complete✅";

let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete❌";
li.appendChild(span);
li.appendChild(btnWrapper);
btnWrapper.appendChild(completeBtn);
btnWrapper.appendChild(deleteBtn);

taskList.appendChild(li);
taskInput.value = "";
});

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log("Enter key pressed", taskInput.value);
  }
});

//Create  elements

// let li =  document.createElement("li");
// li.textContent = "Learn JavaScript";
// console.log(li);
// taskList.appendChild(li);



