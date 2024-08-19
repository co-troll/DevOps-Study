import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ children, loginInfo }) => {
  // 태그의 선택 3가지의 방법
  // 첫째 form으로 했을때 name값을 활용
  // 둘째 상태변수로 선언해서 onchange가 될때마다 상태변수 업데이트
  // ref를 사용하는방법 태그 선택

  // ref 초기화
  // 태그의 레퍼런스
  // 태그의 인스턴스에 접근 할 수 있게 해주는 레퍼런스
  // 초기의 인스턴스에 접근 하기 전에 할당할 초기값
  // 이제는 좀 사용성이 떨어진다. 커스텀 훅을 활용하는게 좀더 좋다.
  // 상태변수로 관리하는게 좀더 효율적
  // currnet키에 인스턴스가 할당된다.
  // 초기값에 인스턴스가 할당된다.
  const uidInput = useRef(null);
  const upwInput = useRef(null);

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const user = {
      uid: "soon",
      password: "123"
    }
    if (user.uid === uidInput.current.value && user.password === upwInput.current.value) {
      loginInfo.setLoginInfo(user);
      navigate('/mypage');
    }
  }

  useEffect(() => {
    console.log(uidInput.current.value);
  }, [uidInput])

  return (
    <form onSubmit={loginHandler}>
      {children}
      <label htmlFor="">아이디</label>
      <input type="text" ref={uidInput} />
      <label htmlFor="">비밀번호</label>
      <input type="password" ref={upwInput} />
      <button>로그인</button>
    </form>
  )
}

export default LoginForm;