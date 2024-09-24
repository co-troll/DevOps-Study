# Application load Balancer (ALB)
> L7 계층에서 동작하는 부하 분산기 에플리케이션 계층 http/https에서 트래픽을 분산하는 역할을 해준다.
> EC2 인스턴스, 컨테이너 등에 분산시켜서 서버의 부하를 균등하게 배분해준다.

1. 트래픽 분산 : 여러개의 서버간에 트래픽 분산을 해서 서버의 부하를 적게 관리
2. 에플리케이션 계층의 라우팅 : http/https 요청을 기반으로 특정 경로나 호스트로 라우팅 처리
3. SSL/TLS 종료 : https 트래픽을 처리하고, SSL 인증서를 통해서 암호화된 데이터 처리를 해준다.

## ALB 개념

1. 리스너
> ALB에서 클라이언트가 요청을 보내면 트래픽을 수신하는 포트를 정의하고
> 리스너에서 특정 포트에서 들어오는 트래픽을 감지해서 처리해준다.
> 예 80 443

2. 대상 그룹
> 트래픽을 분산시킬 대상을 묶어 놓고(서버, 컨테이너)
> 그룹에 속한 인스턴스에게 트래픽을 전송한다.
> ALB는 헬스 체크를를 통해서 그룹의 상태를 모니터링하고 비정상적인 서버엑는 트래픽을 보내지 않는다. 헬스체크는 주기적으로 수행한다.

3. 규칙
> 라우팅의 규칙 요청이 들어올 방법을 정의한다.
> 예를 들어서 /app 으로 요청이 들어오면 특정의 타겟에게 요청을 보내게 설정

### 동작 방식
> ALB는 L7 http/https 요청의 헤더, 경로, 호스트명 등의 정보를 가지고 트래픽을 분산하는 동작을 한다.

> 클라이언트 요청(로드 밸런서의 DNS로 받고) -> 리스터(트래픽 수신) -> 규칙 평가 -> 대상그룹으로 라우팅 -> 응답


### AWS  ALB 실습 

> EC2 인스턴스

```sh
sudp apt update # 패키지 업데이트
sudo apt install docer.io -y # docker 설치
sudo systemctl status docker # docker 상태 확인

## aws cli 설치
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

## unzip 설치 (압축 파일 풀기 위해서)
sudo apt install unzip

## 압축 풀기
sudo unzip awscliv2.zip

## aws cli 설치
sudo ./aws/istall

aws configure

sudo usermod -
sudo systemctl restart docker

aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin []

docker pull []

docker run -d -p 80:3000 []

## 로드밸런서 설정
서비스 EC2에서 사이드바에서 대상 그룹에 EC2 하나 포함해서 만들고

서비스 로드 밸런서 탭

### 배포 공부
## EB
## ACM(https)
## Lambda
```