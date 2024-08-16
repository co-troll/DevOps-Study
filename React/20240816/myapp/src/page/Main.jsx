import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/boomGame");

  }

  return (
    <div>
        메인 페이지
        <Link to={'/boomGame'}>boom 페이지로 이동</Link>
        <button onClick={handler}>boom 페이지로 이동</button>
        <Link to={'/rockGame'}>rock 페이지로 이동</Link>
    </div>
  )
}

export default Main

// boom 게임을 화살표 함수 컴포넌트로 만들고
// 메이페이지, boom페이지. 게임 오버 페이지
// 메인페이지에서 게임시작을 누르면 3 2 1 게임 페이지로 전환
// 플레이르 하다가 게임오버 페이지 점수를 보여줄것
// 재시작 버튼 누르면 다시 메인페이지