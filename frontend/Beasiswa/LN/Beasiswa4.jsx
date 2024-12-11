import React from 'react'
import "../beasiswa-style.css"

function BI() {
  return (
    <>
    <header className="header">
        <a href="/" className="logo">InfoBeasiswa</a>
        <nav className='navbar'>
          <a href="#">Beranda</a>
          <a href="#">Beasiswa</a>
          <a href="#">Tentang</a>
          <a href="#">Kontak</a>
        </nav>
      </header>

      <section class="beasiswa-detail">
        
          <button><a href='../BeasiswaSMA.jsx'>
          <div className='left'>&#11164; Kembali</div></a>
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

export default BI
