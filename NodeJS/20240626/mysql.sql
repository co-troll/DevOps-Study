use soon;

CREATE TABLE student (
    id INT,
    name VARCHAR(20),
    class VARCHAR(20)
);

CREATE TABLE student_class (
    class_id INT,
    class VARCHAR(20),
    study VARCHAR(20)
);

INSERT INTO student VALUES(1, "soon", "devops"), (2, "soon2", "story"), (3, "soon3", "game");
INSERT INTO student_class VALUES(1, "devops", "full"), (2, "story", "story1"), (3, "game", "game1");

SELECT * FROM student;
SELECT * FROM student_class;

SELECT * FROM student INNER JOIN student_class ON student.class = student_class.class WHERE student.class = "devops";

SELECT student.class, student_class.study FROM student INNER JOIN student_class ON student.class = student_class.class WHERE student.class = "story";

CREATE TABLE users (id INT, name VARCHAR(20));
CREATE TABLE orders (id INT, name VARCHAR(20), order_id INT);

INSERT INTO users VALUES(1, "aaa");
INSERT INTO users VALUES(2, "bbb");
INSERT INTO users VALUES(3, "ccc");

INSERT INTO orders VALUES(1, "fish", 2);
INSERT INTO orders VALUES(2, "steak", 1);
INSERT INTO orders VALUES(3, "fruit", 1);
INSERT INTO orders VALUES(4, "juice", 3);

SELECT * FROM users INNER JOIN orders ON users.id = orders.order_id ORDER BY users.id;
SELECT * FROM users INNER JOIN orders ON users.id = orders.order_id WHERE users.id = 1 ORDER BY users.id;  

