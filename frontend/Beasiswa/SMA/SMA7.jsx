import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function SMA7() {
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
        
          <button><Link to={"/BeasiswaSMA"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        
        <div className='beasiswa-title'>
          <h2>Beasiswa Anak Teladan Indonesia (BATI)</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/anak teladan.jpg" alt="" />
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

export default SMA7
