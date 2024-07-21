// * create DataBase : "school_db"
// ? use school_db

// * create Collection In school_db : students
// ? db.createCollection("students")


// * insert Single Documents
// ! syntax : db.collectionName.insertOne({Doc})
// # insert One Documents At a Time
// example From : db_json/students.json
 
// ? db.students.insertOne({"name": "John Doe","age": 20,"email": "john.doe@example.com","grade": "A","class": 12,"marks": {"math": 90,"science": 85,"english": 88,"history": 92}})

    

// * insert Multiple Documents
// # insert Many Documents At a Time
// ! syntax : db.collectionName.insertMany([{Doc_01},{Doc_02},{Doc_03},....])
db.students.insertMany([
    {
        "name": "Jane Smith",
        "age": 22,
        "email": "jane.smith@example.com",
        "grade": "B",
        "class": 12,
        "rollNo": 102,
        "marks": {
          "math": 78,
          "science": 82,
          "english": 80,
          "history": 76
        }
      },
      {
        "name": "Michael Brown",
        "age": 21,
        "email": "michael.brown@example.com",
        "grade": "A",
        "class": 12,
        "rollNo": 103,
        "marks": {
          "math": 88,
          "science": 90,
          "english": 85,
          "history": 89
        }
    },
])



// * Order & unOrder
// ! {ordered : default is : "true" }
// ! syntax : db.collectionName.insertMany([{Doc_01},{Doc_02},{Doc_03},....] , {ordered : true})
// * with use when executing bulk write operation "ordered" and "unordered" determine the batch behavior It can Use In insertMany Documents Method IF any Documents with Duplicate than insertMany will stop InsertIng Documents 

// ? with true Conation it's insert line by line document and stop with not valid Documents
// ! Error in third Documents in this code after third document not add any documents it adds only the first two documents
db.students.insertMany([
    {
        "name": "Emily",
        "age": 19,
        "email": "emily.davis@example.com",
        "grade": "C",
        "class": 11,
        "rollNo": 104,
        "marks": {
          "math": 70,
          "science": 68,
          "english": 72,
          "history": 65
        }
      },
      {
        "name": "Chris",
        "age": 23,
        "email": "chris.wilson@example.com",
        "grade": "B",
        "class": 12,
        "rollNo": 105,
        "marks": {
          "math": 80,
          "science": 82,
          "english": 78,
          "history": 79
        }
      },
      {
        _id: ObjectId('669cc2a62c31236597c4e49c'),
        "name": "Jessica",
        "age": 20,
        "email": "jessica.taylor@example.com",
        "grade": "A",
        "class": 12,
        "rollNo": 106,
        "marks": {
          "math": 92,
          "science": 89,
          "english": 91,
          "history": 94
        }
      },
      {
        "name": "David",
        "age": 22,
        "email": "david.martinez@example.com",
        "grade": "C",
        "class": 11,
        "rollNo": 107,
        "marks": {
          "math": 65,
          "science": 70,
          "english": 68,
          "history": 66
        }
      },
      {
        "name": "Sarah",
        "age": 21,
        "email": "sarah.lee@example.com",
        "grade": "B",
        "class": 12,
        "rollNo": 108,
        "marks": {
          "math": 82,
          "science": 85,
          "english": 80,
          "history": 84
        }
      },
      {
        "name": "Daniel",
        "age": 19,
        "email": "daniel.clark@example.com",
        "grade": "A",
        "class": 11,
        "rollNo": 109,
        "marks": {
          "math": 90,
          "science": 88,
          "english": 87,
          "history": 92
        }
      },
      {
        "name": "Laura",
        "age": 23,
        "email": "laura.rodriguez@example.com",
        "grade": "C",
        "class": 11,
        "rollNo": 110,
        "marks": {
          "math": 68,
          "science": 70,
          "english": 72,
          "history": 65
        }
      }
],{ordered : true})

// ? with false Conation it's insert first all the valid Documents and Show last documents with Error
// ! Error in first two Documents in this code after third documents add all the documents then it shows error
db.students.insertMany([
    {
        _id: ObjectId('669cc2a62c31236597c4e49c'),
        "name": "Emily",
        "age": 19,
        "email": "emily.davis@example.com",
        "grade": "C",
        "class": 11,
        "rollNo": 104,
        "marks": {
          "math": 70,
          "science": 68,
          "english": 72,
          "history": 65
        }
      },
      {
        _id: ObjectId('669cc2a62c31236597c4e49c'),
        "name": "Chris",
        "age": 23,
        "email": "chris.wilson@example.com",
        "grade": "B",
        "class": 12,
        "rollNo": 105,
        "marks": {
          "math": 80,
          "science": 82,
          "english": 78,
          "history": 79
        }
      },
      {
        "name": "Jessica",
        "age": 20,
        "email": "jessica.taylor@example.com",
        "grade": "A",
        "class": 12,
        "rollNo": 106,
        "marks": {
          "math": 92,
          "science": 89,
          "english": 91,
          "history": 94
        }
      },
      {
        "name": "David",
        "age": 22,
        "email": "david.martinez@example.com",
        "grade": "C",
        "class": 11,
        "rollNo": 107,
        "marks": {
          "math": 65,
          "science": 70,
          "english": 68,
          "history": 66
        }
      },
      {
        "name": "Sarah",
        "age": 21,
        "email": "sarah.lee@example.com",
        "grade": "B",
        "class": 12,
        "rollNo": 108,
        "marks": {
          "math": 82,
          "science": 85,
          "english": 80,
          "history": 84
        }
      },
      {
        "name": "Daniel",
        "age": 19,
        "email": "daniel.clark@example.com",
        "grade": "A",
        "class": 11,
        "rollNo": 109,
        "marks": {
          "math": 90,
          "science": 88,
          "english": 87,
          "history": 92
        }
      },
      {
        "name": "Laura",
        "age": 23,
        "email": "laura.rodriguez@example.com",
        "grade": "C",
        "class": 11,
        "rollNo": 110,
        "marks": {
          "math": 68,
          "science": 70,
          "english": 72,
          "history": 65
        }
      }
],{ordered : false})