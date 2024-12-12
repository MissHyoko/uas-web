import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function LN7() {
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
          <h2>Nama Beasiswa</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>(nama beasiswa)</p>
        <p><b>Keuntungan : </b></p>
        <p>(isi keuntungan, gunakan list)</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p>(syarat, gunakan list)</p>
        <p><b>Dibuka : </b>(isi kapan biasa beasiswa dibuka)</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='(link beasiswa'>(nama beasiswa)</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default LN7
