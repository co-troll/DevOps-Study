# 클라우드란?
> 네트워크를 통해서 컴퓨팅 자원을 쉽게 이용할수 있는 것
> 다이어그램으로 복잡한 인프라를 추상적으로 표현해서 한것이 구름의 모양을 사용해서 클라우드라고 부르게됨
> 클라우드라는 용어는 인터넷을 추상화해서 나타낸것
> 인터넷이나 서버 인프라를 직접 다루는 것이 아니고 원격으로 접속해서 사용하는 개념을 시각적으로 표현해준것.

## 서비스의 모델 SaaS, PaaS, IaaS

1. SaaS(Software as a Service) : 소프트웨어 기반 서비스
> 인터넷을 통해 소프트웨어를 사용할수 있고 직접 소프트웨어를 업데이트는 불가능 (Gmail, Microsoft 365 등등)

2. PaaS(Platform as a Service) : 플랫폼 기반 서비스
> 개발, 실행, 테스트 배포를 제공 받아서 사용할수 있는 플랫폼의 형태를 클라우드로 제공
> 개발자가 소프트웨어를 말들때 개발에서 신경을 쓰고 개발환경이나 데이터베이스 미들웨어 등을 플랫폼에서 제공해준다. 우리는 설정값만 수정하면 된다. (Heroku) 
> 배포를 신경쓰지않고 빠르게 진행할수 있는 장점 서버 관리나 네트워크 설정은 클라우드에서 제공

3. IaaS(Infrastructure as a Service) : 인프라 기반 서비스
> 서버와 저장소 네트워크 등을 제공하는 서비스 물리적인 서버 
> 하드웨어를 가지고 있지 않지만 네트워크 요청을 통해서 클라우드 서비스를 이동해 필요한 만큼만 컴퓨팅자원을 빌려서 사용할수 있다. 
> 쉽게 말해서 네트워크를 통해서 원격으로 컴퓨팅 자원을 이용할수 있는 것 (AWS)
> 컴퓨팅 자원을 빌려서 사용하고 인프라를 설정해서 운영까지 할수 있다.

## AWS에서 제공하는 네트워크의 형태
- VPC : 네트워크를 분할해서 제공하는 것
- 서브넷 : 분할한 네트워크에서 더 작은 단위

## 클라우스 서비스를 사용할때 리전
> 물리적으로 위치한 데이터 센터 그룹
> SaaS, PaaS, IaaS와 같은 서비스 모델에서 리전은 데이터의 저장 위치, 성능, 법적 요구 사항을 관리한다.
> 리전은 클라우드 서비스를 사용하는 사용자와 가까운 곳에 인프라를 제공해준다.

## 인증 권한을 가지고 있는 IAM
> IAM은 사용자나 그룹의 신원확인과 권한을 담당하는 서비스
> 클라우드 인프라 및 자원을 이용할때 접근 권한이 있는지 제어를 하는 것이 목적

- 인증 : 사용자의 신원을 확인
- 인가 : 사용자가 리소스에 접근 권한이 있는지 확인
> 보안과 접근의 제어에 중점점을 둔것.

## AWS CLI
> 도커로 이미지를 생성할때 AWS에 CLI의 형태로 요청을 보내서 사용할 예정

## 이전에는 콘솔 웹을 제공해주는 것을 사용
> CLI의 형태를 웹의 형태로 쉽게 사용할수 있도록 표현해준것

AWS CLI 사용

```sh
aws --version
```

AWS에 CLI로 요청을 보낼때 인증 처리하기 위해서 IAM 계정

서비스 탭에 IAM을 클릭하고 사용자 생성 다음 다음 눌러서
이후에 계정을 클릭
보안 작업 증명 > 엑세스 키 관리에 키 생성 (Command Line Interface(CLI))

권한이 X 계정

aws 설치 파일에 config 설정 파일의 내용을 읽어서 요처을 보낸다.
1. 사용자의 액세스 키
2. 액세스키의 비밀키
3. 인스턴스를 생성할 리전
4. 출력의 형태를 정한다. json의 형태를 가장 많이 쓴다.

```sh
aws configure
```

정책 권한 추가
AmazonAppFlowFullAccess

EC2 인스턴스 생성해보기
1. 키페어
```sh
aws ec2 create-key-pair --key-name myKeyStudy --query 'KeyMaterial' --output text > myKeyStudy.pem

# 읽기 권한을 변경
chmod 400 myKeyStudy.pem

# ec2 인스턴스 생성하기 위한 AMI
aws ec2 describe-images --owners amazon --filters "Name=name, Values=amzn2-ami-hvm-*-x86_64-gp2" --query "Images[*].[ImageId,Name]" --output table

# ec2의 보안그룹 생성
aws ec2 create-security-group --group-name myStudyGroup --description "study"

## 보안 그룹 아이디 "GroupId": "sg-0531e18d5c9a9573d"

## 보안 그룹에 규칙 설정
> 접속 아이피 허용 포트번호 허용

aws ec2 authorize-security-group-ingress --group-name myStudyGroup --protocol tcp --port 22 --cidr 0.0.0.0/0

# EC2 생성
aws ec2 run-instances --image-id ami-01d0b412b1ee1415c --instance-type t2.micro --key-name myKeyStudy --security-groups myStudyGroup

## ec2 리스트 확인
aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress]" --output table 

# ec2에 연결
ssh -i myKeyStudy.pem ec2-user@내아이피
```

## ECR Docker 이미지를 저장하고 관리할수 있는 AWS 서비스
## EBL 로드밸런서 설정 
# S3 버킷
## CloudWatch 모니터링 어플리케이션 성능 추적 오류 발생 징후 알림
## CI/CD 구축