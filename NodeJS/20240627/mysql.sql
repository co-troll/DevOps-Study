CREATE DATABASE study;

use study;

CREATE TABLE user(
    user_id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE passport(
    passport_id INT PRIMARY KEY,
    user_id INT UNIQUE,
    passport_number VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE address(
    address_id INT PRIMARY KEY,
    user_id INT,
    address VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE student(
    student_id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE couress(
    couress_id INT PRIMARY KEY,
    title VARCHAR(50)
);

CREATE TABLE linkCouress(
    student_id INT,
    couress_id INT,
    PRIMARY KEY (student_id, couress_id),
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (couress_id) REFERENCES couress(couress_id)
);