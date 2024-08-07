/* -------------------------- // TODO : interfaces -------------------------- */
// what is look like user you are gate 
function getUser(user) {
    user.Name.toUpperCase(),
        user.age.toFixed(),
        user.email.includes("@") ? "OK" : "ERROR";
}
function getFruit(fruit) {
    fruit.color;
    fruit.name;
    fruit.price;
    var x = {
        N: fruit.name,
        C: fruit.color,
        P: fruit.price
    };
    return x;
}
// newFood is inherited name,price and on properties is color
function getFood(food) {
    // food.color   
    // food.name   
    // food.price   
    var FOOD = {
        color: food.color,
        name: food.name,
        price: food.price
    };
    return FOOD;
}
console.log(getFood({ color: "red", name: "H", price: 112 }));
