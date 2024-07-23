// * DATATYPES 

// text  : string
// boolean : true / false
// number : integr / numberlong 32bit  / numberdecimal 64bit
// objectId : defualt
// Array : []
// object : {}
// ISOdate : new Date()
// timestamp :  new TimeStamp()
// embedDocumnet ( nestedDocuments / elements ): { "" : [{},{},{}.. ] } 
// ! Example 

// ? db.newusers.insertOne({ "name": "YouTube", "isFunded": true, "funding": 123786789, "employees": [{ "name": "maharaja", age: 48 }, { "name": "rajesh", age: 57 }], "foundedOn": new Date(), "foundedOnTimestamp": new Timestamp() })


// ? db.newusers.find()

// for check data type 
// ! snytax : type db.collection.findOne().fieldName
 
// * Example 
// ? typeof db.newusers.findOne().foundedOnTimestamp
// ? typeof db.newusers.findOne().name
// ? typeof db.newusers.findOne().isFunded


// * validationse

// set Validation

// db.createCollection('newBooks',
// {
//     validator:{
//         $jsonSchema: {
//           required: [ "name","price"],
//           properties: {
//              name: {
//                 bsonType: "string",
//                 description: "must be a string and is required"
//              },
//              price: {
//                 bsonType: "number",
//                 description: "must be a number and is required"
//              }
//           }
//         }
//     },
//     validationAction : "error"
// })

// Example
// db.newBooks.insertOne({"name":"ABC",price :200})
// db.newBooks.insertOne({"name":"XYZ",price :400.30,"author":"jhon"})

// change/modefiy Validtion  Validation

// db.runCommand( {
//     collMod : "newBooks",
//     validator : {
//         $jsonSchema: {
//             required: ["name","price","authors"],
//             properties : {
//                 name : {
//                     bsonType : "string",
//                     description : "must be a string and required"
//                 },
//                 price : {
//                     bsonType : "number",
//                     description : "must be a number and required"
//                 },
//                 authors : {
//                     bsonType : "array",
//                     description: "must be a array and required",
//                     items :{
//                         bsonType : "object",
//                         required : ["name","email"],
//                         properties : {
//                             name:{
//                                 bsonType : "string",
//                                 description : "must be a string and required"
//                             },
//                             email:{
//                                 bsonType : "string",
//                                 description : "must be a string and required"
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     validationAction : "error"
// } )

// ! EXAMPLE 
// db.newBooks.insertOne({"name":"DFC",price :40.30,"authors":[{"jhon","jhon@gmail"}]}) // show db.adminCommand( { getParameter: 1, featureCompatibilityVersion: 1 } )

// this was valid 
// db.newBooks.insertOne({"name":"DFC",price :40.30,"authors":[{"name":"jhon","email":"jhon@gmail"}]})

// db.newBooks.find()



// * write concern in insert Oprations

// ! syntax : db.collection.indertOne({inderDocumnet},{ writConcern :{ w: <value> [1/0], j: <boolean> [true/false], wtimeout: <number> [millseconds] }})

// ? the "w" option to request acknowledgment that the write operation has propagated to a specified number of mongod instances or to mongod instances with specified tags.

// ? the "j" option to request acknowledgment that the write operation has been written to the on-disk journal, and

// ? the "wtimeout" option to specify a time limit to prevent write operations from blocking indefinitely

// * examples

// db.newBooks.insertOne( {"name" : "UFC",
// 	"price" : 50.3,
// 	"authors" :[
// 		{
// 			"name" : "j",
// 			"email" : "j@gmail"
// 		}
// ]})

// {writeConcern : {w : num , j : bool , wtimeout : num/time} }
// db.newBooks.insertOne( {"name" : "FTG",
// 	"price" : 77.3,
// 	"authors" :[
// 		{
// 			"name" : "x",
// 			"email" : "x@gmail"
// 		}
// ]},{writeConcern : {w:0}  })
// db.newBooks.insertOne( {"name" : "TG",
// 	"price" : 7.3,
// 	"authors" :[
// 		{
// 			"name" : "G",
// 			"email" : "G@gmail"
// 		}
// ]},{writeConcern : {w:0 , j : true }  })

// db.newBooks.insertOne( {"name" : "GG",
// 	"price" : 7.3,
// 	"authors" :[
// 		{
// 			"name" : "GG",
// 			"email" : "GG@gmail"
// 		}
// ]},{writeConcern : {w:0 , j : true ,wtimeout : 1000} })



// db.newBooks.find()


// update Opratore with
// $inc:  opratore 

// db.users.find().limit(12)

// db.users.updateMany({},{$inc : {"version" : 2 }})

// $min:  opratore 
// if set value lessert than existing value than work only

// current version is  : 5.5
// db.users.updateOne({"name" : "Mark Schembri"},{$min:{"version" : 3.2}})

// current version is  : 3.2

// db.users.updateOne({"name" : "Mark Schembri"},{$min:{"version" : 6.2}})
// this is not set gretor than value 

// $max:  opratore 
// if set value gretore than existing value than work only

// current version is  : 3.2
// db.users.updateOne({"name" : "Mark Schembri"},{$max:{"version" : 5.5}})

// current version is  : 5.5

// db.users.updateOne({"name" : "Mark Schembri"},{$max:{"version" : 3.2}})
// this is not set gretor than value 

db.users.find({"name" : "Mark Schembri"})












