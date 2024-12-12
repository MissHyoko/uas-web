import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function LN6() {
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
          <h2>Stamps Scholarship - University of Miami</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/miami.png" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Stamps Scholarship - University of Miami</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
          <li>Tempat tinggal dikampus, paket makan, asuransi kesehatan.</li>
          <li>Buku pelajaran, tunjangan laptop, dan akses ke dana pengayaan senilai $12.000.</li>
          </ul></p>
        <p><b>Syarat Mendaftar : - </b></p>
        <p><b>Dibuka : </b>1 November 2025</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://admissions.miami.edu/undergraduate/financial-aid/scholarships/stamps/index.html'>Stamps Scholarship - University of Miami</a></p>
        </div>  
          <button><Link to={"/BeasiswaLN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        </div>
  </section>
    </>
  )
}

export default LN6
