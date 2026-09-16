import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>🚀 Git CI/CD Demo</h1>
      <p className="subtitle">Hello World! from React</p>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Click the button to increment the counter.
        </p>
      </div>

      <div className="info">
        <h2>About This Demo</h2>
        <ul>
          <li>✅ Built with React + Vite</li>
          <li>✅ Automated testing with Vitest</li>
          <li>✅ Code linting with ESLint</li>
          <li>✅ CI/CD pipeline with GitHub Actions</li>
        </ul>
      </div>

      <footer>
        <p>This app is automatically tested and deployed via GitHub Actions</p>
      </footer>
    </div>
  )
}

export default App
