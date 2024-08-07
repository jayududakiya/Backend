"use strict";
// TODO : OBJECT DECLARATION in TYPESCRIPT
// * : basic OBJECT 
const userX = {
    name: "jayan",
    coarse: "MRNE Stack",
    frees: 80000
};
// * 01 : PASSING OBJECT IN FUNCTION {}
// ! ITS NOT VALID 
// ! function Users ({name:string,isActive:boolean}){}
// ! Users ({name:"JAYAN",isActive:true})
// * 02 PASSING OBJECT IN FUNCTION {}
// # ITS VALID FUNCTION 
// ? first Why 
function createCoarse() {
    return {
        coarseName: "ReactJs",
        isActive: true
    };
}
const coarse = createCoarse();
console.log(coarse);
// ? second Why 
function createCoarse2(name, isAc) {
    return {
        coarseName: name,
        isActive: isAc
    };
}
// ? ITS VALID FUNCTION
const coarse2 = createCoarse2("FullStack", true);
console.log(coarse2);
function usersX(user) {
    return {
        contactNo: 12332323,
        email: "Email",
        name: "name",
        isActive: false
    };
}
function usersC(user) {
    return user;
}
console.log(usersC({ name: "XN", email: "XE", contactNo: 12121232, isActive: true }));
// TODO : CREATING OBJECT IN "TS"
// ! not valid syntax : const User :{name : string ,email : string ,isActive : boolean}
// * this is valid 
// ? with initialize value
const User = {
    name: "jayan",
    email: "j@j.com",
    id: 1223323,
    isActive: true
};
// * its valid 
// ? first is define
let User2;
// ? second is with initialize value
User2 = {
    name: "john",
    email: "jj@j.com",
    isActive: true
};
