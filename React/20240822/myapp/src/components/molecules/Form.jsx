import { getUserAction } from '../../action';
import { Button } from '../atoms/Button';
import { useDispatch, useSelector } from 'react-redux';

export const Form = () => {
  // store에 접근해서 전역상태를 참조
  // useSelector : store의 상태를 참조할 수 있게 도와주는 hook 함수
  // useSelector로 값을 참조하면 가져온 상태를 주시하게 된다.
  // 주시하고 있는 값이 변하면 해당 컴포넌트가 리랜더링
  // 매개변수로 콜백함수 전달
  // 콜백함수에서 반환된 값을 주시한다.
  const order = useSelector(state => state.orderReducer.order );
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    if (e.target.innerText === "김치볶음밥 주문") {
      // dispatch(async (dispatch, getState) => {
      //   await axios.get();
      //   dispatch({ type: "김치볶음밥", payload: {} });
      // });
      dispatch(getUserAction());
    } else if (e.target.innerText === "계란볶음밥 주문") {
      dispatch({ type: "계란볶음밥", payload: {} });
    }
  }
  return (
    <>
      <h1>{order === ""? "주문하시겠습니까?": `${order} 나왔습니다`}</h1>
      <Button onClick={handleOrder}>김치볶음밥 주문</Button>
      <Button onClick={handleOrder}>계란볶음밥 주문</Button>
    </>
  )
}