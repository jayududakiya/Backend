// * crate OR add Date in Documents

// ! Syntax :- db.collection.updateOne({filter},{$set : {"filedName" : ISODate("YYYY-MM-DDTHH:MM:SS.mmsZ") }})
// ! T : time 
// ! Z : timeZone

// ? EXAMPLE

// ? db.kids.updateOne({_id:106},{$set : { "dob": ISODate("2011-02-10") } })
// ? db.kids.updateOne({_id:107},{$set : {"dob": ISODate("2010-09-10T18:21:22Z")}})
// ? db.kids.updateOne({_id:108}, {$set :{"dob":ISODate("2013-03-15T12:44Z")}})
// ? db.kids.updateOne({_id:109},{$set : {"dob":ISODate("2011-08-14T10:11:33.675Z")}})
// ? db.kids.updateOne({_id:110},{$set:{"dob":ISODate("2011-07-31T01:21:18+05:00")}})
// ? db.kids.updateOne({_id:111},{$set : {"name":"jack","age":23,"dob":ISODate("2001-11-21T09:30:24Z")}},{upsert:true})

// ? db.kids.find({"dob":{$gte:ISODate("2012-12-12")}})

// * project with Date
// ! Aggregation on date 
// make group by YEAR
// ? _id:"$dob" WRONG!!
// ? db.kids.aggregate([ {$group:{_id:{$year : "$dob"},names:{$push:"$name"} }} ])
// ? db.kids.aggregate([ {$group:{_id:{$year : "$dob"},names:{$push:"$name"} }} ])

// ? ISODate OPERATORS
// ? ISODate OPs :- [$dayOfMonth , $month , $dayOfYear, $hours , $minutes , $seconds , $millisecond]
// ! Syntax :- db.collection.aggregate([{$project : { newFiledName : { $dayOfMonth: "$dateFie1d"}}}])

// ? EXAMPLE
// ? 01  db.kids.aggregate([ {$match:{_id:111}},{$project : { dayOfMonth : {$dayOfMonth : "$dob"} } } ])
// * day is : 21
// ? 02  db.kids.aggregate([ {$match:{_id:111}},{$project : { Month : {$month : "$dob"} } } ])
// * Month is : 11
// ? 03  db.kids.aggregate([ {$match:{_id:111}},{$project : { Year : {$dayOfYear : "$dob"} } } ])
// * Year is : 2001


// * show all 
// ? db.kids.aggregate([{$match:{_id:111}},{$project:{dayOfMonth:{$dayOfMonth:"$dob"} ,month:{$month: "$dob"},dayOfYear:{$dayOfYear: "$dob"},hour:{$hour: "$dob"},ms: {$millisecond:"$dob"}}}])


// Formate Date 
// ! Syntax :----------------------------------------$dateToString:{format:"%d/%m/%Y/ %H:%M:%S",date:"$fieldName"}
// ? db.kids.aggregate([{$project:{_id:0,name:1,dob:{$dateToString :{format:"%d/%m/%Y %H:%M:%S",date:"$dob"}}}}])