// * show  insert Documents 
// ! syntax : db.collection.find()
// ? use db_json
// ? db.cars.find() 
// # show all cars Collections Documents

// ! syntax : db.collection.find({filter})
// ? db.cars.find({"modelYear" : 1900}) 
// # show all cars Documents with  modelYear : 1900

// ! syntax : db.collection.find({filter})
// ? db.cars.find({"modelYear" : 1900,"maker":"Audi"}) 
// # show all cars Documents with  modelYear : 1900 and "maker" is "Audi"