//! Syntax :- db.collections.aggregation([{ $aggregationMethod : {}},{ $aggregationMethod2 : {}}])
// ? use school_db

// * 01 => $match

// ! Syntax  :- db.collection.aggregate([{  $match : { Query01 , Query02 } }])

// ? db.students.aggregate([{  $match : { "grade" : "A" } }])

// ? db.students.aggregate([{  $match : { "marks.math" : {$lte : 70 } } }])

// * 02 => $count

// ! Syntax  :- db.collection.aggregate([{  $count : "newName" }])

// ? db.students.aggregate([{  $count : "ShowCount" }])
// # its 10
// ? db.teachers.aggregate([{  $count : "ShowCount" }])
// # its 3

// * 03 => $group

// ! 01 Syntax  :- db.collection.aggregate([{  $group : { _id : "$fieldName => ite Require" } }])
// * $accumulators :- [$sum , $avg , $push , $max , $min , $add , $multiply ]
// ! 02 Syntax  :- db.collection.aggregate([{  $group : { _id : "$fieldName => ite Require", newFiled :{ $accumulators : value } } }])

// Examples
// ? db.cars.aggregate([{$group : {_id : "$car_maker"}}])
// # this was make cars makers company's Group 
// Examples
// # make group of only 12 class students by age 
// ? db.students.aggregate([{$match : {class:12}},{$group : {_id : "$age",stuCount : {$sum : 1}}}])

// ! $sum
// ? db.cars.aggregate([ {$group : {_id : "$car_maker",showCount:{$sum : 1}}} ])
// # this was make cars makers company's Group and ShowCount show howMany time company was repeats

// ! $avg
// ? db.students.aggregate([ {$group : {_id : "$class",showCount:{$avg : "$age"}}} ])
// # this Command is first make group base on Class : 11 , 12 and than count average age of both class students 

// ? db.students.aggregate([ {$group : {_id : null ,showCount:{$avg : "$age"}}} ])
// # count average age of all Documents because of _id is Null  

// ! $push
// ? db.students.aggregate([ { $group : {_id : "$class" , names : {$push : "$name"}   }  } ])
// * this $push will show only One Filed at Time Names
// ? db.students.aggregate([ {$group : {_id : "$class" , students : { $push : {name:"$name",age:"$age"} } }} ])
// * this $push will show multiple Filed at Time (Names,age )

// ! "$$ROOT"
// ? db.students.aggregate([ { $group : {_id : "$class" , fullDoc : { $push : "$$ROOT" }}}])
// * this $push will show full Documents

// ! $min
// ? db.students.aggregate([ {$group : {_id : "$class" , minAge : {$min : "$age"} }} ])
// # this Command is first make group base on Class : 11 , 12 and than minimum Age of both class students 

// ! $max
// ? db.students.aggregate([ {$group : {_id : "$class" , minAge : {$max : "$age"} }} ])
// # this Command is first make group base on Class : 11 , 12 and than Maximum Age of both class students 


// * 04 => $limit

// ! Syntax  :- db.collection.aggregate([{  $limit : number }])
// ? use db_json
// ? db.cars.aggregate([ {$limit:10}])

// * 05 => $skip
// ! Syntax  :- db.collection.aggregate([{  $skip : number }])
// ? use db_json
// ? db.cars.aggregate([ {$skip:10}])

// ! example
// ? db.cars.aggregate([ {$skip:10},{$limit:10} ])

// ? use school_db
// ? db.students.aggregate([ {$limit:10},{$limit:5} ])
// # this command limit = 10  and skip = 5 than return Documents is 5 Only 


// * 06 => $sort
// ! Syntax  :- db.collection.aggregate([{  $sort : {"fieldName" : 1} }])
// ? use school_db
// ? db.students.aggregate([ {$sort :{"name" : 1}}])
// ? db.students.aggregate([ {$sort :{"name" : 1,"age":-1}} ])

// * 07 => $project
// ! Syntax  :- db.collection.aggregate([{  $project : {"field1" : 1,"field2":1} }])
// ? use school_db
// ? db.students.aggregate([ {$project :{"name" : 1}}])
// ? db.students.aggregate([ {$project :{"name" : 1,"age":1}} ])

