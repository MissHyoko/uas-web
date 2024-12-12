import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function LN9() {
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
        
          <button><Link to={"/BeasiswaLN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        
        <div className='beasiswa-title'>
          <h2>HKU Etrance Scholarship for Outstanding Student</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/hku.png" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>HKU Etrance Scholarship for Outstanding Student</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
          <li>Beasiswa berdasarkan prestasi diberikan kepada mahasiswa baru berprestasi yang diterima di program sarjana HKU.</li>
          <li>Biaya kuliah penuh.</li>
          </ul></p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
          <li>IELTS (6.5).</li>
          <li>TOEFL (93).</li>
          </ul></p>
        <p><b>Dibuka : </b>22 Agustus 2025</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://www.schoters.com/id/beasiswa/info/the-university-of-hong-kong-s1-1'>HKU Etrance Scholarship for Outstanding Student</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default LN9
