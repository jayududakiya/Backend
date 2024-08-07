// TODO : OBJECT DECLARATION in TYPESCRIPT

// * : basic OBJECT 
const userX = {
    name: "jayan",
    coarse : "MRNE Stack",
    frees : 80000
}

// * 01 : PASSING OBJECT IN FUNCTION {}

// ! ITS NOT VALID 
// ! function Users ({name:string,isActive:boolean}){}
// ! Users ({name:"JAYAN",isActive:true})

// * 02 PASSING OBJECT IN FUNCTION {}
// # ITS VALID FUNCTION 
// ? first Why 
function createCoarse ():{coarseName :string ,isActive : boolean}{
    return {
        coarseName : "ReactJs",
        isActive : true
    }
}

const coarse = createCoarse();
console.log(coarse);

// ? second Why 
function createCoarse2 (name:string , isAc : boolean):{coarseName :string ,isActive : boolean}{
    return {
        coarseName : name,
        isActive : isAc
    }
}

// ? ITS VALID FUNCTION
const coarse2 = createCoarse2("FullStack",true);
console.log(coarse2);


// TODO : ALIAS IN Object 

/*
* here is "type" is a key word 
? type ObjName = { keyName : type;keyName : type;keyName : type }
*/ 

// ? Example
type USER  = {
    name : string;
    email : string;
    contactNo : number ;
    isActive : boolean 
}

function usersX (user : USER) : USER {
    return {
        contactNo : 12332323,
        email : "Email",
        name : "name",
        isActive : false
    }
}

function usersC (user : USER) : USER {
    return user
}

console.log(usersC({name : "XN" , email : "XE" , contactNo : 12121232 , isActive : true}))

// TODO : CREATING OBJECT IN "TS"

// ! not valid syntax : const User :{name : string ,email : string ,isActive : boolean}

// * this is valid 
// ? with initialize value
const User : {
    name : string ,
    email : string ,
    id : number | string ,
    isActive : boolean
} = {
    name : "jayan",
    email : "j@j.com",
    id : 1223323,
    isActive: true
};

// * its valid 
// ? first is define
let User2 : {
    name : string ,
    email : string ,
    isActive : boolean
};

// ? second is with initialize value
User2 = {
    name : "john",
    email : "jj@j.com",
    isActive : true
}



