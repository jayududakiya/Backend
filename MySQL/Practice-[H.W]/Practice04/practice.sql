-- 01 qury

SELECT 
    client_master.clientNo,
    client_master.name,
    sales_order.orderNo
FROM client_master
	 INNER JOIN sales_order ON client_master.clientNo = sales_order.clientNo WHERE client_master.name = "Ivan Bayross";

-- 02
SELECT 
    sales_order.clientNo,
    sales_order.orderStatus,
    sales_order_details.qtyDisp,
    sales_order_details.qtyOrderd
FROM
    sales_order
        INNER JOIN
    sales_order_details ON sales_order.delyDate BETWEEN '2004-07-01' AND '2004-07-28';
    
-- 03
SELECT product_master.productNo , product_master.description  FROM product_master INNER JOIN sales_order_details ON product_master.productNo = sales_order_details.productNo WHERE sales_order_details.qtyOrderd IN (SELECT max(sales_order_details.qtyOrderd) FROM sales_order_details);

-- 04
SELECT client_master.name , client_master.clientNo  FROM client_master 
INNER JOIN product_master ON product_master.description = "Trousers";
-- INNER JOIN sales_order_details ON sales_order_details.productNo = "P07868";

-- 05
#PRODUCTS, SALES,SALSE_DETALIS 
SELECT DISTINCT count(sales_order.clientNo)as "count" , sales_order.clientNo, product_master.productNo , product_master.description ,sales_order_details.orderNo , sales_order_details.qtyOrderd 
FROM sales_order 
INNER JOIN sales_order_details ON sales_order_details.qtyOrderd < 5 
INNER JOIN product_master ON product_master.description = "Pull Overs" WHERE sales_order.orderNo = sales_order_details.orderNo  
GROUP BY sales_order_details.orderNo , sales_order.clientNo , product_master.productNo , product_master.description, sales_order_details.qtyOrderd;

-- 06
#PRODUCTS ,clinets, SALES,SALSE_DETALIS 
SELECT 
client_master.clientNo, 
client_master.name , 
product_master.description as "PRODUCT NAME",
sales_order_details.qtyOrderd as "OREDR QTY",
sales_order.orderNo  as "SO",
sales_order_details.orderNo as "SOD",
sales_order_details.productNo as "PSOD"
FROM sales_order 
INNER JOIN client_master ON client_master.name IN ("Ivan Bayross","Mamta Muzumdar")
INNER JOIN  sales_order_details ON sales_order_details.orderNo  = sales_order.orderNo
INNER JOIN product_master ON sales_order_details.productNo = product_master.productNo
WHERE client_master.clientNo = sales_order.clientNo;

-- 07
#PRODUCTS ,clinets, SALES,SALSE_DETALIS 
SELECT 
client_master.clientNo, 
client_master.name , 
product_master.description as "PRODUCT NAME",
sales_order_details.qtyOrderd as "OREDR QTY",
sales_order.orderNo  as "SO",
sales_order_details.orderNo as "SOD",
sales_order_details.productNo as "PSOD"
FROM sales_order 
INNER JOIN client_master ON client_master.clientNo IN ("C00001" , "C00002")
INNER JOIN  sales_order_details ON sales_order_details.orderNo  = sales_order.orderNo
INNER JOIN product_master ON sales_order_details.productNo = product_master.productNo
WHERE client_master.clientNo = sales_order.clientNo;

-- ===============================================================================================================
-- 01 NOT DONE
SELECT 
PM.productNo as "PM_NO", 
SOD.productNo as "SOD_NO"
FROM product_master AS PM
INNER JOIN sales_order_details AS SOD 
-- ON SOD.productNo = PM.productNo
WHERE SOD.productNo != PM.productNo ORDER BY PM.productNo,SOD.productNo ;

-- 02
SELECT 
client_master.name , 
client_master.address01 , 
client_master.address02 ,
client_master.city, 
client_master.pincode 
FROM client_master
INNER JOIN sales_order ON sales_order.orderNo = "O19001" AND client_master.clientNo = sales_order.clientNo; 

-- 03 NOT DONE
SELECT DISTINCT 
client_master.name , 
client_master.address01 , 
client_master.address02 ,
client_master.city, 
client_master.pincode ,
sales_order.orderDate ,
sales_order.orderNo
FROM client_master
INNER JOIN sales_order WHERE sales_order.orderDate IN (SELECT orderDate FROM sales_order WHERE orderDate BETWEEN "2002-05-01" AND "2002-05-28")
-- BETWEEN "2002-05-01" AND "2002-05-28";

-- SELECT orderDate FROM sales_order WHERE orderDate BETWEEN "2002-05-01" AND "2002-05-28";



