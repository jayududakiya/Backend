"use strict";
/* ----------------------------------- // TODO : CLASS IN TYPESCRIPT ----------------------------------- */
/* ---------------------------------- // * create Class in TS  ---------------------------------- */
class car {
    constructor() {
        // * variable declaration
        this.color = "red";
        this.model = "GT";
        this.year = 1969;
        this.carCompany = "Ford";
        this.speed = 100;
    }
    increaseSpeed() {
        this.speed += 10;
        console.log("^", this.speed);
    }
    decreesSpeed() {
        this.speed -= 10;
        console.log("-", this.speed);
    }
    CarsDetails() {
        console.log(this.color);
        console.log(this.model);
        console.log(this.year);
    }
}
let Car = new car();
/* ------------------------------ //? Example 01 ----------------------------- */
class AirCondition {
    constructor() {
        this.color = "grey";
        this.tonus = 1.5;
        this.company = "wooerPoor";
        this.isOn = false;
        this.temperature = 24;
    }
    AcTurnOn(name) {
        this.isOn = true;
        console.log(`${name} is turnOn.... ${this.isOn}`);
    }
    increaseTem(name) {
        this.temperature++;
        console.log(`Ac ${name} temperature is ${this.temperature}`);
    }
    decreaseTem(name) {
        this.temperature--;
        console.log(`Ac ${name} temperature is ${this.temperature}`);
    }
    AcTurnOff(name) {
        this.isOn = false;
        console.log(`${name} is turnOff.... ${this.isOn}`);
    }
}
let AC1 = new AirCondition();
let AC2 = new AirCondition();
AC1.AcTurnOn("AC1");
AC2.AcTurnOn("AC2");
AC1.increaseTem("AC1");
console.log("AC2", AC2.temperature);
AC1.decreaseTem("AC1");
AC1.decreaseTem("AC1");
AC1.decreaseTem("AC1");
console.log("AC1", AC1.temperature);
/* ------------------------- // ? constructor in class ------------------------ */
class TV {
    //    use | initialized with this key word
    constructor(name, price, size) {
        this.company = name;
        this.price = price;
        this.size = size;
    }
    showDetails() {
        console.log(this.company);
        console.log(this.price);
        console.log(this.size);
    }
}
let sony = new TV("Sony", 12000, 32);
sony.showDetails();
let mi = new TV("MI", 10000, 43);
console.log(mi);
/* --------------------------- // ? asses modifiers --------------------------- */
// * types of  : 
/*
* public     : it's variable values are assessable and changeable of outside an the class
* private    : it's variable values are "NOT" changeable of outside an the class but it's cant "NOT" give asses with other class way "extends method"
* protected  : it's variable values are NOT changeable of outside an the class but it's cant give asses with other class way "extends method"
*/
/* ------------------------------ //  ? public ------------------------------ */
class laptops {
    constructor() {
        // ! also default set is public 
        this.name = "Hp";
        this.price = 7000000;
        this.offer = "5%";
        this.color = "blue"; //  default set is public 
    }
}
let Hp = new laptops();
console.log(Hp);
Hp.offer = "50%";
console.log(Hp);
/* ------------------------------ // ?  private ----------------------------- */
class shoes {
    constructor() {
        this.name = "Nike";
        // private price : number  = 12000000 ;
        // color : string = "red";
        this.off = "5%";
    }
    // we can  change value of private variable of inside of class 
    getOff() {
        this.off = "50%";
    }
}
class showDetails extends shoes {
    constructor() {
        super(...arguments);
        this.price = 12000000;
        this.color = "red";
        // private is  NOT allow to asses form base class value and change 
        // getExtOff () {
        //     this.off = "90%" // ! error
        // }
    }
}
let shoe1 = new showDetails();
// shoe1.off = "90%" //! it's throw a error
console.log(shoe1);
shoe1.color = "yellow";
shoe1.getOff();
console.log(shoe1);
/* ----------------------------- // ? protected ----------------------------- */
class bike {
    constructor() {
        this.name = "honda";
        this.price = 100000000;
        this.dic = "10%";
    }
}
class bikeColor extends bike {
    constructor() {
        super(...arguments);
        this.condition = true;
        this.color = "black";
    }
    // protected is allow to asses form base class value and change 
    getDisc() {
        this.dic = "30%";
    }
}
let B1 = new bikeColor();
console.log(B1);
// B1.name = "hero" //! error
B1.getDisc();
console.log(B1);
/* ------------------------- // ? readOnly properties ------------------------ */
// * readonly  : properties is set value on one time in class after set value it Can NOT changeable it Can Read readOnly
class user {
    constructor(name, email, _id) {
        this.name = name;
        this.email = email;
        this._id = _id; // it can set with fist time in constructor 
    }
}
let U1 = new user("jayan", "j@jd.com", "122");
console.log(U1);
U1.name = "JACK";
// U1._id = "J001"; // !it's not allow to change _id
console.log(U1);
let U2 = new user("it's_j", "j@jd.com", "JA122");
console.log(U2);
/* ----------------------- //? gater and seter method ----------------------- */
// ! syntax : get newName () :returnType { return this.variableName }
// * get use only for get values from class
// ! syntax : set newName (pramsName : type ) {this.variableName = prams }
// *  set use only for set new values from class
class mobile {
    constructor(name, price, color) {
        this.color = color;
        this.name = name;
        this.price = price;
    }
    get showName() {
        return this.name;
    }
    set newName(name) {
        this.name = name;
    }
}
let M1 = new mobile("vivo", 12000, "blue");
console.log(M1);
console.log(M1.showName); //? show only name
// ? it's set new name for mobile
M1.newName = "onePlus";
console.log(M1);
console.log(M1.showName); //? show only name
