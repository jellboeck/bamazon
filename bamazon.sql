create database bamazon;

use bamazon;

create table products (
    itemid Integer auto_increment NOT NULL,
    productname varchar(45) NOT NULL,
    departmentName varchar(30) NOT NULL,
    price decimal (5,2) NOT NULL,
    quantity Integer(10) NOT NULL,
    primary key(itemid) 

);

INSERT INTO products (productname,departmentName,price,quantity)
VALUES ("Rubik's Cube", "Toys & Games", 3.95 , 100),
("Jenga", "Toys & Games", 7.95, 120),
("Connect 4", "Toys & Games", 8.95, 80),
("Instant Pot Pressure Cooker", "Kitchen", 59.95, 60),
("Digital Food Kitchen Scale","Kitchen", 9.95, 100),
("Ring POP Individually Wrapped","Grocery", 2.95, 150),
("Lavazza Whole Bean Coffee", "Grocery", 12.95, 75),
("Slim Jim Smoked Meat Sticks", "Grocery", 4.95, 160),
("Sharpie Permanent Markers", "Office", 10.95, 90),
("Westcott 8' Titanium Bonded Scissors", "Office", 8.49, 85);

