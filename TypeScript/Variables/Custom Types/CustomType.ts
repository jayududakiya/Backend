/* ------------------------- // TODO : Custom types OR alias  ------------------------- */

/* -------------------- // * this is primitive type alias ------------------- */
type STR = string
type NUM = number
// * now we can  use "STR" as string type 
// * now we can  use "NUM" as number type 

/* // ? EXAMPLE ------------------------------- */

let Name : STR = "jayan"; // this is string type

let numbersX : NUM = 1221212; // this is number type

let num : NUM ; // this is number type
num = 889232320;


/* -------------------- // * this is object type alias ------------------- */

type STUDENT = {
    Name : string ,
    age : number ,
    course : string ,
    isActive : boolean,
    contact : number ,
    email ? : string , // ? this is with "?" symbol make it optional filed in object ,
    hobbies : string[],
    address : {
        city : string,
        street : string ,
        pinCode : number | string
    }
}

let student : STUDENT;

student = {
    age : 23,
    contact : 42773923,
    course : "MERN Stack",
    isActive : true,
    Name : "John",
    hobbies : ["waking","reading"],
    address :{
        city : "surat",
        pinCode : "p0131312",
        street : "45,shyamdhaym society 3"
    }
}

let student2 : STUDENT = {
    age : 23,
    contact : 42773923,
    course : "MERN Stack",
    isActive : true,
    Name : "John",
    hobbies : ["waking","reading"],
    email : "jayan@jd.com",
    address :{
        city : "surat",
        pinCode : "p0131312",
        street : "45,shyamdhaym society 3"
    }
}