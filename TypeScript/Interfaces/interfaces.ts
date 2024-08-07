/* -------------------------- // TODO : interfaces -------------------------- */

//! syntax  : interface INTERFACE_NAME {}
// ! use mostly with function as object 

// ! interface is a give us shape of class and object 

/* -------------------------------------------------------------------------- */
/*                          // ? example 01                                   */
/* -------------------------------------------------------------------------- */

interface USER {
    Name : string,
    email : string,
    age : number
}

// what is look like user you are gate 
function getUser (user : USER) {
    user.Name.toUpperCase(),
    user.age.toFixed(),
    user.email.includes("@") ? "OK" : "ERROR"
}


/* ----------------------------------- //* multiple interface with same name ----------------------------------- */
/* -------------------------------------------------------------------------- */
/*     //? with same name of interface is are marge                           */
/* -------------------------------------------------------------------------- */

interface fruits {
    name : string,
    price : number
}

interface fruits {
    color : string
}

function getFruit (fruit : fruits) {
    fruit.color;   
    fruit.name;
    fruit.price;

    let x = {
        N : fruit.name,
        C : fruit.color,
        P : fruit.price
    }
    return x 
}


/* ----------------------------------- //* extends IN interface  ----------------------------------- */
/* -------------------------------------------------------------------------- */
/* //? with extends method one interface is inherited properties of other interface */
/* -------------------------------------------------------------------------- */

interface Food {
    name : string ,
    price : number
}

interface newFood extends Food {
    color : string
}

// newFood is inherited name,price and on properties is color

function getFood (food : newFood) {
    // food.color   
    // food.name   
    // food.price   
    let FOOD : newFood = {
        color : food.color ,
        name : food.name,
        price : food.price

    }
    return FOOD
}

console.log(getFood({color : "red" , name : "H" , price : 112}))
