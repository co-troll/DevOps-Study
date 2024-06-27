CREATE TABLE student2(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    age INT,
    class VARCHAR(10)
);

show VARIABLES like "secure_file_priv";
LOAD DATA INFILE "C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/student.csv" INTO 
table student2 FIELDS TERMINATED BY ","
ENCLOSED BY '"'
LINES TERMINATED BY "\n"
IGNORE 1 ROWS;

SELECT * FROM student2;

SELECT * FROM student2 WHERE class = "devops";
SELECT * FROM student2 WHERE name = "Stefan93";

# 인덱스 name
CREATE INDEX student_name ON student2(name);
CREATE INDEX student_class ON student2(class);

DROP INDEX student_name ON student2;

# 설정한 인덱스 확인
SHOW INDEX FROM student2;

# 인덱스 두개 이상

## index의 종류
# index
# 멀티 컬럼 index(unique);

CREATE UNIQUE INDEX student_name_email ON student2(name, email);

SELECT * FROM student2 WHERE name = "Stefan93" ;
SELECT * FROM student2 WHERE name = "Theodora_Bins" AND email = "Dayton_MacGyver@hotmail.com";