import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from "./pages/Home/Home.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home/>
        {
          /*
            1. Set Catagory page
            2. Set Product Page and its features
            3. Set Product Cart Page and its feature
            4. Set Authentication
          */
        }
      </div>
    </>
  )
}

export default App
