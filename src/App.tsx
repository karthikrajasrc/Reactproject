import { useState } from "react"


const App = () => {

  const [Counter, setCounter] = useState({ count: 0, history: []});

  const handleIncrease = () => {
    setCounter({ count: Counter.count + 1, history: [...Counter.history, "I"] })
  }

  const handleDecrease = () => {
    setCounter({ count: Counter.count - 1, history: [...Counter.history, "D"] });
  }

  return (
    <div>
      <h1>Count: {Counter.count} </h1>
      <h2>History:{Counter.history.join(" ")} </h2>
      <button onClick = {handleIncrease}>Increase</button> &nbsp;
      <button onClick = {handleDecrease}>Decrease</button>
    </div>
  )
}

export default App
