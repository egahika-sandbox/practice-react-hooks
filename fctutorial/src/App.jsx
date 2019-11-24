import React from 'react'
import './App.css'

import Greeting from './components/greeting'
import Hello from './components/OverrideComponentFunction'
import Counter from './components/Lifecycle'

const App = () => {
  return (
    <div>
      <Greeting />
      <Hello />
      <Counter />
    </div>
  )
}

export default App
