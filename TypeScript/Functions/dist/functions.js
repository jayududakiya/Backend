"use strict";
// import { PI } from "./utils"
// console.log("PI",PI);
// !x FUNCTION DECLARATION IN TS
// * Basic Function
function addition(a, b) {
    console.log(a + b);
    return a + b;
}
// * CALL
addition(10, 20);
// * Arrow Function
const Sum = (a, b) => {
    console.log(a * b);
    // ! let sum : number = (a*b).toFixed(2)
    let sum = a * b;
    sum.toFixed(2);
    return sum;
};
// * CALL
Sum(10.5647, 20.899);
// ? EXAMPLES
// ? => 01
const EXM = (id, Name) => {
    console.log(Name + id);
    return Name + id;
};
// ! EXM(00022321,"Jayan") // show Error 
EXM(1022321, "Jayan");
// ? => 02
// * with default value
let getUpperCase = (text = "Add Sum Text") => {
    return text.toUpperCase();
};
console.log(getUpperCase());
console.log(getUpperCase("Hello"));
// ? =>  03
// * with default value
const userLongIn = (FName, email, isPaid = false) => {
    return console.log("Hello : ", FName, "Email :", email, "isPaid :", isPaid);
};
// * CALL
userLongIn("jayan", "jayan@gmail.com", true);
userLongIn("jayan", "jayan@gmail.com");
// * Other Examples
const userSignUp = (FName, email, isPaid = false) => { };
userSignUp("jayan", "j@j.com");
// * function in Array Method 
const cars = ["Toyota", "Honda", "Ford"]; // with string
const cars2 = ["Chevrolet", "Tesla"]; // with any
const cars3 = [1, 3, 4]; // with any 
// ? because of the () : string => 
cars.map((car) => {
    console.log(car);
    return car;
});
// ? because of the (value : string)
cars2.map((car) => {
    console.log(car);
    return car;
});
// ? auto detected    
cars3.forEach((car) => {
    console.log(car);
    return car;
});
// # [1,3,4] = 8
let num = cars3.reduce((a, b) => a + b);
console.log("NUMBER REDUCE", num);
// * REST PARAMETERS IN FUNCTION
function Names(...name) {
    console.log("REST not passing array");
    console.log(name);
}
Names("jayan", "nikhil", "rahul", "piyush", "sahil");
// ? with out rest params 
function FullNames(name) {
    console.log("with Out REST passing array");
    console.log(name);
}
FullNames(["jayan", "nikhil", "rahul", "piyush", "sahil"]);
// * ERROR FUNCTION WITH IN TYPESCRIPT 
// ? void :- "this means is showError() function is not returning anything"
function showError(errorMsg) {
    console.log(errorMsg);
    // ! return 1
    // ! return "1"
}
//! this "showError" Function will show in console Error
// ? showError("refers Error")
// ? never :- "The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program."
function handelError(errorMsg) {
    throw new Error(errorMsg);
    // ! return errorMsg
    // ! return "Error"
}
//! this "handelError" Function will show in console Error
//? handelError("there is a refers Error")
