import React, { useState } from 'react'

const App = () => {
  const [greeting, setGreeting] = useState('Hello Function Component!')
  const handleChange = (event) => setGreeting(event.target.value)
  return (
    <div>
      <Headline headline={greeting} />
      <Input type="text" value={greeting} onChangeInput={handleChange}>
        Set Greeting:
        {/* → children = "Set Greeting:" */}
      </Input>
    </div>
  )
}

const Headline = ({ headline }) => <h1>{headline}</h1>

const Input = ({ value, onChangeInput, children }) => (
  <label>
    {children}
    <input type="text" value={value} onChange={onChangeInput}/>
  </label>
)

export default App
