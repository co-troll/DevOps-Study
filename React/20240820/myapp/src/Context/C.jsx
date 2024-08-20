import React, { useContext } from 'react'
import { Store } from './Context'

const C = () => {
  const { login, setLogin } = useContext(Store);
  const handler = () => {
    setLogin("111")
  }
  return (
    <div>
      <button onClick={handler}>클릭</button>
    </div>
  )
}

export default C