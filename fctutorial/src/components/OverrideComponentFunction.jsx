import React from 'react'

const App = () => {
  const sayHello = () => setTimeout(() => console.log('Hello'), 1000)

  return <Button handleClick={sayHello} />
}

const Button = ({ handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      Button
    </button>
  )
}

Button.defaultProps = {
  handleClick: () => console.log('Default'),
}

export default App
