-- client_master Table 
create table client_master(clientNo varchar(6),name varchar(20) , address01 varchar(30) , address02 varchar(30) , city varchar(15) , pincode int , state varchar(15) , baldue int );

-- insert into client_master 
insert into client_master value 
("C0001" ,"Ivan Bayross" , "51/E-8" , "Oak Drive" , "Mumbai" , 400054 ,  "maharashtra" , 15000),
("C0002","Mamta Muzumdar","12/B-5", "Green Park","Madras",780001,"Tamil Nadu",0),
("C0003","Chhaya Bankar","89/A-2", "Rose Garden","Mumbai",400057,"Maharashtra",5000),
("C0004","Ashwini Joshi","34/C-1", "Blue Ridge","Bangalore",560001,"Karnataka",0),
("C0005","Hansel Colaco" ,"56/D-7", "Sunset Boulevard","Mumbai",400060,"Maharashtra",2000),
("C0006","Deepak Sharma", "23/E-4", "Palm Beach","Mangalore",560050,"Karnataka",0);



-- product_master 
create table product_master(productNo varchar(6) , description varchar(15) , profitpercent int , unitmesasure varchar(10) , qtyonhand int , reorderlvl int  , sellprice int  , costprice int );

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

-- salesman_master
create table salesman_master(salesmanNo varchar(6) , salesmanName varchar (20), address01 varchar(30) , address02 varchar(30) , city varchar(20) , pincode int , state varchar (20) , salamt int  , tgttoget int  , ytdsales int , remarks varchar(60) );

insert into salesman_master value 
("S00001","Aman","A/14","Worli","Mumbai",400002,"Maharashtra",3000,100,50,"Good"),
("S00002","Omker","65","Nariman","Mumbai",400001,"Maharashtra",3000,200,100,"Good"),
("S00003","Raj","P-7","Bandra","Mumbai",400032,"Maharashtra",3000,200,100,"Good"),
("S00004","Ashish","A/5","Juhu","Mumbai",400044,"Maharashtra",3500,200,150,"Good");


------------------------ Tables Related Quires ------------------------

-- 03 : Exercise On Retrieving Records  form A Tables

-- [A : find Out the names Of all clients] 
select name from  client_master;

-- [B : Retrieve the entire contents of the client_master tables]
select * from client_master;

-- [C : Retrieve the entire name , city and state of the client_master tables]
select name , city , state from client_master;

-- [D : List the various product available form the product_master table]
select description from product_master;

-- [D : List all the client who are located in mumbai]
-- string sud be in Quotes
select * from client_master where city = "Mumbai";

-- [D : find all the salesmen who have salary a eaual to Rs.3000]
select * from salesman_master where salamt = 3000 ;

-- 04 : Exercise On updating Records A Tables;
-- [A : change the city of ClientNo 'C0005' to 'Bangalore' ];
update client_master set city = "Bangalore" where clientNo = "C0005";

-- [B : change the BalDue of ClientNo 'C0001' to Rs.1000 ];
update client_master set baldue = 1000 where clientNo = "C0001";

-- [C : change the cost price of 'Trousers' to Rs.950 ];
update product_master set costprice = 950 where description = "Trousers";


-- [D : change the city of the 'salesman' to Puna ];
update salesman_master set city = "Pune";
update salesman_master set salesmanNo = "S00003" where salesmanName = "Raj";
update salesman_master set salesmanNo = "S00004" where salesmanName = "Ashish";







