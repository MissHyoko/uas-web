import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function LN2() {
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
          <h2>NTU ASEAN Undergraduate Scholarship</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/ntu.png" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>NTU ASEAN Undergraduate Scholarship</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
        <li>Cakupan ppenuh biaya kuliah bersubsidi (setelah Hibah Uang Kuliah.</li>
        <li>Tanjungan hidup sebesar S$5.800 pertahun akademik.</li>
        <li>Tunjangan akomodasi sebesar S$3.000 pertahun akademik.</li>
        <li>Tunjangan komputer satu kali sebesar S$1.750.</li>
        </ul></p>
        <p><b>Syarat Mendaftar : - </b></p>
        <p><b>Dibuka : </b>16 Januari 2025</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://www.ntu.edu.sg/admissions/undergraduate/scholarships/asean-scholarship'>NTU ASEAN Undergraduate Scholarship</a></p>
        </div>
          <button><Link to={"/BeasiswaLN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        </div>
  </section>
    </>
  )
}

export default LN2
