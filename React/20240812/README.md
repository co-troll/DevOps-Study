# babel
# webpack

## babel
- 자바스크립트 코드를 변환해준다. ES6 -> ES5
- 자바스크립트 컴파일

## babel의 목적
- 자바스크립트 문법이 진화를 꾸준히 하면서 ES5 -> ES6로 문법이 개발되고
- ES6 문법이 개발되면서 많은 모듈이 생겼는데 ES5에서 개발한 모듈을 모두 ES6로 직접 작성해서 수정하기에는 무리가 있어서
- ES6를 ES5로 트랜스파일을 해서 사용하게 되었다.
- 손으로 일일히 수정하기에는 무리가 있기 때문에 탄생하게 되었다.

## babel commonjs ES6 문법

common.js
```js
// a.js
const text = "hello";
const text2 = "hello2";

module.export = { text, text2 };

// b.js
const { test, test2 } = require("./a.js");
```

ES6
```js
// a.js
const text = "hello";
const text2 = "hello2";

export { text, text2 }; // 여러개 구조분해
export default text; // 한개만 내보낼 경우 export로 여러개 내보낸 경우 같이 사용 불가

//b.js
import { text, text2 } from "./a.js"; // export { text, text2 } 경우
import MyText from "./a.js"; // export default text; 경우
```
ES6 문법은 우리가 개발환경에서 편하게 작성하기 위해서 사용하는 문법

### babel 사용
- babel은 기본적으로 자바스크립트로 구성되어있다.
- npm으로 설치를 해서 사용

```sh
# --save-dev === -D : 개발 의존성 설치
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

### babel의 환경 설정
- 변환을 하기전에 우리가 원하는 형태로 변환하기 위해서 설정이 필요하다
- .babelrc 파일을 만들어서 속성 설정값을 작성

```json
// .babelrc
{
    "presets": ["@babel/preset-env"] // 기본 설정 preset 설정
}
```

> babel 컴파일
```sh
npx babel "변환할 파일의 경로" --out-file "변환을 해서 내보낼 경로"
// 예 app.js
npx bable app.js --out-file dist/app.js
```

> babel 컴파일 es6 commonjs 모듈 시스템
```sh
npm install -D @babel/core @babel/cli @babel/plugin-transform-modules-commonjs
```

> babel 컴파일 JSX 문법 -> javascript 문법
```sh
npm install -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

## babel의 사용 목적
- 자바스크립트 컴파일러 es6 jsx 문법 같은 자바스크립트 문법을 트랜스파일해서 브라우저에서 이해 할수 있는 자바스크립트의 문법으로 변환한다.

## webpack의 사용 목적
- 모듈 번들러의 역할을 해준다. 번들ㄹ이 한다 여러개의 자바스크립트 파일 css등등을 작업한 내용의 파일을 하나의 번들 파일로 묶어준다. 번들링의 이점 프로젝트의 실행 속도가 빨라진다.
- react는 webpack을 사용해서 작업 파일을 번들로 묶어서 배포를 진행

## 모듈 번들러
- 웹을 구성할때 다양한 파일과 기능을 작성한 작업파일을 가지고 웹페이지를 그리는데 최소한의 파일만 가지고 컴파일을 진행한다.(웹페이지의 로딩 속도를 개선)
- 모듈 : 프로그램을 구성하는 구성요소
- 번들러 : 의존성이 있는 모듈 코드를 파일로 만들어준다. 파일을 하나로 만들어 주는 역할

## webpack의 속성
1. entry : 진입점 지정, 시작점으로 사용할 모듈을  webpack에 알려줌
2. output : 번들링해서 내보내는 경로
3. loaders : 번들링 중에 모듈의 소스 코드에 적용되는 자바스크립트나 css 파일을 이떻게 처리할건지
4. plugins : 추가로 사용한 플러그인을 사용 html파일 생성, 번들을 최적화, 환경변수 세팅 등등

## webpack 실행
```sh
npm install -D webpack webpack-cli
npx webpack
```

## style 설정
```sh
npm install -D webpack webpack-cli css-loader style-loader
```

## webpack jsx babel 설정
```sh
# jsx -> js babel 변환 html 생성
npm install webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin react react-dom
```