// ? Import Data in MongoDB with deferent Whys 
// ! # Why 01
// ! step 01 => (ctrl + D) & (ctrl + C) to exit From mongosh
// * if documents are not cover with Array {},{}

// ! Syntax : mongoimport "filepath" -d "databaseName" -c "collectionName"  
// * import : Customers Data
// ? mongoimport D:\SQ_Class\Backend\MongoDB\db_json\singer.json -d db_json -c singers

// * if documents are cover with Array [{},{}]
// ! Syntax : mongoimport "filepath" -d "databaseName" -c "collectionName"  --jsonArray

// * import : Cars Data
// ? mongoimport D:\SQ_Class\Backend\MongoDB\db_json\cars.json -d localStorageData -c cars --jsonArray

// ! # Why 02

// ! this only for JSON file data 
// ! step 01  => open terminal in file location and run commands 
// mongoimport --db "databaseName" --collection "collectionName" --file "fileName.ext" --jsonArray
// ? mongoimport --db bookstore --collection books --file books.json --jsonArray

// * in db_json
// ? mongoimport --db db_json --collection movies --file moviesData.json --jsonArray
// ? mongoimport --db db_json --collection mobiles --file mobilesData.json --jsonArray
// ? mongoimport --db db_json --collection employees --file employeesData.json --jsonArray


// ! # Why 03

// ! step 01  => open terminal in file location and run commands 
// ! this only for JS file data 

// ! step 02 => 
//? connect to mongosh 

// ! step 03 =>
//* use dataBase 
//? use db_json 

// ! step 04 => 
//* load('fileName.ext')
// ? load('usersData.js')