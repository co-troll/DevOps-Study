import { useCallback, useState } from 'react';

export const Callback = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleInrement = useCallback(() => {
    setCount(prev => prev + count2)
  }, [count2])

  const handleInrement2 = useCallback(() => {
    setCount2(prev => prev + 1)
  }, [])

  return (
    <>
      <div>
        count : {count}
        <button onClick={handleInrement}>count 증가</button>
      </div>
      <div>
        count2 : {count2}
        <button onClick={handleInrement2}>count2 증가</button>
      </div>
    </>
  )
}