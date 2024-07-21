//! array Method in MongoDB 

// ? use db_json 
// ? db.singers.find()
// * $push 
// * push method is only Add one element at time 
// * with updateOne its push in one Documents only one time 
// ! syntax : db.collectionName.updateOne({filter},{ $push :  {"arrayFiledName" : "val"  } })
// ? db.singers.updateOne({"firstName" : "Dua"},{$push : {instruments:'Piano'} })
// ? db.singers.updateOne({"firstName" : "Dua"},{$push : {instruments:'Guitar'} })
// ? db.employees.updateOne({"num_id": 22},{$push : {experience:  {company: 'TCS Enterprises',duration: 1.5,role: 'Web Developer'}  } })

// * $pop
// * pop method is only remove one element at time 
// * with updateOne its push in one Documents only one time 

// ? 1 FOR REMOVE ELEMENT FROM LAST INDEX
// ? -1 FOR REMOVE ELEMENT FROM FIRST INDEX

// ! syntax : db.collectionName.updateOne({filter},{ $pop :  {"arrayFiledName" : 1 } })
// ? db.singers.updateOne({"firstName" : "Dua"},{$pop : {instruments:1} })
// ? db.singers.updateOne({"firstName" : "Bruno"},{$pop : {instruments:-1} })

// * $addToSet
// * addToSet works as same Push method but addToSet only add this Element that was not Added before or does not exist in the array
// * with updateOne its add in one Documents only one time 
// ! syntax : db.collectionName.updateOne({filter},{ $addToSet :  {"arrayFiledName" : "val"  } })
// ? db.singers.updateMany({},{$addToSet : {instruments:'Piano'} })


// * $pull
// * $pull works as same $pop method but $pull only remove this Element that was match with give Conditions
// ! syntax : db.collectionName.updateOne({filter},{ $pull :  {Conditions} })
// ? db.singers.updateMany({},{$pull : {instruments:'Guitar'} })
// # its remove all the Guitar from all documents 


// 


// {
//   _id: ObjectId('669cdbf621ec6812e843a97b'),
//   num_id: 22,
//   name: 'Oliver Hernandez',
//   age: 31,
//   gender: 'Male',
//   skills: [ 'PHP', 'Laravel', 'JavaScript', 'React.js' ],
//   hobbies: [ 'Cooking', 'Playing Soccer', 'Travelling' ],
//   experience: [
//     {
//       company: 'Web Solutions Ltd',
//       duration: 5,
//       role: 'Full Stack Developer'
//     },
//     {
//       company: 'Digital Creations Inc',
//       duration: 2,
//       role: 'Backend Developer'
//     },
//     {
//       company: 'Tech Enterprises',
//       duration: 4,
//       role: 'Lead Developer'
//     },
//     {
//       company: 'TCS Enterprises',
//       duration: 1.5,
//       role: 'Web Developer'
//     }
//   ],
//   education: {
//     degree: 'Master of Computer Science',
//     school: 'University of KLM'
//   }
// }

// ? db.employees.find({ "experience" : {$elemMatch: {  	"duration" : {$lt : 2}  } } })

// * update first Match 
// ? db.employees.updateMany({ "experience" : {$elemMatch: {  	"duration" : {$lt : 2}  } } },{$set :  { "experience.$.firstMatch" :true} })


// * update all match or Not match 
// ? db.employees.updateMany({ "experience" : {$elemMatch: {  	"duration" : {$lt : 2}  } } }, {$set :  { "experience.$[].firstMatch" :true} })

// ! update all Match also all match quey work with arrayFilters Only 
// ? db.employees.updateMany({ "experience.duration": { $lt: 2 } },{ $set: { "experience.$[e].allMatch": true } },{ arrayFilters: [{ "e.duration": { $lt: 2 } }] });

// ? db.employees.updateMany({ "experience" : {$elemMatch: {"duration" : {$lt : 2}  } } },{$set : {"experience.$[e].is_Selected" :true}},{ arrayFilters: [{ "e.duration": { $lt: 2 } }] })


// db.employees.find({"experience.duration" : {$lt : 2} })	