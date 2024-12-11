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
          <h2>Beasiswa Anak Teladan Indonesia (BATI)</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa Anak Teladan Indonesia (BATI)</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Akomodasi selama 3 tahun</li>
  <li>Belajar gratis di sekolah bertaraf Cambridge School atau setara </li>
  <li>Uang saku setiap bulan </li>
  <li>Program pengembangan diri Pengembangan softskills </li>
  <li>Seminar motivasi</li>
</ul>

</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Warga negara Indonesia Siswa kelas 9 SMP/MTs sederajat</li>
  <li>Rata-rata nilai rapor 8,5 </li>
  <li>Memliki karakter dan berakhlak mulia</li>
  <li>Bercita-cita menjadi guru </li>
  <li>Berprestasi (Akademik/Non-akademik) </li>
  <li>Bersedia tinggal di asrama yang di sediakan</li>
  <li>Surat rekomendasi dari guru atau kepala sekolah </li>
  <li>Bersedia ditempatkan di sekolah yang ditunjuk oleh penyedia beasiswa</li>
</ul>
</p>
        <p><b>Dibuka : </b>1 November - 14 Desember</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://yayasanrubic.org/bati/'>Beasiswa Anak Teladan Indonesia (BATI)</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default BI
