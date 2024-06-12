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

CREATE TABLE user(
    user_id VARCHAR(20) PRIMARY KEY,
    user_pw VARCHAR(20) NOT NULL,
    user_name VARCHAR(10) NOT NULL,
    gender CHAR(4) DEFAULT "남자",
    date DATETIME DEFAULT now()
);

DESC user;

# 테이블 값 추가
INSERT INTO user(user_id, user_pw, user_name, gender) VALUES("userid0", "123", "soon", "여자");

# 조회
SELECT * FROM user;

# 조회 할때 원하는 필드의 내용을 찾아서 조회
SELECT * FROM user WHERE user_id = "userid0";

# 값을 수정
UPDATE user SET gneder="여자", user_name="soons" WHERE user_id="userid0" AND user_name = "soons"

# 텝이블 에서 값 삭제
DELETE FROM user WHERE user_id = "userid0";

## 정리
# mysql -u root -p : mysql에 접속
# create database [이름]; : 데이터베이스 생성
# drop database [이름]; : 데이터베이스 삭제
# use [이름]; : 데이터베이스 사용

# 테이블 값 조회 중 s% -> s로 시작하는 문자열
SELECT * FROM user WHERE user_name = "s%";

# 테이블 값 조회 중 오름차순 내림차순
# 필드명을 기준으로 DESC 내림차순, ASC 오름차순 기본값 ASC
SELECT * FROM [이름] ORDER BY [필드 이름] [DESC | ASC]

# 테이블 이름 바꾸기
ALTER TABLE [이름] RENAME [바꿀 이름];

# 테이블 컬럼 바꾸기
ALTER TABLE [이름] CHANGE [컬럼 이름] [바꿀 컬럼 이름] [데이터 타입];
# 테이블 컬럼 타입만 바꾸기
ALTER TABLE [이름] MODIFY [컬럼 이름] [바꿀 데이터 타입];

# 필드를 제거
ALTER TABLE [이름] DROP [필드 이름];

# 필드 추가 (맨 뒤로)
ALTER TABLE [이름] ADD [필드 이름] [데이터 타입] / first <- 맨 앞;

# 테이블의 자동 증가 옵션이 있는숫자형은 중간 값을 지우면 인덱스 값은 저장되어있다.
# 테이블속성에서 초기화해줘야한다.
ALTER TABLE [이름] AUTO_INCREMENT = 0;

# 실습
# 게시판 table 만들고 컬럼은 id, content, title, like, author, view
# 게시판 추가 조회 수정 삭제 만들기
# 오름차순 내림차순 조회
