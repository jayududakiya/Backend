-- filter data
select * from product_master where qtyonhand = 100;

-- update
update product_master set qtyonhand = 10 where description = 'Trousers';

-- delete
delete from product_master where description = 'Shirts';