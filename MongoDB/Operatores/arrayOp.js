// * $all AND  $elemMatch 

// * $all

// ! Syntax : db.collectionName.find({ "filedName" : { $all : ["query01","query02",...] } })
// # return only those objects that include both values of the inside array

// ? use db_json 

// ? db.employees.find({"experience.role" : {$all : ["Backend Developer", "Full Stack Developer"]}})

// ? use school_db

// ? db.teaches.find({"hobbies":{$all :["cooking","writing"]}})

// $elemMatch

// ? use db_json

db.employees.find({  experience : { $elemMatch : {
    role: 'Backend Developer'
} } })
// show 21 Documents

db.employees.find({  experience : { $elemMatch : {
    "duration": {$lte : 2} 
} } })

// show 23 Documents

// ! return only exact match elements inside of the array of an object field
db.employees.find({  experience : { $elemMatch : {
    company: 'Digital Creations Inc',
    duration: 2,
    role: 'Backend Developer'
} } })

// show 11 Documents
