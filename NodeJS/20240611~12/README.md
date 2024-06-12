# 데이터베이스(DATABASE)
> 데이터베이스라는 것은 정보를 저장하는 공간
> 쉽게 생각해서 폴더라고 생각하면 좋다

## DBMS (DataBase Management System)
> 데이터베이스라는 말은 정보는 저장하는 공간을 말하고
> DBMS는 특정 기능을 넣어서 데이터를 저장하고 조회하는 것을 뜻한다
> 데이터를 조작할 수 있는 기능 또는 시스템 프로그램을 DBMS

## SQL(Structured Query Language)
> DBMS에서 구현된 기능을 실행시키기 위해서 특정한 언어로 실행해서 데이터를 조작한다.
> 데이터를 보관할 공간을 만들거나 데이터를 저장하거나 데이터를 삭제하거나
> SQL구문을 사용해서 삭제 수정 조회를 한다.
> SQL을 사용하는 것을 SQL이라고 하고 안 사용하는 것을 NOSQL 이라고 한다
> 데이터를 저장하는 형태가 관계형이냐 RDBMS가 맞냐? 아니냐?

## RDBMS
> 관계형 DBMS의 대표적 플랫폼 
1. Oracle
2. MySQL
3. MariaDB
4. PostgreSQL
5. MSSQL
등등 있고

## 비관계형 DMBS
1. MongoDB

우리는 MySQL을 사용할 예정

## SQL의 개요
1. 데이터의 정의어 (DDL) (Data Definition Language)
2. 데이터의 조작어 (DML) (Data Manipulation Language)
3. 데이터의 제어어 (DCL) (Data Control Language)

- 데이터 정의어(DDL)
> 테이블이나 관계의 구조를 생성하는데 사용하는 구문
  1. CREATE
  2. SHOW
  3. DROP
  4. ALTER

- 데이터 조작어(DML)
> 테이블의 데이터 검색, 조회, 삽입, 수정, 삭제 등을 하는데 사용한다
> 우리가 많이 흔히 사용할 구문이 될거다.
  1. SELECT
  2. INSERT
  3. UPDATE
  4. DELETE

- 데이터 제어어(DCL)
> 데이터의 사용 권할을 관리하는데 사용
  1. GRANT
  2. REVOKE

## MySQL 설치
> cmd에서 설치된 경로로 이동해서  mysql 접속

```sh
# mysql 접속
mysql -u root -pw
password 입력

# 데이터 정의어(DDL)
# 스키마 생성
CREATE DATABASE [이름];
```

## 테이블
1. Column(열) : 테이블의 세로 항목 데이터의 유형을 표현
2. Row(행) : 테이블의 가로 항목 컬럼의 값을 모아서 하나의 로우로 구성

| id | name  | class  | date       |
|----|-------|--------|------------|
|  1 | soon  | devops | 2024-06-12 |
|  2 | soon2 | devops | 2024-06-12 |

| class  | age | personal |
| ------ | --- | -------- |
| devops | 20  | 13       |

## RDBMS의 특징
> 중복되는 데이터를 최소화 시키는것
> 테이블을 연결해서 데이터를 가져오는 방식을 테이블의 관계
> devops의 값으로 중복되는 데이터 최소화 시키자 연결고리(테이블의 관계)

## 데이터의 타입
1. 문자형
2. 숫자형
3. 날짜형

### 문자형
- VARCHAR : 가변 길이 문자형 VARCHAR(문자의 길이)로 정의 길이는 5로 했다 가정을 하고 문자를 3개만 입력하면 3개 만큼의 문자열만 저장한다. 저장의 최대값은 64KB정도
- CHAR : 고정 길이 문자형 CHAR(문자의 길이)로 정의 문자의 길이를 5로 했다 가정을 하고 문자를 3개만 입력하면 2자리는 공백으로 채워진다. 최대 문자개수는 255개
- TEXT : VARCHAR보다 더 큰 문자의 값을 저장할때 사용
 > TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT
 1. TINYTEXT : 255byte
 2. TEXT : 64KB
 3. MEDIUMTEXT : 16MB
 4. LONGTEXT : 4GB
- BLOB : 이미지처럼 크기가 큰 문자열의 데이터를 저장할때 사용(x 요즘에서는 사용하지 말라고 권장한다)

### 숫자형
1. 정수형
2. 실수형

### 옵션
1. UNSIGNED : 0 포함 0보다 큰수만 입력할수 있는 옵션
2. ZEROFILL : 빈자리는 0으로 채워 주겠다. 선언된 크기의 값에서 입력한 숫자의 자리를 빼고 나머지를 0 처리하겠다. ZEROFILL을 사용하면 MySQL은 UNSIGNED 옵션을 추가해준다. (잘 사용 x)

#### 정수형
1. TINYINT : TINYINT(숫자의 길이) 2^8 -128 ~ 127 사이의 정수를 표현할 수 있는 데이터 타입 (숫자의 길이) 여기부분은 생략 가능
2. SMALLINT : 2^16 -32,768 ~ 32,767 사이의 정수를 저장할 수 있는 데이터 타입
3. MEDIUMINT : 2^24 -8,388,608 ~ 8,388,607
4. INT : 2^32 -2,147,483,648 ~ 2,147,483,647 INTEGER와 같은 데이터 타입
5. BIGINT : 2^64 -9,223,372,036,854,775,808 ~ -9,223,372,036,854,775,807

#### 실수형
1. DECIMAL : 고정 소수 실수형 DECIMAL(자리수, 소수점 자리수) 최대 65자리 안쓰면 10으로 기본 소수점은 30자리 까지 안쓰면 기본 0
2. DOUBLE : 부동 소수 실수형 DECIMAL과 다르게 근사값을 저장한다. 10자리를 주고 10자리가 넘어가면 정확하지 않은 값이 저장될수 있다. 이 데이터보다 작은 타입은 FLOAT

### 날짜형
1. DATE : 1000-01-01 ~ 9999-12-31 까지의 날짜를 저장할수 있는 데이터 타입 MySQL에서 기본적으로 제공하는 형식은 yyyy-mm-dd 형식을 사용한다.
2. DATETIME : 날짜랑 시간까지 포함해서 MySQL 기본 형식은 yyyy-mm-dd hh:mm:ss 형식
3. TIME : 시간만
4. YEAR : 년도만

## MySQL
1. 테이블 : 컬럼 로우 구성이 되어있다.
2. 컬럼과 로우 : 데이터의 속성을 표현하고 값이 모여서 로우 하나로 구성된다.
3. 중복 데이터 최소화 : 테이블 간의 관계를 맺어서.