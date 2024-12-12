import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function LN3() {
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
          <h2>Mitsui Bussan Scholarship</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/mitsui.png" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Mitsui Bussan Scholarship</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
          <li>Tunjangn hidup</li>
          <li>Biaya tranfortasi</li>
          <li>Tunjangan kedatangan</li>
          <li>Biaya sekolah</li>
          <li>Akomodasi,Makan, tranportasi lokal dan  biaya dan pengeluaran lainnya</li>
          </ul></p>
        <p><b>Syarat Mendaftar : -</b></p>
        <p><b>Dibuka : </b>16 Februari 2024</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://www.mbkscholarship-id.com/final-result-grantee-announcement-2024/'>Mitsui Bussan Scholarship</a></p>
        </div>
          <button><Link to={"/BeasiswaLN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        </div>
  </section>
    </>
  )
}

export default LN3
