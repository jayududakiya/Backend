--Insert data in db
insert into user(firstName, lastName, age) values ("Jayan","Dudakiya",23);

-- multiple insert data in db
insert into user(firstName, lastName, age) values 
("Nikhil","klasariya",28),
("Piyush","suhagiya",38),
("sahil","dudhat",22);

-- Insert Data in  db whitOut using keys work as sam 
insert into user values("Akshy","Goti",18);

-- Insert Data with custom colum
insert into user(firstName,lastName) values("Samit","Thuumar");
insert into user(firstName,age) values("Raju",18);


-- Read data 

-- Select all columns
select * from user;

-- use Form Print single colum
-- select columName form TableName
   select firstName from user;

-- use Form Print Multiple colum
-- select columName,columName form TableName
   select firstName, lastName from user;

-- to change colum name in to print only 
-- [this change name firstName to FullName]
select firstName as "FullName" , age from user;
-- [this change name firstName to Hello]
select firstName "Hello",age from user;

-- For Repeat or Re-Print Any Colum 
-- [age : colum print To Time here after print full table Print ]
select *,age from user;
-- [age , firstName :  colum print To Time here after print full table Print ]
select *,age,firstName from user;

-- this use to combine to colum and print 
select concat(firstName," ",lastName) as "FullName", age from user;
