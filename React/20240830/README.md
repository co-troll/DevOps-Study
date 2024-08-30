# Infinite Queries
> 무한으로 데이터를 포현할때 무한스크롤이나 더보기 같은 요청 로직을 처리할때 사용하면 좋다.

> 캐시 메모리 관리도 유용하다.

```sh
npm i @tanstack/react-query
npm i @tanstack/react-query-devtools
```

```js
import { useInfiniteQuery } from '@tanstack/react-query';
const { 
        data, // 요청에 따른 값을 할당
        hasNextPage, // 다음 페이지가 존재하는지 여부 boolean
        fetchNextPage,  // 다음 페이지로 이동하는 요청
        isFetchingNextPage, // 다음 페이지를 로딩하는 중 여부 boolean
    } = useInfiniteQuery({
    queryKey: ['pagenation'], // 고유의 유니크 키 캐시메모리 관리로 내부적으로 사용
    queryFn: apiFn, // 요청 비동기 함수
    initialPageParam: 1, // 요청의 값의 초기값 예) 페이지 넘버
    // lastPage : 마지막으로 가져온 내용
    // allPages : 지금까지 가져온 전체 페이지
    getNextPageParam: (lastPage, allPages) => { 
        return allPages.length < 10 ? allPages.length + 1 : undefined;
    }
});
```

# jotai