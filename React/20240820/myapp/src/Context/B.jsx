import React from 'react'
import C from './C'
import { Store } from './Context'

const B = () => {
  return (
    <div>
      <C />
      <Store.Consumer>
      {({ login, setLogin }) => <h1>{login}</h1>}
      </Store.Consumer>
    </div>
  )
}

export default B