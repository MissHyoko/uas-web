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
    </Routes>
  )
}

export default App
