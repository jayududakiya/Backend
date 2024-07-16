SELECT * FROM  customers;

-- GROUP BY
SELECT city FROM  customers GROUP BY city;
SELECT country , count(country) as "MEMBERS" FROM  customers GROUP BY country ORDER BY country;
SELECT postalCode , count(postalCode) as "coed" FROM customers GROUP BY postalCode ORDER BY postalCode desc;

-- CONCAT IN READING;
SELECT concat(contactFirstName ,"  ", contactLastName)  AS "FULL NAME" FROM customers;

SELECT count(country) FROM customers ;

SELECT * FROM customers ORDER BY country,state DESC , city ASC;

-- LIKE  ( (%)  (_) ) 
SELECT country FROM customers WHERE country LIKE "sp%";
SELECT country FROM customers WHERE country LIKE "%d";
SELECT country FROM customers WHERE country LIKE "N%D";
SELECT country FROM customers WHERE country LIKE "%z%";
SELECT country FROM customers WHERE country LIKE "_W%";
SELECT country FROM customers WHERE country LIKE "%l____";
SELECT country FROM customers WHERE country LIKE "_____";

-- DISTINCT
SELECT DISTINCT country FROM customers ORDER BY country;

-- LIMIT
SELECT * FROM customers LIMIT 10 , 20 ;

-- CREATE TABLE 
CREATE TABLE users (
    id INT AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(40),
    age INT,
    mobileNo INT
);