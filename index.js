//   VARIABLES:

// can be redeclared
var a = "munim";
var a = "mansoor"
// console.log(a);

//cannot be redeclared but can be reassigned
let b = "munim"
// let b = "kamran"
b = 'huzaifa'
// console.log(b);

//cannot be redeclared and reassigned

const c = "munim"
// let b = "kamran"
// console.log(c);

// TERNARY :

let age = 9;
// if (age > 10) {
//     console.log("Come in");
// } else {
//     console.log("Dont Come");
// }

// age > 10 ? console.log("Come in") : console.log("Dont Come");

// FUNCTIONS:

function sum() {
    return 10 + 20;
}
// console.log(sum());

// arrow function
let sub = () => {
    return 2 - 1;
}
// console.log(sub());

// ARRAYS:

let students = ["munim", "kamran", "isha", "ayesha"]

// displaying each elem of array seprately using loop
// for (let index = 0; index < students.length; index++) {
//     const element = students[index];
//     console.log(element);
// }

// displaying each elem of array seprately using map()
students.map(function (i) {
    // console.log(i);
})

//Displaying items greater than 20 using filter () 
let rollNums = [23, 44, 33, 21, 31, 1, 3, 5, 8, 12, 14, 16, 99, 122]

const num = rollNums.filter(function (item) {
    if (item > 20) {
        return item;
    }
})
// console.log(num)

// OBJECTS:
const cars = {
    name: "toyota",
    category: "sedan",
    model: 2023,
    varient: "top of the line",
    engine: 1800
}
// destructuring 
const { name, category, model, varient, engine } = cars
// console.log(name);
// console.log(cars.name)

// REST AND SPREAD:

let teacher = {
    name: "kamran",
    age: 45,
    subject: "web dev",
    department: "isc/it"
}

// let teacher1 = teacher;
// spread op
let teacher1 = { ...teacher, car: "corolla" }
teacher1.name = "munim"

// console.log(teacher)
// console.log(teacher1)

const languages = {
    java: "mobile app",
    python: "ai",
    swift: "ios app",
    js: "web",
    node: "Web backend",
    react: "web ui",
}

const { java, python, swift, ...web } = languages;

console.log(java, python, swift, web);