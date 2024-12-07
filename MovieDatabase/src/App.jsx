import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='bg-gray-900 text-white min-h-screen'>Movie Database</h1>
      </div>
    </>
  )
}

export default App
