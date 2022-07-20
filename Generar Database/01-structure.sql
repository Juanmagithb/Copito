DROP DATABASE IF EXISTS copito_db;
CREATE DATABASE copito_db;
USE copito_db;

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `price` INT NOT NULL,
   `stock` INT,
   `pack` INT NOT NULL,
   `discount` TINYINT NOT NULL,
   `categoryId` INT NOT NULL,
   `description` VARCHAR(255),
   `productImage` VARCHAR(50) NOT NULL,
   `image2` VARCHAR(50),
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT AUTO_INCREMENT,
   `firstName` VARCHAR(100) NOT NULL,
   `lastName` VARCHAR(100) NOT NULL,
   `phoneNumber` INT NOT NULL,
   `email` VARCHAR(50) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `categoryId` INT,
   `userImage` VARCHAR(50),
   PRIMARY KEY (`id`)
);

CREATE TABLE `usersTypes` (
   `id` INT AUTO_INCREMENT,
   `categoryId` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productsTypes` (
   `id` INT AUTO_INCREMENT,
   `categoryId` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_a8def4bc-6c65-4873-b366-9ec029921720` FOREIGN KEY (`categoryId`) REFERENCES `productsTypes`(`id`)  ;

ALTER TABLE `users` ADD CONSTRAINT `FK_8aa23c2b-1768-4fb1-951c-54c4a3d7a52e` FOREIGN KEY (`categoryId`) REFERENCES `usersTypes`(`id`)  ;
