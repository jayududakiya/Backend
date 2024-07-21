// * update Single Documents
// ! syntax : db.collectionName.updateOne( {filter} , {$set : {filed : newVal }})
// # update One Documents At a Time
// ? db.students.updateOne({"name":"Laura"} ,{$set: {"age":18}})
// ? db.students.updateOne({"name":"Laura"} ,{$set: {idCards : {"hasPanCard" : true,"hasAdhaarCard" : true,} }})

// * update multiple Documents
// ! syntax : db.collectionName.updateMany( {filter} , {$set : {filed : newVal }})
// # update Many Documents At a Time

// db.students.updateMany({} ,{$set:
//     {
//      idCards : {
//         "hasPanCard" : true,
//         "hasAdhaarCard" : true,
//      }
//     }
// })

// db.students.updateMany({"age":{$lt : 20}} ,{$set:
//     {
//      idCards : {
//         "hasPanCard" : false,
//         "hasAdhaarCard" : true,
//      }
//     }
// })