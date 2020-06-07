import React from 'react'

import { Game } from './components'
import { StateProvider } from './store'

const App = () => {
  return (
    <StateProvider>
      <Game />
    </StateProvider>
  )
}

export default App
