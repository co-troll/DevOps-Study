import React, { useEffect, useState } from 'react'
import Player from '../components/Player';
import { rock, scissors, paper } from './../image'

const Game = () => {
  const [playerSelect, setPlayerSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("대기");

  // 결과를 도출하기 위해서 필요한 데이터의 값과 이미지 둘다 필요한 상황
  // 객체로 두가지의 값을 다루자
  const select = {
    scissors: {
      name: "가위",
      img: scissors
    },
    rock: {
      name: "바위",
      img: rock
    },
    paper: {
      name: "보",
      img: paper
    }
  }

  const handlerComSelect = () => {
    const temp = Object.keys(select);
    console.log(temp);
    const selectCount = Math.floor(Math.random() * 3);
    console.log(selectCount);

    const string = temp[selectCount];

    setComSelect(select[string]);
  }

  const handlerPlayerSelect = (_select) => {
    console.log(_select);
    console.log(select[_select]);
    setPlayerSelect(select[_select]);
    handlerComSelect();
  }

  // 결과 
  const handlerResult = () => {
    // 플레이어
    // 가위 === 가위 = 무승부
    // 가위 === 바위 = 패
    // 가위 === 보 = 승

    // 바위 === 바위 = 무승부
    // 바위 === 가위 = 승
    // 바위 === 보 = 패

    // 보 === 보 = 무승부
    // 보 === 가위 = 패
    // 보 === 바위 = 승

    if (playerSelect.name === comSelect.name) {
      setResult("무승부");
    } else if (playerSelect.name === "가위") {
      const result = comSelect.name === "보"? "이겼다": "졌다";
      setResult(result);
    } else if (playerSelect.name === "바위") {
      const result = comSelect.name === "가위"? "이겼다": "졌다";
      setResult(result);
    } else {
      const result = comSelect.name === "바위"? "이겼다": "졌다";
      setResult(result);
    }
  }

  useEffect(() => {
    if(comSelect === null) 
      return
    handlerResult();
  }, [comSelect])

  return (
    <div className='game-board'>
      <Player name='플레이어' select={playerSelect} result={result} />
      <Player name='컴퓨터' select={comSelect} result={result} />
      <div>
        <button onClick={() => handlerPlayerSelect("scissors")}>가위</button>
        <button onClick={() => handlerPlayerSelect("rock")}>바위</button>
        <button onClick={() => handlerPlayerSelect("paper")}>보</button>
      </div>
    </div>
  )
}

export default Game;