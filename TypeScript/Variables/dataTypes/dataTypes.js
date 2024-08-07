// * number
var num = 10;
var Num = 200;
// * string
var FNames = "jayan";
// * boolean
var isId = true;
// * Array 
var isArray = [1, 2, 3, 40, 5.5];
var isArray2 = [1, 2, 3, 40, 5.5];
var isArrayString = ["jay", "hello"];
var isArrayString2 = ["jay", "hello"];
/* -------------------------------------------------------------------------
* ---------------------------------- union  ---------------------------------
? how in union we can assign multiple type in one variable
-------------------------------------------------------------------------- */
var DATA;
var DT;
DT = "hello";
DT = 21;
//* how to add method of deferent data types 
var AddMethod = function (variable) {
    if (typeof variable === "string") {
        return variable.toUpperCase();
    }
    else if (typeof variable === "number") {
        return variable.toFixed();
    }
    else if (typeof variable === "boolean") {
        return variable = !variable;
    }
};
DATA = "hyy";
console.log(AddMethod(DATA)); // work with string types
DATA = 121;
console.log(AddMethod(DATA)); // work with number types
DT = true;
console.log(AddMethod(DT)); // work with boolean types
//! DATA = true; // can't assign boolean 
// * any 
var ANY = 1; // ? number
ANY = true; // ? boolean
ANY = "1"; // ? string
ANY = []; // ? array
// * unknown
// * With unknown it type will be any thing 
var UN;
UN = 12;
UN = "Hello";
UN = true;
UN = ['1212', 54923, "Hyy"];
// * tuples
var data = [11, "skill"];
data.push("22");
console.log(data);
var data2 = [11, "skill", true, 123];
data2.push("21");
data2.push(21);
console.log(data2);
function Users(_a) {
    var string = _a.name, boolean = _a.isActive;
}
Users({ name: "jayan", isActive: true });
// * Enums
// ? with Enum we can group of elements 
// * Without ENUM 
// let small : string  = "S";
// let medium : string = "M";
// let large : string  = "L";
// let extraLarge : string  = "XL";
// let doubleLarge  : string = "XXL";
// * With ENUM 
var clothsSize;
(function (clothsSize) {
    clothsSize["small"] = "S";
    clothsSize["medium"] = "M";
    clothsSize["large"] = "L";
    clothsSize["extraLarge"] = "XL";
    clothsSize["doubleLarge"] = "XXL";
})(clothsSize || (clothsSize = {}));
// * use
console.log(clothsSize.small); // this will print "S"
console.log(clothsSize.large); // this will print "L"
var shoesSize;
(function (shoesSize) {
    shoesSize[shoesSize["small"] = 6] = "small";
    shoesSize[shoesSize["medium"] = 9] = "medium";
    shoesSize[shoesSize["large"] = 12] = "large";
    shoesSize[shoesSize["extraLarge"] = 14] = "extraLarge";
    shoesSize[shoesSize["doubleLarge"] = 16] = "doubleLarge";
})(shoesSize || (shoesSize = {}));
// * use
console.log(shoesSize.small); // this will print 6
console.log(shoesSize.large); // this will print 12
// ! enum clothsC {red,green ,blue ,yellow , orange , skyBlue }
// ? this enum only print 0 , 2 number as index value so must add values 
var clothsColor;
(function (clothsColor) {
    clothsColor["red"] = "red";
    clothsColor["green"] = "green";
    clothsColor["blue"] = "blue";
    clothsColor["yellow"] = "yellow";
    clothsColor["orange"] = "orange";
    clothsColor["skyBlue"] = "skyBlue";
})(clothsColor || (clothsColor = {}));
// * use
console.log(clothsColor.blue); // this will print "blue"
console.log(clothsColor.red); // this will print "red"
