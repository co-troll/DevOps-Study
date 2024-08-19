import Login from "./components/Page/Login/Login";
import Main from "./components/Page/Main/Main";
import { Routes, Route, Navigate } from 'react-router-dom';
import MyPage from "./components/Page/MyPage/MyPage";
import { useState } from "react";
import Detail from "./components/Page/Detail/Detail";
import Shop from "./components/Page/Shop/Shop";

function App() {
  // 전역에서 필요한 로그인 정보 모든 컴포넌트가 필요함
  // 전역 상태 배우기 전에 전역 상태를 뭐뭐를 사용해야할까 설계를 하는 사고를 키우자

  // 컴포넌트가 컴포넌트를 반환
  // 리다이렉트를 시키는 컴포넌트
  // 고차 컴포넌트
  const [loginInfo, setLoginInfo] = useState(null);

  const Redirect = () => {
    if (loginInfo) 
      return (<MyPage loginInfo={loginInfo} />)
    return (
      <Navigate to={'/login'} />
    )
    
  }

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login loginInfo={{ loginInfo, setLoginInfo }} />} />
        <Route path="/mypage" element={<Redirect />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail/:num" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
