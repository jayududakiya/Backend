-- create db
create database users;

-- select users;
use users;

-- create table
create table students(firstName varchar(20) , lastName varchar(25) , age int ,city varchar(20) , maths float , english float , gujarati float);


-- add data 
insert into students value 
("jayan" , "dudakiya" , 23 , "surat" , 78.5 , 77 , 90),
("piyush", "suhagiya" , 38 , "rajkot" , 80 , 45 , 80),
("nikhil", "kalsariya" , 26 , "surat" , 60 , 55 , 70),
("akshy", "goti" , 20 , "amreli" , 50 , 75 , 78),
("sahil", "dudhat" , 22 , "surat" , 70 , 95 , 98),
("samit", "thummar" , 22 , "vadodara" , 55 , 75 , 38),
("raju", "mayti" , 18 , "mumbai" , 55 , 75 , 38),
("rahul", "kumar" , 18 , "deli" , 77 , 55 , 88),
("dhaval", "patoliya" , 23 , "mumbai" , 75 , 45 , 80),
("vivek", "kankotiya" , 21 , "rajkot" , 74 , 55 , 80);

-- update 
update students set city = "delhi" where firstName = "rahul";


-- and && OPERATOR 
select * from students where age > 20 and city = "surat";

-- or || OPERATOR 
select * from students where age > 20 or city = "surat";

-- Between (select between given range)
select * from students where english between 40 and 70;

-- In (matches any value in the list)
select * from students where city in ("rajkot","surat");


-- NOT (to negate the given condition)
select * from students where city not in ("rajkot","surat");

-- Limit Clause
-- Sets an upper limit on number of (tuples)rows to be returned
select * from students limit 3;
