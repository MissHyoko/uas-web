import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Beasiswa from '../Beasiswa/BeasiswaSMA'
import BI from '../Beasiswa/SMA/BI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BI />
    </>
  )
}

export default App
