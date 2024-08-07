"use strict";
/* ----------------------- // TODO : Intersection TOPIC ----------------------- */
// * user of combine types as obj
let user;
user = {
    name: "jayan",
    age: 23,
    isActive: true,
    city: "surat",
    email: "j@jd.com",
    pinCode: 395006,
    state: "gujarat",
    contact2: {
        mobileNo: 121213132,
        phoneNo: 3131323232,
        webUrl: "https://www.google.com/"
    }
};
// * with optional filed of street / contact
let user2 = {
    name: "jayan",
    age: 23,
    isActive: true,
    city: "surat",
    email: "j@jd.com",
    pinCode: 395006,
    state: "gujarat",
    street: "45 , shyamdhaym society : 3",
    contact: {
        mobileNo: 121213132,
        phoneNo: 3131323232,
        webUrl: "https://www.netflix.com/in/"
    },
    contact2: {
        mobileNo: 121213132,
        phoneNo: 3131323232,
        webUrl: "https://www.google.com/"
    }
};
