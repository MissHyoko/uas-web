import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Beasiswa from '../Beasiswa/BeasiswaSMA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Beasiswa />
    </>
  )
}

export default App
