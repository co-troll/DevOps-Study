# 도커

## 가상 머신과 도커
> 가상 머신은 하나의 물리적인 서버에서 여러개의 독립된 가상 컴퓨터를 운영할수 있는 기술
> 물리적인 하드웨어를 소프르트웨어로 가사오하해서 물리적인 여러 컴퓨터가 존재하는것처럼 사용하는 방식 여러개의 운영체제를 실행할수 있다.

## 가상 머신의 구조
> 하이퍼 바이저 : 물리적 하드웨어 위에서 여러 가상 운영체제를 실행하는 소프트웨어임
> 어플리케이션 : 가상 머신에서 실행되는 프로그램
> 게스트 OS : 가상머신에서 동작하는 운영체제

## 가상머신의 장점
> 독립된 운영체제 환경을 제공해서 격리성을 보장한다 하나의 가상머신이 문제가 생겨도 다른 가상머신은 영향을 주지 않게 한다. 여러 OS를 실행할수 있는 장점
> 핲이퍼 바이저 소프르웨어가 물리적인 리소스를 가상머신에서 분배해서 사용할수 있게 한다.

## 가상머신의 단점
> 가상머신은 각각의 운영체제를 실행시키므로 메모리랑 디스크를 많이 사용한다.
> 게스트 os가 포함되어서 부팅속도가 느리다. 실행도 느리다.
> WSL2가 뭐지? WSL version 1, version 2의 차이

## 도커랑 가상머신의 차이는?
> 가상머신은 독립된 운영체제가 포함되어있고 도커는 모든 컨테이너가 호스트 운영체제를 공유한다.
> 부팅시가은 도커가 훨씬 빠르다.
> 가상머신은 리소스 사용량이 많다. 운영체제가 만흥니까 도커는 리소스 사용량 이적다.
> 격리성은 가상머신 이 높다. 도커는 프로세스 수준의 격리
> 가상머신은 복잡한 어플리케이션 테스트나 다른 운영체제 실행 환경 테스트
> 도커는 어플리케이션 배포, 개발환경 통일 CI/CD 파이프라인 구축

## Docker란>?
> 어플리케이션과 실행되는데 필요한 모든 설정 등등을 컨테이너라는 독립된 환경에 패키징하는 도구
> 컨테이너 안에서 어플리케이션은 어디서나 도일하게 실행이 될수 있다.
> 개발, 테스트, 배포 환경의 문제의 차이를 줄여준다.

> Docker를 배포할때 사용하는 이유는? 어플리케이션의 이동성을 보장할수 있다.
> Docker로 패키징은 로컬에서 해서 클라우드 서버나 다른 컴퓨터에서 동일하게 동작하수 있도록 할수 있다.

## Docker의 장점
> 환경의 독립성 Docker는 어플리케이션을 어디서 실행하든지 동일하게 실행될수 있도록 도와준다.
> 개발자가 로컬환경에서 만든 어플리케이션이 어디서든지 docker로 패키징 해놓으면 동일한 결과를 도출할수 있다.

Docker의 구조

1. Docker 이미지 : 쉽게 말해 어플리케이션 설계도 어플리케이션을 실행하기 위한모든 파일들과 설정들 명령어들을 포함한 패키지 예 ) 어플리케이션을 만들때 어플이 실행되기 위해서 필요한 nodejs버전이라 라이브러리 등등 파일들이 모두 포함되는 것이 이미지에서 실행시킨 명령어들을 Dockerfile에 작성을 하고 파일을 읽어서 이미지를 생성.

2. Docker 컨테이너 : 어플리케이션 프로그램 이미지를 기반으로 실행한 인스턴스 이미지를 실제로 실행한 상태 이미지를 실제로 동작시키는 실행 환경

3. Dockefile : 재료 Docker 이미지를 만들기 위한 설정 파일 명령어들을 작성해서 이미지를 생성

4. DOcker Hub : Docker 이미지를 저장하고 공유하는 중앙 저장소 개발자들이 허브를 통해서 이미지를 업로드 하거나 다운로드해서 사용할수 있다.

## Docker 명령어
```sh
# 도커 버전 확인
docker --version

# 도커 이미지 목록 화인
docker images

## 도커 이미지 만들어 보기
Dockerfile 파일을 만들고
Dockerfile docker 명령어
FROM : 베이스이미지를 지정한다. node 환경에서 실행시키는 패키지
WORKDIR : 컨테이너 내의 작업 폴더를 설정하는 명령어
COPY : 로컬 파일을 컨테이너에게 이미지로 복사. COPY {로컬의 파일의 경로} {DIR의 경로}
RUN : 이미지 빌드시 실행할 명령어
CMD : 컨테이너가 실행르 시킬때 실행할 명령어
EXPOSE : 사용할 포트 지정

# Dockerfile
FROM node:20

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . . 
EXPOSE 3000

CMD ["npm","start"]
```

## docker 이미지 생성
```sh
docker build -t [이미지이름] [도커파일경로]
docker build -t myimage .
```

## docker 컨테이너 실행 로컬에서 테스트
```sh
docker run -p 3000:3000 myimage
```

## Docker를 사용해서 nextjs를 이미지를 ECR로 업로드
> nextjs 만들고 -> docker 이미지 생성 -> ECR에 이미지를 업로드 푸쉬 -> Elastic beanstalck 배포를 진행

```sh
npx create-next-app myapp

# 스테이지 추가
# 멀티 스테이지 빌드
# 멀티 스테이지 빌드 도커가 빌드하느  과정에서 여러 단계르 정의하고
# 단계마다 필요한 파일이나 폴더만 가져와서 이미지를 만드는 방식 최적화된 이미지를 만들수 있다.

# 빌드 단계 스테이지
FROM node:20 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# 서버 동작 단계 실행
# --from=[스테이지 이름]
FROM node:20
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm","run","start"]

## docker build -t my-next-app .

docker images

## 겹치게 하고 싶지 않다
docker run --name nextapp -p 3000:3000 my-next-app
```

### AWS ECR
> Docker의 이미지를 저장하고 관리하는 레지스트리 서비스
> Docker 이미지의 중앙 저장소 역할
> Docker 이미지를 ECR에 푸쉬하면 AWS의 다른 서비스를 이용할때나? 혹은 다른 컴퓨터에서 이미지가 필요할때
> EB 배포관련해서 사용할 서비스
> 네트워크로 다른 서버에 이미지를 제공할경우 ECR에 푸쉬를하고 가지고와서 사용하면된다.

## ECR 레포지토리 생성
```sh
aws ecr create-repository --repository-name my-next-app
```

## Docker로 AWS 권한을 받기
```sh
aws ecr get-login-password --region ap-northeast-2

## 접속되어있는 계정의 정보를 확인
aws sts get-caller-identity

docker login --username AWS --password-stdin [레파지토리url] 

## 이미지 태그를 생성
## latest 태그 생성          
docker tag my-next-app:latest [레파지토리uri]:latest

## 이미지 푸쉬
docker push [레파지토리uri]:latest

## 시디 스페이스, 데몬
## iso
## 이미지 파일 생성한건 배포 어디서드 ㄴ실행이 되고 충돌이나지 않게
## 받아서 실행을 시켜주면 정상적을 ㅗ어디서든 실행이 가능하다.
docker pull [레파지토리uri]:latest
```