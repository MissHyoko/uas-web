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
          <h2>Beasiswa Kartu Indonesia Pintar (KIP) kuliah</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa Kartu Indonesia Pintar (KIP) kuliah</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Bantuan biaya hidup atau uang saku bulanan mulai Rp 800 - 1,4 juta per bulan</li>
  <li>biaya pendidikan sesuai akreditasi program studi. Maksimal bantuan biaya pendidikan sampai Rp 12 juta.</li>
  
</ul>
</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Lulusan SMA atau sederajat yang memiliki NISN, NPSN, dan NIK yang valid</li>
  <li>Potensi akademik yang baik dengan keterbatasan ekonomi, dibuktikan dengan dokumen sah.</li>
  <li>Memiliki Kartu KIP, Kartu Keluarga Sejahtera, atau terdata di Data Terpadu Kesejahteraan Sosial (DTKS) Kemensos. </li>
  <li>Telah diterima di PTN atau PTS pada prodi dengan Akreditasi A, B, atau C (dengan pertimbangan tertentu). </li>
  <li>Kriteria khusus untuk siswa difabel, berasal atau tinggal di daerah 3T, Papua dan Papua Barat, atau kondisi khusus karena bencana.</li>
</ul>
</p>
        <p><b>Dibuka : </b>Di buka bersamaan dengan Seleksi Nasional Berdasarkan Prestasi</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://kip-kuliah.kemdikbud.go.id/'>Beasiswa Kartu Indonesia Pintar (KIP) kuliah</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default BI
