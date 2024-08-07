# AWS
> 웹서비스를 개발하고 배포를 할때
> 배포를 하기 위해 필요한 제 3자(사용자) 접속할수 있는 서버 컴퓨터가 필요함.
> 1년 365일 24시간 내내 켜져있어야하는데 서버가

>서버 컴퓨터를 대여해주는 호스티 업체를 통해 배포를 진행

## 호스팅
1. 웹 호스팅
2. 서버 호스팅

- 웹 호스팅 : 서버의 일부 공간을 임대하는 개념(컴퓨터를 잘게 쪼개서 제공해줌)
- 서버 호스팅 : 물리 서버를 단독으로 임대 및 구매

> 웹 호스팅의 장점은 서버의 인프라 구축이 필요가 없다. 비용이 저렴함
> 단점은 웹 호스팅은 자원 제공이 한정적이고 단독 서버에 비해 사용량이 적다.
> laas : 컴퓨터 자원만 제공하는 형태(AWS) infrastucture as a service
> PaasS : 헤로쿠 등 넷플리파이 등등 기존 환경에서 서비스를 올려주는 형태

## 리전
> AWS의 서버 컴퓨터의 지사 지점
> 서울 아니면 오사카가 그나마 빠름
> 인스턴스 만들어버리면 그 리전에 맞는 인스턴스가 생성이 되버려서
> 스냅샷 찍어서 인스턴스 새로 만들고 스냅샷을 인스턴스에 적용을 시켜주면 된다.
> 사전에 리전을 잘 확인

## EC2
> Elasic Compute Cloud의 약자
> 가상 서버를 제공해준다.
> 원하는 컴퓨터 자원을 빠르게 확장 또는 축소 해서 원하는 사이즈의
> 가상 서버를 설정해서 제공 받을 수 있다.
> 원하는 운영체제를 선택해서 제공 받을수 있다,
> 비용도 저렴하고 안정성도 높다.

## 우분투
> lts 버전의 무료버전 프리티어 사용 가능으로 해야 비용 발생 x 적게 나옴

## key
> usb나 외장하드에 보관하고 전달 해야하고
> 클라우드 저장소에 올리면 절때 안된다.

### 보안그룹 설정
> 인바운드가 요청이 들어오왔을때
> 어떤 포트를 요청 보냈을때 허용 할거냐?
> ssh(Secure Shell)
> 네트워크의 다른 컴퓨터가 원격으로 접속을 할 수 있께 해주는 프로토콜
> 보안이 중요한 환경에서 사용자가 암호화된 커넥션을 통해서 데이터를 전송할수 있게 해주는 프로토콜
> ssh의 암호화는 세션의 모든 데이터를 암호화 해서 안전하게 통신을 지향
> ssh에 접속을 할때는 인증을 거쳐서 한다. 비밀번호 키파일

> 내가 서버 대기상태를 포트를 3000번으로 했으면 3000번 포트도 보안그룹에 추가를 해줘야한다.

### http
> 프로토콜의 포트 번호는 80번 포트를 가지고 있던것.

### https
> 프로토콜의 포트 번호가 443번 포트
> 인증서 신뢰할수 있는 사이트임을 증명하느 SSL/TLS 인증서가 필요하다
> http는 보안 필요 없느 일반적인 데이터 전소이라고 보면
> https는 보안이 필요한 민감한 데이터를 전송할때 사용한다. 데이터 암호화의 신뢰성을 보장해준다.
> http로 되어있는 서버와 https로 되어있는 서버는 서로 통신할수 없다.

## 데이터 베이스 설치
> 우리 지금까지 사용한 mysql 로커에 설치가 되어있는것
> 서버 컴퓨터에 mysql을 설치해서 커넥션을 맺어서 사용을 하는것
> RDS AWS에서 제공하느 서비스가 있는데 비용이 비쌈

```sh
# 연결 
ssh -i "studykey.pem" ubuntu@ec2-3-39-224-170.ap-northeast-2.compute.amazonaws.com

# 리눅스 배포판 업데이트 최신화
sudo apt-get update

# mysql 설치
sudo apt-get install mysql-server

# mysql 접속
sudo mysql -u root -p
## 비밀번호 공백으로 엔터

# mysql 루트 비밀번호 설정
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '새로운 비밀번호'; FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1111'; FLUSH PRIVILEGES;

# 유저를 생성
CREATE USER '생성할 유저 이름'@'%' IDENTIFIED BY '비밀번호';
CREATE USER 'admin'@'%' IDENTIFIED BY '1111';

# 데이터베이스 생성
CREATE DATABASE test;

# 권한 부여
GRANT ALL ON '데이터베이스 이름'.* TO '유저 이름'@'%';

# 권한 확인
SHOW GRANTS FOR '유저 이름';

# mysql cnf 설정파일 수정
sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf

# 다른 호스트에서 msyql에 접근
mysql의 포트번호 3306
```