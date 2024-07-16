SELECT * FROM college.newstudents;

INSERT INTO newstudents (rollNo , NAME , age , marks , city) VALUES (106,"nikhil",29,70,"surat"),(108,"raj",25,74,"bhuj"),(106,"dhiraj",20,65,"surat");

UPDATE newstudents SET rollNo = 110 WHERE marks = 65;

-- queries 
SELECT AVG(marks)
FROM newstudents;
-- sub queries 
SELECT *
FROM newstudents
WHERE marks > 
(SELECT  AVG(marks)
FROM newstudents);

-- queries 
SELECT rollNo FROM newstudents WHERE rollNo % 2 = 0;
-- sub queries 
SELECT *
FROM newstudents
WHERE rollNo IN (SELECT rollNo FROM newstudents WHERE rollNo % 2 = 0);


-- queries  
SELECT MAX(marks) FROM newstudents WHERE city = "surat";
-- queries 
SELECT NAME FROM newstudents WHERE city = "surat";
-- sub queries 
SELECT * FROM newstudents 
WHERE NAME IN 
(SELECT NAME FROM newstudents WHERE city = "ahmedabad"
AND 
marks >= 
(SELECT MAX(marks) FROM newstudents WHERE city = "ahmedabad"));


--  view create 
CREATE VIEW stu_view 
AS SELECT rollNo , NAME , marks FROM newstudents;

SELECT * FROM  stu_view ;

SELECT * FROM  stu_view WHERE marks > 70;

DROP VIEW stu_view;