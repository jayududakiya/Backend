// * number

let num : number = 10;
let Num : number = 200;

// * string

let FNames : string= "jayan";

// * boolean

let isId : boolean = true ;

// * Array 

let isArray : Array<number> = [1,2,3,40,5.5]
let isArray2 : number[] = [1,2,3,40,5.5]

let isArrayString : Array<string> = ["jay","hello"]
let isArrayString2 : string[] = ["jay","hello"]

/* -------------------------------------------------------------------------
* ---------------------------------- union  --------------------------------- 
? how in union we can assign multiple type in one variable 
-------------------------------------------------------------------------- */

let DT : string | number | boolean;
let ISdU : number | null ;

DT = "hello";
DT = 21 ;

//* how to add method of deferent data types 
// ? it's call a type check with basic "javascript" code 
const AddMethod = (variable : number | string | boolean) => {
    if(typeof variable === "string"){
       return    variable.toUpperCase()
    }
    else if(typeof variable === "number"){
       return    variable.toFixed(2)
    }
    else if(typeof variable === "boolean"){
       return    variable = !variable
    }
}
let DATA : string | number ; 
//! DATA = true; // can't assign boolean 
DATA = "hyy";
console.log(AddMethod(DATA)); // work with string types

DATA = 121;
console.log(AddMethod(DATA)); // work with number types

DT = true;
console.log(AddMethod(DT)); // work with boolean types


// * any 

let ANY : any = 1; // ? number
ANY = true; // ? boolean
ANY = "1";  // ? string
ANY = [] ;  // ? array

// * unknown

// * With unknown it type will be any thing 

let UN : unknown;
UN = 12;
UN = "Hello"
UN = true 
UN = ['1212',54923,"Hyy"];

// * tuples

let data : [number, string]= [11,"skill"];

data.push("22");
console.log(data);

let data2 : [number, string,boolean,number]= [11,"skill",true,123];

data2.push("21");
data2.push(21);
console.log(data2);

// function Users ({name:string,isActive:boolean}){} Users({name : "jayan",isActive:true})

// * Enums
// ? with Enum we can group of elements 

// * Without ENUM 

// let small : string  = "S";
// let medium : string = "M";
// let large : string  = "L";
// let extraLarge : string  = "XL";
// let doubleLarge  : string = "XXL";

// * With ENUM 
enum clothsSize {
    small = "S",
    medium = "M",
    large = "L",
    extraLarge = "XL",
    doubleLarge = "XXL"
}
// * use
console.log(clothsSize.small) // this will print "S"
console.log(clothsSize.large) // this will print "L"

enum shoesSize {
    small = 6,
    medium = 9,
    large = 12,
    extraLarge = 14,
    doubleLarge = 16
}

// * use
console.log(shoesSize.small) // this will print 6
console.log(shoesSize.large) // this will print 12


// ! enum clothsC {red,green ,blue ,yellow , orange , skyBlue }
// ? this enum only print 0 , 2 number as index value so must add values 

enum clothsColor {
    red = "red",
    green = "green",
    blue = "blue" ,
    yellow = "yellow",
    orange = "orange",
    skyBlue = "skyBlue"
}

// * use
console.log(clothsColor.blue) // this will print "blue"
console.log(clothsColor.red) // this will print "red"

