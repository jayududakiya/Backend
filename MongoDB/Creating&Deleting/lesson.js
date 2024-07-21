// * Creating DataBase
// ! use dataBaseName
// ? use latest_db

// than switched latest_db

// * Creating Collection In dataBase
// ! db.createCollection("CollectionName")
// ? db.createCollection("students")


// * Deleting DataBase

// * [01] Why
// ! db.dropDatabase('')
// # This Command Will Delete Current Selected Database 
// ? db.dropDatabase() 

// * [02] Why
// ! db.dropDatabase('DatabaseName')
// # This Command Will Delete Given Name in bracket's Database 
// ? db.dropDatabase("latest_db") 


// * Deleting Collections

// ! db.collectionName.drop()
// # This Command Will Delete Collections
// ! db.students.drop()