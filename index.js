//  1   VARIABLES:

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

//  2   TERNARY :

let age = 9;
// if (age > 10) {
//     console.log("Come in");
// } else {
//     console.log("Dont Come");
// }

// age > 10 ? console.log("Come in") : console.log("Dont Come");

//  3   FUNCTIONS:

function sum() {
    return 10 + 20;
}
// console.log(sum());

// arrow function
let sub = () => {
    return 2 - 1;
}
// console.log(sub());

//  4   ARRAYS:

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

//  5   OBJECTS:
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

//  6   REST AND SPREAD:

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

// console.log(java, python, swift, web);

//  7   CALLBACK:

function add(a, b, intro) {
    // console.log(a + b);
    intro();
}

(add(10, 20, function () {
    // console.log("I am Munim")
}))

//  8   PROMISES:

// console.log("A");
setTimeout(() => {
    // console.log("B");
}, 1000);
// console.log("C");

// 

let prom = new Promise(function (resolve, reject) {
    const age = 20;
    if (age > 10) {
        resolve("Qualified")
    } else {
        reject("Rejected")
    }
})

prom.then(function (data) {
    // console.log(data);
}).catch(function (err) {
    // console.log(err);
})

// ASYNC AND AWAIT:

// console.log("i reached");
// let prom2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("hi i am in ")
//         resolve();
//     }, 1000);
// })

// async function exec() {
//     await prom2
//     console.log("i am out ")
// }
// exec();

let prom2 = new Promise(function (resolve, reject) {
    reject("Rejected")
})

async function exec() {
    try {
        await prom2
        console.log("resolve")

    } catch (error) {
        console.log("rejected")
    }
}
exec();


