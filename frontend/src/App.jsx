import {Route, Routes} from 'react-router-dom'
import './App.css'
import axios from "axios"
import Home from '../Home/Home'
import Login from '../Login/Login'
import BeasiswaSMA from '../Beasiswa/BeasiswaSMA'
import Tentang from '../Tentang/Tentang'
import BeasiswaDN from '../Beasiswa/BeasiswaDN'
import BeasiswaLN from '../Beasiswa/BeasiswaLN'
import SMA1 from '../Beasiswa/SMA/SMA1'
import SMA2 from '../Beasiswa/SMA/SMA2'
import SMA3 from '../Beasiswa/SMA/SMA3'
import SMA4 from '../Beasiswa/SMA/SMA4'
import SMA5 from '../Beasiswa/SMA/SMA5'
import SMA6 from '../Beasiswa/SMA/SMA6'
import SMA7 from '../Beasiswa/SMA/SMA7'
import DL1 from '../Beasiswa/DL/DL1'
import DL2 from '../Beasiswa/DL/DL2'
import DL3 from '../Beasiswa/DL/DL3'
import DL4 from '../Beasiswa/DL/DL4'
import DL5 from '../Beasiswa/DL/DL5'
import DL6 from '../Beasiswa/DL/DL6'
import DL7 from '../Beasiswa/DL/DL7'
import DL8 from '../Beasiswa/DL/DL8'
import DL9 from '../Beasiswa/DL/DL9'
import DL10 from '../Beasiswa/DL/DL10'
import Signup from '../Signup/Signup'
import LN1 from '../Beasiswa/LN/LN1'
import LN2 from '../Beasiswa/LN/LN2'
import LN3 from '../Beasiswa/LN/LN3'
import LN4 from '../Beasiswa/LN/LN4'
import LN5 from '../Beasiswa/LN/LN5'
import LN6 from '../Beasiswa/LN/LN6'
import LN7 from '../Beasiswa/LN/LN7'
import LN8 from '../Beasiswa/LN/LN8'
import LN10 from '../Beasiswa/LN/LN10'
import LN9 from '../Beasiswa/LN/LN9'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Tentang' element={<Tentang />} />
      <Route path='/BeasiswaSMA' element={<BeasiswaSMA />} />
      <Route path='/BeasiswaDN' element={<BeasiswaDN />} />
      <Route path='/BeasiswaLN' element={<BeasiswaLN />} />
      <Route path='/SMA1' element={<SMA1 />} />
      <Route path='/SMA2' element={<SMA2 />} />
      <Route path='/SMA3' element={<SMA3 />} />
      <Route path='/SMA4' element={<SMA4 />} />
      <Route path='/SMA5' element={<SMA5 />} />
      <Route path='/SMA6' element={<SMA6 />} />
      <Route path='/SMA7' element={<SMA7 />} />
      <Route path='/DL1' element={<DL1 />} />
      <Route path='/DL2' element={<DL2 />} />
      <Route path='/DL3' element={<DL3 />} />
      <Route path='/DL4' element={<DL4 />} />
      <Route path='/DL5' element={<DL5 />} />
      <Route path='/DL6' element={<DL6 />} />
      <Route path='/DL7' element={<DL7 />} />
      <Route path='/DL8' element={<DL8 />} />
      <Route path='/DL9' element={<DL9 />} />
      <Route path='/DL10' element={<DL10 />} />
      <Route path='/LN1' element={<LN1 />} />
      <Route path='/LN2' element={<LN2 />} />
      <Route path='/LN3' element={<LN3 />} />
      <Route path='/LN4' element={<LN4 />} />
      <Route path='/LN5' element={<LN5 />} />
      <Route path='/LN6' element={<LN6 />} />
      <Route path='/LN7' element={<LN7 />} />
      <Route path='/LN8' element={<LN8 />} />
      <Route path='/LN9' element={<LN9 />} />
      <Route path='/LN10' element={<LN10 />} />

    </Routes>
  )
}

export default App
