// * create database "schoolData"
// ! use schoolData

// * only create this students collection
// ! db.createCollection('students')

// * with insertOne()
//? Add Single Documents

db.students.insertOne({
  firstName: "jayan",
  lastName: "dudakiya",
  rollNo: 21,
  class: 12,
  div: "S",
});

db.students.insertOne({
    firstName: "ram",
    lastName: "sharma",
    rollNo: 24,
    class: 12,
    div: "S",
});

// * with insertMany()
//? Add Multiple Documents

db.students.insertMany([
  {
    firstName: "Ram",
    lastName: "Sharma",
    rollNo: 24,
    class: 12,
    div: "S",
  },
  {
    firstName: "Sita",
    lastName: "Verma",
    rollNo: 12,
    class: 11,
    div: "A",
  },
  {
    firstName: "Aryan",
    lastName: "Patel",
    rollNo: 30,
    class: 10,
    div: "B",
  },
  {
    firstName: "Neha",
    lastName: "Gupta",
    rollNo: 8,
    class: 9,
    div: "C",
  },
]);


//! Add Multiple Documents WithOut Creating Collection
// * Direct add Document

db.teachers.insertMany([
  {
    firstName: "John",
    lastName: "Doe",
    contact: {
      email: "john.doe@example.com",
      phone: "555-1234",
    },
    dob: "1975-08-15",
    subjectsTaught: ["Mathematics", "Physics"],
    yearsOfExperience: 15,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    contact: {
      phone: "555-5678",
    },
    dob: "1982-11-22",
    subjectsTaught: "English",
    address: {
      street: "456 Oak St",
      city: "Springfield",
      state: "IL",
      postalCode: "62702",
    },
    yearsOfExperience: 12,
  },
  {
    firstName: "Mary",
    lastName: "Johnson",
    phone: "555-8765",
    dob: "1990-05-10",
    subjectsTaught: ["Biology", "Chemistry"],
  },
  {
    firstName: "James",
    lastName: "Brown",
    contact: {
      email: "james.brown@example.com",
      phone: "555-4321",
    },
    dob: "1985-03-30",
    subjectsTaught: ["Computer Science", "Mathematics"],
    address: {
      street: "321 Elm St",
      city: "Springfield",
      state: "IL",
      postalCode: "62703",
    },
    yearsOfExperience: 10,
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    subjectsTaught: ["Art", "Music"],
    yearsOfExperience: 5,
  },
]);

//! Add Single Documents With out creating collection
// * Direct add Document

db.singer.insertOne({
  firstName: "Taylor",
  lastName: "Swift",
  email: "taylor.swift@musicworld.com",
  dob: "1989-12-13",
  instruments: ["Vocals", "Guitar"],
  genres: ["Pop", "Country", "Rock"],
  activeYears: 18,
});

//! Add Single Documents With out creating collection
// * Direct add Document

//! use newData

db.Hello.insertOne({
    "movies" : {
        "new" : "Pk",
        "old" : "sui-dhaga",
        "fresh":"sultan"
    }
})


// ? reading method in mongoDB 
// * find() & findOne()


// ? show All the students Documents
db.students.find()

// ? show Only First Index OF the students Documents
db.students.findOne()

// * Query  Object 
// ! Collection Name : "students"
db.students.find({"class" : 12 , "firstName" : "Ram"})
db.students.findOne({"class" : 12})

// ! Collection Name : "teachers"
db.teachers.find({"yearsOfExperience" : 12})
db.teachers.findOne({"yearsOfExperience" : 12})


// Projection
db.teachers.find({firstName : 1 , lastName : 1 , subjectsTaught : 1 })
db.teachers.find({firstName : 1 , lastName : 1 , subjectsTaught : 1 , _id : 0})
