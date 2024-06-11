# mb4 : most bytes 4
# utf8mb4 : 4바이트씩 사용하는 utf8 문자 집합으로 유니코드 문자를 지원하겠다.
# general : 비교 정렬 규칙을 정의하는데 단순한 규칙으로 정의하겠다.
# ci : 대소문자 구분 안하겠다.
CREATE DATABASE SOON DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
SHOW DATABASES;

# 데이터베이스 삭제
DROP DATABASE SOON;

# 데이터베이스를 사용하겠다.
USE SOON;

# 사용하는 데이터베이스의 테이블을 확인
SHOW TABLES;

# 테이블 생성
-- CREATE TABLE [테이블 이름]([컬럼 이름] [데이터타입] [옵션]);
# AUTO_INCREMENT : 자동으로 증가한다. 1 2 3 4 5
# PRIMARY KEY : 고유한 키 하나만 존재할 수 있다.
# VARCHAR(글자수) : 256BYTE 가변데이터 (우리가 글자수까지 사용을 안하면 알아서 맞춘다.)
CREATE TABLE store(id INT AUTO_INCREMENT PRIMARY KEY, tel VARCHAR(20));

# 테이블 필드 확인
DESC store;
