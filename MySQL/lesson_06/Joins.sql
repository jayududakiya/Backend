CREATE TABLE students(
	id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    city VARCHAR(20) DEFAULT "surat"
);

INSERT INTO students (id,name,city) 
VALUES 
(101,"jayan","surat"),
(102,"viraj","pune"), 
(103,"dhruv","rajkot"),
(104,"yash","vadodara");


CREATE TABLE coures(
	id INT NOT NULL,
    name VARCHAR(30) NOT NULL
);

INSERT INTO coures (id,name) 
VALUES 
(102,"english"),
(105,"maths"),
(103,"satet"),
(108,"hindi"),
(107,"gujarati"),
(110,"computer");


SELECT * FROM students;

SELECT * FROM coures;

# INNER JOIN
SELECT * 
FROM students 
INNER JOIN coures 
ON students.id = coures.id;

# LEFT JOIN
SELECT * 
FROM students 
LEFT JOIN coures 
ON students.id = coures.id;

#RIGHT JOIN
SELECT * 
FROM students 
RIGHT JOIN coures 
ON students.id = coures.id;

# FULL WITH (UNION) JOIN
SELECT * 
FROM students 
LEFT JOIN coures 
ON students.id = coures.id
UNION
SELECT * 
FROM students 
RIGHT JOIN coures 
ON students.id = coures.id;

#CROSS JOIN
SELECT * 
FROM students 
CROSS JOIN coures 
ON students.id = coures.id;

#EXCLUSIVE LEFT JOIN 
SELECT * 
FROM students
LEFT JOIN coures 
ON students.id = coures.id
WHERE coures.id IS NULL;

#EXCLUSIVE RIGHT JOIN 
SELECT * 
FROM students
RIGHT JOIN coures 
ON students.id = coures.id ;

CREATE TABLE employess (
 id INT,
  name VARCHAR(20),
  manager_id INT
);

INSERT INTO employess 
(id,name,manager_id)
VALUES
(101,"adam",103),
(102,"bob",104),
(103,"casey",NULL),
(104,"donald",103);

SELECT a.id as "manger_id", a.name as "manage" , b.name as "employee" , b.id  as "employee_id"
FROM employess as a
JOIN employess as b
ON a.id =  b.manager_id;


SELECT * FROM employess;




