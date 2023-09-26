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
console.log(num)