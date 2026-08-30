// JavaScript Mini Project

let students = [
    { id: 213, name: "Bikrom", age: 24, department: "CSE" },
    { id: 221, name: "Adatya", age: 23, department: "SWE" },
    { id: 222, name: "Roy", age: 25, department: "EEE" },
];


// =====================================
// 1. Add New Student
// =====================================

function addStudent(name, age, dept) {

    let newId = students.length > 0
        ? students[students.length - 1].id + 1
        : 213;

    let newStudent = {
        id: newId,
        name: name,
        age: age,
        department: dept,
    };

    students.push(newStudent);

    console.log("New student added successfully");
}


// Add new student
addStudent("Sporsh", 23, "Web Engineering");


// =====================================
// 2. Get All Students
// =====================================

function getAll() {

    for (const student of students) {
        console.log(student);
    }
}


// =====================================
// 3. Find Student by ID
// =====================================

function findStudent(id) {

    let foundStudent = null;

    for (const student of students) {

        if (student.id === id) {
            foundStudent = student;
            break;
        }
    }

    if (foundStudent) {
        console.log("Found Student:", foundStudent);
    } else {
        console.log("404: Student ID not found");
    }
}


// Find student
findStudent(221);


// =====================================
// 4. Delete Student by ID
// =====================================

function deleteStudent(id) {

    let targetIndex = -1;

    for (let i = 0; i < students.length; i++) {

        if (students[i].id === id) {
            targetIndex = i;
            break;
        }
    }

    if (targetIndex !== -1) {

        let deletedStudent = students.splice(targetIndex, 1);

        console.log(
            `Deleted ${deletedStudent[0].name} - ID: ${id}`
        );

    } else {

        console.log("404: Student ID not found");
    }
}


// Delete student
deleteStudent(222);


// =====================================
// 5. Show All Students
// =====================================

getAll();