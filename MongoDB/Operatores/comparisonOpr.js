// ! compression operators

// ! use db_json

// * $eq
// ? db.movies.find({"additionalInfo.rating":"PG-13"})
// ? db.movies.find({"price" : {$eq : "$270.25"}})

// * $ne
// ? db.movies.find({"price" : {$ne :"$270.25"}})

// * $gt
// ? db.movies.find({"price" : {$gt : "$270.25"}})
// ? db.movies.find({"bookSites" : {$gt : 9}})

// * $gte
// ? db.movies.find({"price" : {$gte : "$270.25"}})
// ? db.movies.find({"bookSites" : {$gte : 9}})

// * $lte
// ? db.movies.find({"bookSites" : {$lte : 9}})
// ? db.movies.find({"price" : {$lte : "$270.25"}})

// * $lt
// ? db.movies.find({"bookSites" : {$lt : 9}})
// ? db.movies.find({"price" : {$lt : "$270.25"}})

// * $in : []
// ? db.movies.find({"bookSites" : {$in : [3,10,20]}})
// ? db.movies.find({"cast" : {$in : ["Ryan Gosling","Rachel McAdams"]}})

// * $nin : []
// ? db.movies.find({"bookSites" : {$nin : [3,10,20]}})
// ? db.movies.find({"cast" : {$nin : ["Ryan Gosling","Rachel McAdams"]}})


 
 
 
 
 
 
 
 
 
 
 
 