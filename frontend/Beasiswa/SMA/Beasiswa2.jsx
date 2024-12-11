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
          <h2>Beasiswa YBM BRILIAN</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa YBM BRILIAN</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Tunjangan Prestasi</li>
  <li>Pembinaan masuk PTN</li>
  <li>Motivasi dan Pembinaan Kapasitas Diri</li>
</ul>
</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Warga negara Indonesia</li>
  <li>Siswa/i aktif SMA/sederajat Kelas XI</li>
  <li>Memiliki potensi akademik baik dan dorongan berprestasi tinggi</li>
  <li>Memiliki keterbatasan finansial</li>
</ul>
</p>
        <p><b>Dibuka : </b>27 FEBRUARI 2024</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='(linkhttps://ybmbrilian.id/program/pendidikan/my-scholarship/ beasiswa'>Beasiswa YBM BRILIAN</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default BI
