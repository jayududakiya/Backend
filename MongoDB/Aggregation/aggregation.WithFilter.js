// * FIND()
// ! Syntax :- db.collection.find()
// * show all Documents 
// ? use db_json
// ? db.cars.find()

// * show all Documents with Matching Query
// ? db.books.find({ "car_maker" :'Chevrolet'})

// * LIMIT()
// ! Syntax :- db.collection.find().limit(Number)
// * show first 4 Documents
// ? use db_json
// ? db.cars.find({"model_year":2000}).limit(4)

// * show first 10 Documents
// ? use bookStore
// ? db.books.find({"language": 'English'}).limit(10)


// * SKIP()
// ! Syntax :- db.collection.find().skip(Number)

// * skip first 4 Documents and show reaming all
// ? use db_json
// ? db.cars.find({"model_year":2000}).skip(4)

// * skip first 20 Documents and show reaming all
// ? use bookStore
// ? db.books.find().skip(20)
// Example 
// ? db.books.find().skip(20).limit(20)

// * SORT()
// Ascending
// ! Syntax :- db.collection.find().sort({"fieldName":1})
// Descending
// ! Syntax :- db.collection.find().sort({"fieldName":-1})

// * Example : 1
// ? use db_json
// ? db.cars.find().sort({car_maker:1})
// * Example : 2
// ? use bookStore
// ? db.books.find().sort({country:1, year: -1})



// ? db.books.find().skip(20).limit(20).sort({country:1})
// => // ? db.books.find().skip(20).limit(20).sort({country:1}).count()