// ! Logical operators

// ! use db_json

// * $and: [{condition 1 },{condition 2 }]
// ? db.cars.find({$and : [{"car_maker" : "Honda"} ,{"price" : '$89817.65'}] })
 
// * $or: [{condition 1 },{condition 2 }]
// ? db.cars.find({$or : [{"car_maker" : "Audi"} ,{"price" : '$89817.65'}] })
// ? db.cars.find({$or : [{"car_maker" : "Audi"} ,{"price" : {$gte : '$50000'}}] })

// * $nor: [{condition 1 },{condition 2 }]
// ? db.cars.find({$nor : [{"car_maker" : "Honda"} ,{"price" : '$89817.65'}] })
// ? db.cars.find({$nor : [{"car_maker" : "Infiniti"},{"model_year" : '2000'}] }).sort({car_maker : 1})
// ? db.cars.find({"car_maker":"Infiniti"})
// ? db.cars.find({$nor : [ {"car_maker" : "Audi"},{"price" : { $gte : '$50000' } }] })

// * {"filed" : {$not: "value" }
// ? db.cars.find({"model_year":{$not :{$eq : 1992}}})