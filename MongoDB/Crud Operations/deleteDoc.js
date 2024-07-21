// * Delete Single Documents
// ! syntax : db.collectionName.deleteOne({filter})
// # delete One Documents At a Time
// ? db.students.deleteOne({_id : ObjectId('669ccdc92c31236597c4e4ba')})
// ? db.students.deleteOne({"studentId": 18})

// * Delete Multiple Documents
// ! syntax : db.collectionName.deleteMany({filter})
// # delete Many Documents At a Time
// ? db.students.deleteMany({"studentId": 110})


// * Deleting Filed In MongoDB
// ! syntax : db.collectionName.updateOne({filter},{$unset : { filedName : 1 } })
// ? db.students.updateOne({"studentId": 110} , {  $unset : { "gender" : 1} })
// ? db.students.updateMany({} , {  $unset : { "gender" : 1} })
// * Remove Gender Filed From Documents

// * Renaming Filed In MongoDB
// ! syntax : db.collectionName.updateOne({filter},{$rename : { oldFiledName : "newFiledName" } })
// * for One
// ? db.students.updateOne({"studentId": 110} ,{$rename : { rollNumber : "rollNo" } })
// * for Many
// ? db.students.updateMany({} ,{$rename : { rollNumber : "rollNo" } })
// * Rename rollNumber Filed From rollNo
