// ! Elements Operators 
// ? use db_json

// $exists

// * db.collectionName.find({"filedName" : {$exists : true } , { condition } }) 

// ! SHOW ALL THE DOCUMENTS 
// ? db.users.find({'version' : {$exists: true}}) 

// ! show a documents and Run next query
// ? db.users.find({'version' : {$exists: true} , 'version' : {$gt : 6}})

// ? use bookStore 

// ! show a documents and Run next query
// ? db.books.find({'author' : {$exists: true} , 'author' : {$eq : "Unknown"}}) 

// ! NOT show a documents and NOT Run next query
// ? db.books.find({'name' : {$exists: true} , 'author' : {$eq : "Unknown"}}) 

// ! show a documents and  Run next query
// ? db.books.find({'name' : {$exists: false} , "name" : {$eq : "Unknown"}}) 

//$type

// ? use school_db

// ? Name    :  Number   =  Alias
// * Numbers :    16     =  "int" 
// * String  :    2      =  "string" 
// * Object  :    3      =  "object" 
// * Array   :    4      =  "array" 
// * Boolean :    8      =  "bool" 
// * Date    :    9      =  "date" 
// * Null    :    10     =  "null" 
// * TimeStamp :  17     =  "timestamp" 

// ? db.students.find({"class" : {$type :[16,2,8]}})
// ? db.students.find({"div" : {$type : 2}})

// ? db.students.find({"class" : {$type : "int"}}) 
// ! Both are Show "int" == 16 same 
// ? db.students.find({"class" : {$type : 16 }}) 

// ? use db_json

// * $size
// ? db.movies.find({})
// ? db.movies.find({"additionalInfo" : {$size : 3}})




