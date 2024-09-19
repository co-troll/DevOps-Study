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