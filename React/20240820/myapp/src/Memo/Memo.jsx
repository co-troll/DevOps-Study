import React, { useMemo, useState } from 'react';

const Memo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(count + 1);
    // setState에서 제공된 상태변수를 변경할수 있는 메서드는
    // 매개변수의 타입을 검사한다.
    // 함수의 타입이 들어오면 매개변수로 이전에 값을 할당해준다.
    // 함수면 반환하는 값을 저장
    setCount((e) => e + 1);
  }

  const [immutableCount , setImmutableCount] = useState(0);
  // 동일한 연산을 하지 않게 하기 위애서 메모를 사용하자
  // 함수르 하나
  const value = useMemo(() => {
    console.log("메모 호출됨?");
    return <h1>value : {immutableCount}</h1>;
  }, [count])

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={increment}>증가</button>
      {value}
    </div>
  )
}

export default Memo;