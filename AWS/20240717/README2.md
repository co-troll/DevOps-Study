# CI/CD
> Continuous Intergration, Continuous Deployment
> 우리가 코드를 깃에 푸시 풀 받아서 서버 대기상태
> 쉽게 말해서 테스트(test), 통합(merge), 배포(Deploy)를 자동화

## CI/CD 과정
작업자 > 커밋, 푸쉬 > 빌드 테스트 > 배포

## 서비스를 운영
> 서비스를 운영 배포 하다보면
> 기능이 번번히 새로운 기능이 추가되는데 업데이트가 되는데
> 우리가 새로 작성하는 코드를 커밋 푸시 풀 브런치에서 병합하고 aws 가상서버에
> 코드내용을 받고 쉘로 다시 실행하고 하면 생각보다 귀찮음

## 자동화
> 그래서 위의 과정이 너무 번거롭기 때문에 이런 반복되는 것 과정을 자동화 시킨것

## github-Actions
> 우리는 CI/CD 환경 구축을 빌드 서버도 제공해주고 무료인 github-Actions
- 장점
  1. 빌드용 서버가 따로 필요 없음(빌드 서버 세팅으로 시관과 돈을 쓸 필요가 없다.) 우분투 환경을 제공해줌 인스턴스에서 빌드를 할때 메모리가 부족한 문제도 빌드를 해서 빌드파일을 올리게 되면 메모리를 절약할수 있다. 즉 돈을 절약
  2. github와 통일된 환경에서 CI가 수행이 가능하다.
  3. Yaml 파일을 이용해서 간단하게 로직을 작성할수 있다. runner 가상 머신 
  4. Yaml 파일로 간단한 파이프라인 구성 
  > `파이프 라인` : 작업들을 순차적으로 수행하는것
  > 소프트웨어 개발에서 코드를 빌드하고 테스트하고 배포하는 단계를 자동화한 흐름

CI/CD의 파이프 라인은 작업을 자동화하고 개발의 속도 증진 및 품질이 좋다.
1. 코드 커밋, 푸쉬
2. 푸쉬 이벤트를 보고 CI 서버 트리거 호출
3. 코드 빌드
4. 자동화 테스트 실행
5. 배포 준비
6. 배포
7. 모니터링

## github actions의 가상 머신 구조
> 코드 커밋, 푸쉬 -> 푸쉬 이벤트를 github actions가 감지하고 CI/CD 로직 실행 -> 배포(aws)

> 이런 빌드 테스트 배포 작업을 github actions는 러너 라고 부르는 가상 머신이 컨테이너에서 실행된다.
> github actions의 러너는 별도으 ㅣ서버 없이 자동화 작업을 제공한다.
> 러너는 사용자가 원하는 운영체제를 제공한다. 윈도우 맥os 리눅스 우분투 등
> `자동 스케일링` 으로 리소스를 효율적으로 사용할수 있다.
> nodejsm python, java 등의 런타임 환경이 설치되어 있다 빠르게 빌드 테스트가 가능하다

`자동 스케일링`은 클라우드 컴퓨팅 환경에서 사용되는 기술 컴퓨팅 자원의 양을 자동으로 조정할수 있다는 것을 의미

## 폴더 구조
> 깃의 원경 커밋과 푸쉬를 할때
.github
- workflows
-- yml 파일을 하나 만들어야한다

## github actions 사용
```yml
name: GitHub Actions Demo
run-name: ${{ github.actor }} is testing out GitHub Actions 🚀
on: [push]
jobs:
  Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
      - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
      - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
      - name: Check out repository code
        uses: actions/checkout@v4
      - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
      - run: echo "🖥️ The workflow is now ready to test your code on the runner."
      - name: List files in the repository
        run: |
          ls ${{ github.workspace }}
      - run: echo "🍏 This job's status is ${{ job.status }}."

```

## aws ec2에 쉘 스크립트를 실행
> ec2에 ssh 커넥션을 맺고 쉡 스크립트 실행
```yml
name: CI/CD 구축

on:
  push:
    branches:
      - main

jobs:
  Deploy:
    runs-on: ubuntu-lastest
    steps:
      - name: checkout
        uses: actions/checkout@v4 # uses 사용할 라이브러리

      - name: ssh key
        uses: webfactory/ssh-agent@v0.5.3
        with: # 작성할 속성을 정의
          ssh-private-key: ${{ secrets.AWS_SECRET_KEY }}

      - name: ssh ec2 접속
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.AWS_SECRET_KEY }}
          port: ${{ secrets.PORT }}
          script: | # 실행할 스크립트
            cd /home/ubuntu/study
            npm start

```

## 찐 최종 nestjs 빌드해서 빌드 파일 올리고 무중단 배포
```yml
name: last nest deploy

on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: checkout
        use: actions/checkout@v4
    
      - name: set up node
        use: actions/setup-node@v4

      - name: create .env
        run: |
          "${{ secrets.MY_KEY }}" > .env

      - name: nam install # 의존성 설치 npm audit fix || true 보안 취약점을 자동으로 유연하게 수정해서 실패해도 일단 빌드 진행하면서 의존성 유연하게 설치
        run: |
          npm install
          npm audit fix || true

      - name: build nestjs
        run: |
          source .env
          npm run build

      - name: build output # ls -la dist dist폴더 안의 내요을 상세하게 출력 pwd 현재 작업 경로 출력
        run: |
          ls -al dist
          pwd

      - name: Upload build artifacts # 빌드 준비 단계 업로드 하기전 단계
        uses: actions/upload-artifact@v4
        with:
          name: build-artifacts
          path: dist/

      - name: ssh key
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.AWS_SECRET_KEY }}" > ~/.ssh/aws_key
          chmod 600 ~/.ssh/aws_key
          ssh-keyscan -H ${{ secrets.HOST }} >> ~/.ssh/known_hosts
          cat ~/.ssh/known_hosts

      - name: debug artifacts
        run: |
          ls -al .dist
    
      - name: ec2 deploy
        uses: appleboy/ssh-action@v1.0.3
        with: 
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.AWS_SECRET_KEY }}
          port: ${{ secrets.PORT }}
          script: | # 실행할 스크립트
            cd ~/study
            rm -rf dist
            mkdir dist
    
      - name: ec2 artifacts copy
        run: |
          scp -r -i ~/.ssh/aws_key ./dist/* ${{ secrets.USERNAME }}@${{ secrets.HOST }}:/home/ubuntu/study/dist/

      - name: deploy to ec2
        uses: appleboy/ssh-action@v1.0.3
        with: 
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.AWS_SECRET_KEY }}
          port: ${{ secrets.PORT }}
          script: |
            cd ~/study
            pm2 reload system.config.js --env production
            

```