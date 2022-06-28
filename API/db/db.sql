CREATE DATABASE IF NOT EXISTS cafe ;

USE cafe;

CREATE TABLE product(
	  id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    ref VARCHAR(45) NOT NULL,
    price INT(11) NOT NULL,
    weight INT(11) NOT NULL,
    category VARCHAR(45) NOT NULL,
    stock INT(11) NOT NULL,
    creation_date DATE NOT NULL,
    sale INT(11),
    
    PRIMARY KEY(id)
);

INSERT INTO product VALUES
	(1,"ESPRESSO PEQUEÑO", "E1", 2000, 8, "CAFE CALIENTE", 20, "2022-05-29",0),
    (2,"ESPRESSO MEDIANO", "E2", 3000, 12, "CAFE CALIENTE", 20, "2022-05-29",0),
    (3,"ESPRESSO GRANDE", "E1", 4000, 16, "CAFE CALIENTE", 20, "2022-05-29",0),
    (4,"AMERICANO PEQUEÑO", "A1", 3000, 8, "CAFE CALIENTE", 20, "2022-05-29",0),
    (5,"AMERICANO GRANDE", "A1", 5000, 16, "CAFE CALIENTE", 20, "2022-05-29",0);

SELECT * FROM product;
-- consulta que devuelve el producto con mayor stock
SELECT * FROM product WHERE
stock=(SELECT MAX(stock) FROM product); 
--  consulta que devuelve el producto con mayor ventas
SELECT * FROM product WHERE
sale=(SELECT MAX(sale) FROM product);