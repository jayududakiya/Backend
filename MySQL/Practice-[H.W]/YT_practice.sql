CREATE TABLE newStudents(
  rollNo int ,
  name VARCHAR(60) UNIQUE,
  age INT CHECK (age >= 18),
  marks INT ,
  city VARCHAR(30)
);

INSERT INTO newstudents (rollNo , name , age , marks , city ) VALUES 
(101 , "rahul" , 22 , 78 , "surat") , 
(102 , "dhaval" , 24 , 88 , "surat") , 
(103 , "vivek" , 20 , 95 , "ahmedabad") , 
(104 , "dhruv" , 22 , 65 , "vadodara") , 
(105 , "rudrax" , 28 , 97 , "ahmedabad") , 
(106 , "raj" , 20 , 34 , "rajkot") ;


SELECT * FROM newstudents;

SELECT city , COUNT(name) , AVG(marks) FROM newstudents GROUP BY city ORDER BY city ASC;

-- wrong ans
-- SELECT mode , COUNT(mode) FROM tb_name GROUP BY mode;
-- right ans
-- SELECT mode , COUNT(customer) FROM tb_name GROUP BY mode;



-- KEYS 
CREATE TABLE dept(
   id INT NOT NULL ,
   name VARCHAR(50),
   PRIMARY KEY (id)
);

INSERT INTO dept (id,name) 
VALUES 
(101,"English"),
(102,"Maths");

UPDATE dept SET id = 110 WHERE id = 101;
UPDATE dept SET id = 108 WHERE id = 103;

DELETE FROM dept WHERE id = 108;

INSERT INTO dept (id,name) VALUES (103,"State");

SELECT * FROM dept;




CREATE TABLE teacher(
   id INT PRIMARY KEY,
   name VARCHAR(50),
   dept_id INT ,
   FOREIGN KEY (dept_id) 
   REFERENCES dept(id) 
   ON UPDATE CASCADE
   ON DELETE CASCADE
);

INSERT INTO teacher (id,name,dept_id) VALUES 
(01,"Roy",101),
(02,"jarry",101),
(03,"jack",102),
(04,"tom",103);

SELECT * FROM teacher;

ALTER TABLE students 
CHANGE COLUMN fullName name VARCHAR(20) NOT NULL;

ALTER TABLE newstudents 
CHANGE COLUMN name fullName VARCHAR(20) NOT NULL; 

SET SQL_SAFE_UPDATE = 0;

DELETE FROM newstudents WHERE marks < 80; 

SELECT * FROM newstudents;



ALTER TABLE students 
CHANGE COLUMN fullName name VARCHAR(20) NOT NULL;

ALTER TABLE newstudents 
CHANGE COLUMN name NAME VARCHAR(30) UNIQUE; 

SET SQL_SAFE_UPDATES = 0;

DELETE FROM newstudents
WHERE marks < 80; 

ALTER TABLE newstudents ADD COLUMN grades VARCHAR(1) DEFAULT "B";

ALTER TABLE newstudents DROP COLUMN grades;

SELECT * FROM newstudents;
