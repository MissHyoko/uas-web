import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function LN8() {
  return (
    <>
    <header className="header">
        <img src="././images/logo.png" className="logo" alt="" />
        <nav className='navbar'>
            <Link to={"/"}>Beranda</Link>
            <Link to={"/BeasiswaSMA"}>Beasiswa</Link>
            <Link to={"/Tentang"}>Tentang</Link>
        </nav>
        <div className='register'>
        <Link to={"/Login"}>Masuk</Link>
        <Link to={"/Signup"}>Daftar</Link></div>
    </header>

      <section class="beasiswa-detail">
        
        
        <div className='beasiswa-title'>
          <h2>Tokyo International University Scholarship</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/tokyo int.jpg" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Tokyo International University Scholarship</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
          <li>Pengungarangan biaya pendidikan dari 30% Menjadi 100%</li>
          </ul></p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
          <li>IELTS (5.5)</li>
          <li>TOEFL iBT (61)</li>
          <li>TOEIC (700)</li>
          </ul></p>
        <p><b>Dibuka : </b>4 September 2025</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://www.schoters.com/id/beasiswa/info/tokyo-international-university-tuition-fee-reduction-scholarship-fall-semester-s1-3'>Tokyo International University Scholarship</a></p>
        </div>
          <button><Link to={"/BeasiswaLN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        </div>
  </section>
    </>
  )
}

export default LN8
