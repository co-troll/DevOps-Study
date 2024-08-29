# react query v5
> 이름이 tanstack query로 변경이 되었는데
> 리액트에서만 사용하는게 아니라 vue solid 등등
> 다른 프레임워크에서도 지원을 포함하게 되었다.
> 생태계 확장이 된것

## react query의 목적
> 패치와 캐시의 서버 데이터를 관리를 해주는 라이브러리
> 비동기의 과정을 도와주는게 목적인 라이브러리
> 리액트에서 서버의 상태를 가져오고 캐싱해서 지속적인 패칭을 막아준다.

- 캐싱 : 특정 데이터의 내용을 메모리에 저장해서 동이한 내용의 접근의 속도를 높이는 것. 서버의 부하를 줄이는 결과
- 최신 데이터인지를 확인하고 캐시 메모리를 다뤄야한다.

- 최신 데이터는 요청을 보낸 직후 fresh한 데이터 상태가 되고 정해진 시간이 지나면 썩은 데이터 stale한 데이터 상태가 되면 다시 refresh를 해서 새로운 데이터를 가져올수 있는 상태가 된다.

- fresh 상태와 stale 상태는 react query에서는 staleTime와 cacheTime(v4 이전의 이름 현재는 gcTime)의 값을 사용한다.

- 패칭 이후 fresh 상태의 데이터가 생기고 staleTime이 지나면 stale 상태의 데이터로 변한다. 이후에 refresh를 할수 있는 데이터의 상태

- gcTime은 데이터가 inactive 화면에 보이고 있는 상태 일때 캐시된 데이터가 상주할 시간 gcTime의 시간 만큼만 데이터가 유지된다.

- gcTime이 남아있는 경우 데이터를 참조하게 되면 fetch하는 동안 보여주는 데이터가 된다. 이전의 캐시데이터를 보여주다가 fetch가 되고 이후에 최신 데이터를 가져와서 보여준다.

## tanstack query의 상태

> fetching (staleTime start) -> fresh (staleTiem end) -> stale -> inactive (gcTime end) -> 캐시 메모리 삭제

- fresh : 신선한 데이터 상태 재요청이 불가능하다.
- stale : 썩은 데이터 상태 데이터의 재요청이 가능하다.
- inactive : 화면에 데이터가 보이는 상태 gcTime이 지나면 가비지 컬렉터에서 수집에서 제거해준다.

## tanstack query의 상태 관리와 기능
> 서버데이터의 상태 관리하는 라이브러리
1. 캐싱
2. 동일한 데이터의 중복 요처을 단일 요청으로 만들 수 있다.
3. 오래된 데이터의 업데이트 
4. 데이터가 얼마나 상주하는지 알 수 있다.
5. 서버의 상태의 메모리 관리 및 가비지 수집의 관리

## tanstack query 설치

```sh
npm i @tanstack/react-query
```

## tanstack query 사용

```js
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// 속성을 정의하고
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // 썩는 시간을 주는 옵션 기본값 : 0
      // gcTime: 100000, // 기본값 : 5분
      retry: 0, // 요청이 실패하면 몇번 재요청하고 오류를 발생시킬지
    },
  },
})

// QueryClientProvider의 client 키의 값을 전달 
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

```

## dev tools 설치

```sh
npm i @tanstack/react-query-devtools
```

## tanstack query count
> src 폴터에 api 폴더 만들고
> 경로를 api 폴더로 이동

```sh
npm init -y
npm i express cors
```

### useQuery
> 서버에 get의 요청을 보낼때 사용
> 요청 메서드가 get메서드를 요청 보낼때 사용하는 hook

```js
import { useQuery } from '@tanstack/react-query';

const Count = () => {
    // useQuery
    // 첫번째 매개변수가 고유의 키값 유니크 키가 될 배열(해당 요청의 의존서을 가지고 잇는 변수를 같이 넣어주면 좋다.)
    // 두번째 매개변수 api 비동기 요청 함수
    // 세번째 매개변수 옵션 객체의 내용(로딩, 성공, 실패 시 호출할 함수의 내용)
    const obj = useQuery({});
}
```

- data : 쿼리 함수에서 반환한 값
- dataUpdatedAt : 
- error : 쿼리함수에서 오류가 발생하면 오류 객체가 할당
- errorUpdateCount : 
- errorUpdatedAt : 
- failureCount : 
- failureReason : 
- fetchStatus : 
- isError : 
- isFetched : 
- isFetchedAfterMount : 
- isFetching : 
- isInitialLoading : 
- isLoading : 로딩 중 상태일경우 true false
- isLoadingError : 
- isPaused : 
- isPending : 요청 대기 상태일 경우 true false
- isPlaceholderData : 
- isRefetchError : 
- isRefetching : 
- isStale : 썩었는지 true false
- isSuccess : 성공의 여부 true false
- refetch : 쿼리를 수동으로 다시 호출하는 메서드 직접 호출에서 업데이트를 할수 있는 메서드
- status : 로딩중인지 성공인지 에러인지 문자열을 반환

```js
const obj = useQuery(
    {queryKey: ["count"], queryFn: async () => {
      return await axios.get('http://localhost:4000/count');
    },
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    enabled: false,
    retry: 10,
    select: (data) => {
      return data.map((i) => i);
    },
  })
// refetchONMount : 데이터가 썩은 상태가 되면 mount마다 refetch를 시행
// 기본값이 true
// always로 설정하면 마운트마다 refetch를 실행
// false값이 들어가면 최초에 fetch를 진행하고 refetch를 하지 않음

// refetchOnWindowFocus : 브라우저가 포커싱 될때마다 refetch를 실행하는 옵션
// 기본값이 true
// always로 설정하면 포커싱 될때마다 refetch

// enabled : 쿼리가 자동으로 실행되지 않도록 설정
// enabled false로 하면 isPending가 true
// 원할때 refetch 메서드를 호출

// retry : 몇번 재시도 할지 오류가 발생하면 

// select : queryFn에서 반환한 데이터를 매개변수로 바아서 data키에 값을 할당해준다.
```

### useMutation
> tanstack-query에서 post 요청을 하는 경우 사용하는 hook
> 값을 전달해서 요청의 내용으로 포함시켜서 쿼리의 내용을 처리하기위해서 사용