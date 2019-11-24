import React, { useState, useEffect } from 'react'

const App = () => {
  const initialCount = +localStorage.getItem('storageCount') || 0
  const [count, setCount] = useState(initialCount)

  // console.log('Does it render?') // yes x2
  // console.log(`My count is ${count}!`) // 0 → 1

  const handleIncrement = () => setCount((currentCount) => currentCount + 1)

  const handleDecrement = () => setCount((currentCount) => currentCount - 1)

  useEffect(() => localStorage.setItem('storageCount', count), [count])
  // depsが[]のとき → call when FC did mount
  // depsにcountを入れた → countの更新ごとに呼ばれる

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  )
}

export default App
