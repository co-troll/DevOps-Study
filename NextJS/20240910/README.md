# nextjs 배포 최적화
> 웹에서 가장 무거운 것이 이미지인데 이미지가 웹의 용량의 절반이상을 차지
> 이미지를 최적화 처리를 해서 배포를 하는 것이 효율적이다.

## 이미지 최적화 방식

1. lazy loading
  > 유저가 웹에 접속하고 첫화면에 보이는 이미지부터 로드를 진행하고
  > 스크롤을 진행해서 이미지가 보이게 될때까지 로드를 지연시키는 것.
2. 이미지의 사이즈를 기기에 맞게 로드
  > 여러 해상도로 브라우저 또는 모바일에 유저가 사용하는 기기의 화면 사이즈에 따라서 이미지를 로드하는 방식
3. 확장자 변경 (webp, avif)
  > webp : 구글에서 개발한 이미지 형식 jpeg나 png와 비교해서 더 높은 압축이 되어있다. 웹 성능에 최적화된 이미지 형식
  > avif : 비디오 코덱을 기반으로 이미지 포맷 webp 보다 높은 압축을 제공하는데 브라우저의 지원 범위가 적을수 있는 단점..
4. blur image 
  > 이미지를 전부 로드하기 전에 저해상도의 이미지를 먼저 보여주고 이후에 원본 이미지를 로드해서 로딩이 매끄럽게 보일수 있게 한다.
5. 이미지 캐싱
  > 로드를 반복해서 하지 않고 캐시된 이미지 사용
6. 이미지 스프라이트
  > 여러 작은 이미지를 모두 합쳐서 큰이미지로 만들어서 사용
7. CSS 이미지 최적화
  > background-position을 사용해서 하나의 이미지를 사용하고 이미지의 영역을 필요한 영역만큼 보여줘서 처리

## nextjs image components
> nextjs에서 제공하는 Image 컴포넌트는 우리가 별도로 코드를 작성해서 이미지를 최적화 할 필요 없이 기본적으로 이미지 최적화를 제공한다.
> Image 컴포넌트를 사용하면 확장자 변경(webp, avif)이 기본으로 된다.(만약 브라우저에서 확장자를 지원하지 않으면 원본이미지 확장자 제공)

1. 확장자는 기본으로 webp, avif로 제공
```js
import Image from "next/image";
<Image src="이미지 경로" width={100} height={100} alt="이미지 설명" />
```

2. 기기에 맞는 화면 사이즈
> srcset 속성과 size 속성을 활용해서 기기의 크기에 맞는 이미지를 로드 해줘야하는데
> nextjs Image컴포넌트가 기능을 제공해준다 반응형 이미지 기능을 제공 뷰포트 크기와 해상도에 맞는 이미지를 설택해서 로드해준다.
> layout="responsive"을 전달해주면 된다.

```js
<Image src="이미지 경로" width={100} height={100} layout="responsive" alt="이미지 설명" />
```

3. lazy loading
> Image 컴포넌트에서 lazy loading 속성을 제공
> loading="lazy"을 추가해주면 된다.


```js
<Image src="이미지 경로" width={100} height={100} layout="responsive" loading="lazy" alt="이미지 설명" />
```

4. blur image
> image 태그의 입력하기 전에 설명이 보이는것 처럼 로드되기 전에 화면에 저해상도 이미지가 보이는것 placeholder="blur"

```js
<Image src="이미지 경로" width={100} height={100} layout="responsive" loading="lazy" placeholder="blur" alt="이미지 설명" />
```

5. 이미지 캐싱
> nextjs는 기본적으로 이미지를 최적화할때 브라우저 캐싱을 제공한다.

## 외부에 api에서 이미지를 불러오는 경우
> nextjs 서버에서 도메인을 확인하고 이미지를 가져오는데
> 도메인 허용
> next.config.mjs
```js
const nextConfig = {
    images: {
        // 허용할 도메인
        domains: ["http://127.0.0.1"]
    }
};
```

## jotai
> 전역 상태 머신
> hook의 형태로 사용 가능

## 설치
```sh
npm i jotai
```

> 스토어 생성
```js
import { atom } from "jotai";

// atom 함수 호출 반환받은 객체가 스토어
// atom 함수를 호출할때 전달한 매개변수가 초기값
export const myStore = atom(0);
```

> 전역상태 조회 수정
```js
import { myStore } from "/store";
// useAtome은 반환값으로 전역사애틔 값과 setState 메서드를 제공해준다.
// useAtom 함수를 호출할때 매개변수로 가져올 전역상태
const [count, setCount] = useAtom(myStore);
```

### 실습
> 어제 만든 로그인 페이지 Image 컴포넌트 사용으로 변경
> jotai를 사용해서 로그인 시 전역상태로 로그인 정보 저장