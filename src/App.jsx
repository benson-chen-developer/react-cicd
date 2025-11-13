import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Whats good Benson Chen!</h1>
      <h1 data-testid="title">React Test Demo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          increment
        </button>
        <p data-testid="count">count is {count}</p>
      </div>
    </>
  )
}

export default App
