/* ----------------------- // TODO : Intersection TOPIC ----------------------- */ 

/* ------------------------ // * create intersection */

// ? step 01 create group of types 
// ! this is look like object but it's not a object 

type UserDetails  = {
    name : string ,
    age : number,
    isActive :boolean,
    email : string
}

// ! in custom types with "?" symbol make filed optional

type UserAddress = {
    city : string,
    street ? : string , // ? optional
    state :  string ,
    pinCode : number
}

type UserContact = {
    contact ? : {
        phoneNo : number ,
        mobileNo : number ,
        webUrl : string
    }
}


/* -------------------------------- // ? also this is call as intersection ------------------------------- */
// ! combine tow custom types  with "&" symbol
// ? type user = UserDetails & UserAddress ;

// ! combine multiple custom types with "&" symbol


type user = UserDetails & UserAddress & UserContact & {
    contact2 : {
        phoneNo : number ,
        mobileNo : number ,
        webUrl : string
    }
};

// * user of combine types as obj

let user : user;

user = {
    name : "jayan",
    age : 23,
    isActive : true,
    city : "surat",
    email : "j@jd.com",
    pinCode : 395006,
    state : "gujarat",
    contact2 : {
        mobileNo : 121213132,
        phoneNo : 3131323232,
        webUrl : "https://www.google.com/"
    }
}

// * with optional filed of street / contact

let user2 : user = {
    name : "jayan",
    age : 23,
    isActive : true,
    city : "surat",
    email : "j@jd.com",
    pinCode : 395006,
    state : "gujarat",
    street : "45 , shyamdhaym society : 3",
    contact : {
        mobileNo : 121213132,
        phoneNo : 3131323232,
        webUrl : "https://www.netflix.com/in/"
    },
    contact2 : {
        mobileNo : 121213132,
        phoneNo : 3131323232,
        webUrl : "https://www.google.com/"
    }
}