// * 08 => $unwind 
// ! Syntax  :- db.collection.aggregate([{  $unwind : "$arrayFiledName" }])

// ? db_json
// ? db.employees.aggregate([{$match : { num_id:4}},{ $unwind : "$hobbies" }])
// # its iterate hobbies array and show individuality hobbies with same Documents 



// * 09 => lookup 
// # look is a join in mongoDB
/* 
! Syntax : 
db.collectionName(as A).aggregate([{
    $lookup : {
    from : "foreignCollectionName(as B)",
    localField:"currentCollectionFieldName(A)",
    foreignField :"foreignCollectionFieldName(B)",
    as : "newFiledName"
    }
}]) 
*/ 

// ? use school_db
// ? Example 
// ! LEFT JOIN
// * Whit $unwind It's Proforma LEFT JOIN
// db.students.aggregate([
//     {
//         $lookup : {
//             from : "teachers",
//             localField:"teacherId",
//             foreignField:"teacherId",
//             as : "teacherDetails"
//         }
//     }
// ])

// ! 01
// ? Example 
// ! INNER JOIN
// * With $unwind It's Proforma INNER JOIN
// db.students.aggregate([
//     {$sort : {	"studentId" : -1}},
//     {
//         $lookup : {
//             from : "teachers",
//             localField:"facultyId",
//             foreignField:"teacherId",
//             as : "teacherDetails"
//         }
//     }
//     ,{$unwind : "$teacherDetails" }
// ])

// ? Example 
// ! RIGHT JOIN
// db.teachers.aggregate([
//     {
//         $lookup : {
//             from : "students",
//             localField:"teacherId",
//             foreignField:"facultyId",
//             as : "studentsDetails"
//         }
//     }
// ])

// ? ======= paipiine :[{query}]
// db.teachers.aggregate([
//     {
//         $lookup : {
//             from : "students",
//             localField:"teacherId",
//             foreignField:"facultyId",
//             as : "studentsDetails",
//             pipeline:[{
//                 $project: {
//                     _id : 0,
//                     studentId : 1,
//                     name : 1,
//                     class : 1,
//                 }
//             }]
//         }
//     }
// ])


// ? ==============================================

// ! 02
// ? Example
// ? use db_json
// * Add Documents in cust Collections 
// ? {_id:101,"name":"John","email":"john@example.com"},
// ? {_id:102,"name":"Emily","email":"emily@example.com"},
// ? {_id:104,"name":"Jane","email":"jane@example.com"}

// ? db.cust.insertMany([{_id:101,"name":"John","email":"john@example.com"},
// ? {_id:102,"name":"Emily","email":"emily@example.com"},
// ? {_id:104,"name":"Jane","email":"jane@example.com"}])

// * Add Documents in orders Collections 
// ? {_id : 1,"order_number":"OR001","customer_id":101},
// ? {_id : 2,"order_number":"OR002","customer_id":102},
// ? {_id : 3,"order_number":"OR003","customer_id":103}

// ? db.orders.insertMany([{_id : 1,"order_number":"OR001","customer_id":101},
// ? {_id : 2,"order_number":"OR002","customer_id":102},
// ? {_id : 3,"order_number":"OR003","customer_id":103}])


// ? db.cust.find()
// ? db.orders.find()

// ? Example
// ! Left Join 
// db.cust.aggregate([ { $lookup: {
//       from: "orders",
//       localField: "_id",
//       foreignField: "customer_id",
//       as: "orderDetails"
//      }}])
     
// ? Example
// ! Right Join
// db.orders.aggregate([ { $lookup: {
//       from: "cust",
//       localField: "customer_id",
//       foreignField: "_id",
//       as: "customerDetails"
//      }}])
     
// ? Example
// ! Inner Join 
// db.orders.aggregate([ { $lookup: {
//       from: "cust",
//       localField: "customer_id",
//       foreignField: "_id",
//       as: "customerDetails"
//      }},
//      {$match: 
//         {$expr : { 
//             $gte:[ {$size : "$customerDetails"},1]
//         } 
//         }
//      } ])


