CREATE DATABASE interactive;

CREATE TABLE client_master (
    clientNo VARCHAR(6) PRIMARY KEY,
    name VARCHAR(20),
    address01 VARCHAR(30),
    address02 VARCHAR(30),
    city VARCHAR(15),
    pincode INT,
    state VARCHAR(15),
    baldue INT
);

insert into client_master value 
("C00001" ,"Ivan Bayross" , "51/E-8" , "Oak Drive" , "Mumbai" , 400054 ,  "maharashtra" , 15000),
("C00002","Mamta Muzumdar","12/B-5", "Green Park","Madras",780001,"Tamil Nadu",0),
("C00003","Chhaya Bankar","89/A-2", "Rose Garden","Mumbai",400057,"Maharashtra",5000),
("C00004","Ashwini Joshi","34/C-1", "Blue Ridge","Bangalore",560001,"Karnataka",0),
("C00005","Hansel Colaco" ,"56/D-7", "Sunset Boulevard","Mumbai",400060,"Maharashtra",2000),
("C00006","Deepak Sharma", "23/E-4", "Palm Beach","Mangalore",560050,"Karnataka",0);


CREATE TABLE product_master (
    productNo VARCHAR(6) PRIMARY KEY,
    description VARCHAR(15) NOT NULL,
    profitpercent INT NOT NULL,
    unitmesasure VARCHAR(10) NOT NULL,
    qtyonhand INT NOT NULL,
    reorderlvl INT NOT NULL,
    sellprice INT NOT NULL CHECK (sellprice != 0),
    costprice INT CHECK (costprice != 0)
);

insert into product_master value 
("P0001","T-Shirts",5,"Piece",200,50,350,250),
("P0345","Shirts",6,"Piece",150,50,500,350),
("P06734","Cotton Jeans",5,"Piece",100,20,600,450),
("P07865","Jeans",5,"Piece",100,20,750,500),
("P07868","Trousers",2,"Piece",150,50,850,550),
("P07885","Pull Overs",2.5,"Piece",80,30,700,450),
("P07965","Denim Shirts",4,"Piece",100,40,350,250),
("P07975","Lycra Tops",5,"Piece",70,30,300,175),
("P08865","Skirts",5,"Piece",75,30,450,300);

CREATE TABLE salesman_master (
    salesmanNo VARCHAR(6) PRIMARY KEY,
    salesmanName VARCHAR(20) NOT NULL,
    address01 VARCHAR(30) NOT NULL,
    address02 VARCHAR(30),
    city VARCHAR(20),
    pincode INT,
    state VARCHAR(20),
    salamt INT NOT NULL CHECK (salamt != 0),
    tgttoget INT NOT NULL CHECK (tgttoget != 0),
    ytdsales INT NOT NULL,
    remarks VARCHAR(60)
);

insert into salesman_master value
("S00001","Aman","A/14","Worli","Mumbai",400002,"Maharashtra",3000,100,50,"Good"),
("S00002","Omker","65","Nariman","Mumbai",400001,"Maharashtra",3000,200,100,"Good"),
("S00003","Raj","P-7","Bandra","Mumbai",400032,"Maharashtra",3000,200,100,"Good"),
("S00004","Ashish","A/5","Juhu","Mumbai",400044,"Maharashtra",3500,200,150,"Good");

#-----------------------------------------------

CREATE TABLE sales_order (
    orderNo VARCHAR(6) PRIMARY KEY,
    clientNo VARCHAR(6),
    orderDate DATE NOT NULL,
    delyAddr VARCHAR(25),
    salesManNo VARCHAR(6),
    delyType CHAR(1) DEFAULT 'F',
    billyn CHAR(1),
    delyDate DATE ,
    orderStatus VARCHAR(10) CHECK (orderStatus IN ('in Process' , 'Fulfilled', 'BackOrder', 'Cancelled')),
    CONSTRAINT check_dates CHECK (delyDate > orderDate),
    CONSTRAINT fk_clientNo FOREIGN KEY (clientNo)
        REFERENCES client_master (clientNo),
    CONSTRAINT fk_salesManNo FOREIGN KEY (salesManNo)
        REFERENCES salesman_master (salesmanNo)
        ON UPDATE CASCADE ON DELETE CASCADE
);


DESC sales_order;

-- insert Data in Table 
INSERT INTO sales_order 
(orderNo,clientNo,orderDate,delyAddr,salesManNo,delyType,billyn,delyDate,orderStatus) 
VALUES 
("O19001","C00001","2002-06-12","adress","S00001","F","N","2004-07-02","in Process"),
("O19002","C00002","2002-06-25","adress","S00002","P","N","2004-07-27","Cancelled"),
("O46865","C00003","2002-02-18","adress","S00003","F","Y","2004-02-20","Fulfilled"),
("O19003","C00001","2002-04-03","adress","S00001","F","Y","2004-04-02","Fulfilled"),
("O46866","C00004","2002-05-20","adress","S00002","P","N","2004-05-22","Cancelled"),
("O19008","C00005","2002-05-24","adress","S00004","F","N","2004-07-26","in Process");


SELECT * FROM sales_order;

CREATE TABLE sales_order_details (
    orderNo VARCHAR(6),
    productNo VARCHAR(6),
    qtyOrderd INT,
    qtyDisp INT,
    productRate INT,
    CONSTRAINT fk_orderNo FOREIGN KEY (orderNo)
        REFERENCES sales_order (orderNo),
    CONSTRAINT fk_productNo FOREIGN KEY (productNo)
        REFERENCES product_master (productNo)
        ON UPDATE CASCADE ON DELETE CASCADE
);

-- insert Data in Table 
INSERT INTO sales_order_details 
(orderNo,productNo,qtyOrderd,qtyDisp,productRate) 
VALUES 
("O19001","P0001",4,4,525),
("O19001","P07965",2,1,8400),
("O19001","P07885",2,1,5250),
("O19002","P0001",10,0,525),
("O46865","P07868",3,3,3150),
("O46865","P07885",3,1,5250),
("O46865","P0001",10,10,525),
("O46865","P0345",4,4,1050),
("O19003","P0345",2,2,1050),
("O19003","P06734",1,1,12000),
("O46866","P07965",1,0,8400),
("O46866","P07975",1,0,1050),
("O19008","P0001",10,5,525),
("O19008","P07975",5,3,1050); 

SELECT * FROM sales_order_details;


