import {Route, Routes} from 'react-router-dom'
import './App.css'
import axios from "axios"
import Home from '../Home/Home'
import Login from '../Login/Login'
import BeasiswaSMA from '../Beasiswa/BeasiswaSMA'
import Signup from '../Signup/Signup'
import Tentang from '../Tentang/Tentang'
import BeasiswaDN from '../Beasiswa/BeasiswaDN'
import BeasiswaLN from '../Beasiswa/BeasiswaLN'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Tentang' element={<Tentang />} />
      <Route path='/BeasiswaSMA' element={<BeasiswaSMA />} />
      <Route path='/BeasiswaDN' element={<BeasiswaDN />} />
      <Route path='/BeasiswaLN' element={<BeasiswaLN />} />
    </Routes>
  )
}

export default App
