-- Command to enter into mysql:
\sql

-- Connect mysql:
\connect root@localhost:3306
password:Admin@123


-- show all databases command:
show databases;

-- for create New DataBase 
-- create database dbName:
create database students;

-- for use Particular Database 
-- use dbName:
use students;

-- for Delete database command:
-- drop databaseName ;
drop database students;    

--for show use database all tables;
show tables;

-- for create new table in dataBase 
-- create new table tbName(colum's):
create table user(firstname varchar(30),lastname varchar(30),email varchar(50),gender varcar(10),mobileNo int);

-- for describe or show perticular table(row and column)
describe user; 
desc user;