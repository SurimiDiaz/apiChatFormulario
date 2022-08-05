-- Active: 1659572149254@@127.0.0.1@3306
CREATE DATABASE pruebaChat;

USE pruebaChat;

CREATE TABLE users_test_lauraSurimi(
 id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 userName VARCHAR(255) NOT NULL, 
 middleName VARCHAR(255) NOT NULL,
 lastname VARCHAR(255) NOT NULL,    
motherLastName VARCHAR(255) NOT NULL,     
birth VARCHAR(255) NOT NULL, 
email VARCHAR(255) NOT NULL,
phone VARCHAR(255) NOT NULL,

);

DESCRIBE users_test_lauraSurimi;