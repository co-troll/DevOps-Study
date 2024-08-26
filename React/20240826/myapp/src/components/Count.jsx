import { useRecoilState } from 'recoil';
// useState와 동이하게 value와 setState를 둘다 제공
import { countState, paginationState } from './recoil/countAtom';

export const Count = () => {
    const [count, setCount] = useRecoilState(countState);
    const [pagination, setPagination] = useRecoilState(paginationState);

    const increment = () => {
        setCount({ ...count, num: count.num + 1 });
    }

    const decrement = () => {
        setCount({ ...count, num: count.num - 1 });
    }

    const pageIncrement = () => {
      setPagination();
    }
    
    return (
      <>
        count: {count.num}
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        페이지: {pagination}
        <button onClick={pageIncrement}>페이지 증가</button>
      </>
    )
}