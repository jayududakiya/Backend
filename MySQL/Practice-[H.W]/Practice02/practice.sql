-- 1. Fetch & display all the employee details
SELECT * FROM employees;

-- 2. Fetch & display employee details for the employees having job Title='Sales Rep' and Employee number between 1200 and 1500
SELECT * FROM employees WHERE jobTitle = "Sales Rep" AND employeeNumber BETWEEN 1200 AND 1500;

-- 3. Fetch & display employee details for the employees having office code 2 or more than 2 and job title is not Sales Rep
SELECT * FROM employees WHERE officeCode  >= 2 && jobTitle NOT IN("Sales Rep") ;
SELECT * FROM employees WHERE officeCode  >= 2 || jobTitle NOT IN("Sales Rep") ;

-- 4. Fetch & display customers details(Customers table) who does not belongs to USA
SELECT * FROM customers;
SELECT * FROM customers WHERE country != "USA";

-- 5. Fetch & display customers details(Customers table)  having customer number not in the range 150 to 200
SELECT * FROM customers WHERE customerNumber < 150 || customerNumber > 200;
-- SELECT * FROM customers WHERE customerNumber NOT IN(150 , 200); 

-- 6. List out last name, first name for all employees and rename  last name as “Name of the employee”, display as sorting order of their last name
SELECT * FROM employees;
SELECT firstName,lastName as Name FROM employees order by lastName ;

-- 7. List out the customers having credit limit is more than 70000 display in descending order by their last name.
SELECT * FROM customers;

SELECT * FROM customers WHERE creditLimit > 70000 order by contactLastName;

-- 8. List out all customers belongs to city Singapore, Liverpool or NYC
SELECT * FROM customers WHERE city IN ("Singapore","Liverpool","NYC");
SELECT * FROM customers WHERE city = "Singapore" || city = "Liverpool" || city = "NYC" ;

-- 9. List the details about customer first name “SMITH”
SELECT * FROM customers WHERE contactFirstName IN ("SMITH"); 
-- THERE IS NO DATA LOOK FOR THIS QUERS ;

-- 10. List out the employees who are working in office code 1, 3 , 5
SELECT * FROM employees WHERE officeCode IN (1,3,5);
SELECT * FROM employees WHERE officeCode = 1 || officeCode = 3 || officeCode = 5 ;

-- 11. List out the customer having credit limit between 50000 and 95000
SELECT * FROM customers;
SELECT * FROM customers WHERE creditLimit BETWEEN 50000 AND 95000;

-- 12. List out the employees who are not working in office code 1 , 3
SELECT * FROM employees WHERE officeCode NOT IN (1,3);

-- 13. List out the customers whose first name starts with “S”
SELECT * FROM customers WHERE contactFirstName LIKE "S%";

-- 14. List out the customers whose name start with “S” and end with “H”
SELECT * FROM customers WHERE contactFirstName LIKE "S%H";
SELECT * FROM customers WHERE contactFirstName LIKE "S%N";
SELECT * FROM customers WHERE contactFirstName LIKE "S%F";

-- 15. List out the customers whose first name length is 5 and start with “S”
SELECT * FROM customers WHERE contactFirstName LIKE "_____" && contactFirstName LIKE "S%";

-- 16. List out the customers whose first name length is exactly 8
SELECT * FROM customers WHERE contactFirstName LIKE "_________";

-- 17. List out the customers whose first name starting with a and ending with e
SELECT * FROM customers WHERE contactFirstName LIKE "A%";
SELECT * FROM customers WHERE contactFirstName LIKE "%E";

-- 18. List out the customers whose first name contains ee
SELECT * FROM customers WHERE contactFirstName LIKE "%e";

-- 19. Show Count of employees who are working in different office in the organization
SELECT * FROM employees;

-- 20. List out the maximum credit limit of customers belongs to different states
SELECT MAX(creditLimit) FROM customers;
SELECT MAX(creditLimit) as "MAXLIMT" FROM customers;