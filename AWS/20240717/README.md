# AWS
## 포트포워딩
## 프로시 설정 nginx
## CI/CD githubActions 



## aws ec2 프로젝트 업로드
> git init 초기화 하고
> git remote add origin [주소]
> git pull origin main
> 유저 권한 인증
> 유저 이름 : 깃헙 이름
> 유저 비밀번호 : 깃헙 프로필 -> 설정 -> developer settings

## nodejs를 가상 서버에 설치
> sudo apt-get update
> sudo apt-get install -y build-essential # 기본프로그램 설치
> sudo apt-get install curl
> curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash --
`노드를 설치`
> sudo apt-get install -y nodejs


### 포트 포워딩
> 네트워크에서 외부의 포트로 요청을 보내면 재 매핑해서 다른 포트로 요청을 받을수 잇도록
> 공유기나 가상 서버에 적용을 할수 있따.
> 예) 80번 포트로 요처을 보냈지만 3000포트로 재매핑해서 응답을 주는것
```sh
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000
# --dport 80 80번 포트가 요처응ㄹ 받고
# -j REDIRECT --to-port 3000 3000번 포트로 패킷을 리다이랙트
# 포트포워딩 잘 되었는지 확인
sudo iptables -t nat -L --line-numbers

sudo apt-get install iptables-persistent
sudo netfilter-persistent save
sudo systemctl restart netfilter-persistent

sudo iptables -t nat -D PREROUTING [지울 번호]
```

# PM2 설치
```sh
pm2 

```
## 프록시 설정 nginx
> 포트 포워딩은 네트워크 장비 방화벽 특정 포트에서 들어오는 트래픽을 다른 포튼 ㅏ호스틀 ㅗ리다이레긑 해주는것
> 프록시 : 클라이언트와 서버 사이에 트래픽 중개 서버가 하나 있는것

### nginx를 사용해서 프록시 설정
> 통신을 할때 중간에서 대신 통신을 해주는 역할을 한다
> 중계역할을 해주는 것이 프록시 서버
> 클라이언트와 서버 사이의 중개 서버
> 클라이언트는 프록시 서버가 백엔드 서버로 알고
> 백엔드 서버는 프록시 서버가 클라이언트인줄 안다.

### 프록시 서버
1. 포워드 프록시 서버 : 클라이언트와 인터넷 접속 제어
2. 리버스 프록시 서버 : api 제어

> 리버스 프록시 서버의 응답을 받아서 처리를 해준다.(서버를 감출수 있따.)

```sh
sudo apt-get install -y nginx

sudo service nginx start
sudo service nginx status
sudo service nginx stop

# 설정 파일을 수정해야함
/etc/nignx/sites-enabled
# 기본 설정파일이 들어있음
default 파일은 가상 호스트 설정 파일

# 이부분 수정
location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                # try_files $uri $uri/ =404;

                proxy_set_header HOST $host;
                proxy_pass http://127.0.0.1:3000;
                proxy_redirect off;
        }
# proxy_set_header 클라이언트가 브라우저에서 요청을 보낸 헤더의 내용을 넘겨주겠다.
# proxy_pass 요청받은 내용을 로컬환경에 대기상태인 백엔드 서버로 요청을 보내고 응답을 받겠다.
# proxy_redirect : off SPA redirect를 없에겠다.

# nginx 설정 파일을 수저앟면 당연히 재싨행
sudo service nginx restart
```

## 도메인
> 틀정 아이피주소에 접근할 수 있는 검색어 

## AWS Route 53
> 도메인 등록 DNS 라우팅 기능을 제공한다.
> 도메인을 관리할수 있게 제공한다.   



### SSL 인증서 발급해서 https3 붙이기
> https요청을 할때 인증서를 발급ㅎ받아서 인증요청을 보내고
> 지금은 돈이 드리지 않은 certbot을 사용해서 인증서를 발급받고 인증하자
> 인증서 3개월마다 재발급 해야하며 재발급하면 이메일로 알려준다,.

> certbot nginx랑도 호환이 좋다
```sh
# snap 패키지 설치를 위한 패키지 
# core 런타임 환경 제공
sudo snap install core
sudo snap refresh core

sudo snap install --classic certbot

# certbot 실행파일에 링크 설정
sudo ln -s /snap/bin/certbot /usr/bin

certbot --version

# nginx certbot 실행
sudo certbot --nginx

# certbot 3개월마다 갱신
sudo certbot renew

# 인증서 발급 테스트
sudo certbot renew --dry-run
```
