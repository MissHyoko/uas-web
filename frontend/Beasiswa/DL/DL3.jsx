import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function DL3() {
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
        
          <button><Link to={"/BeasiswaDN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        
        <div className='beasiswa-title'>
          <h2>Beasiswa Djarum Plus</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa Djarum Plus</p>
        <p><b>Keuntungan : </b></p>
       <p> <ul>
  <li>Bantuan dana pendidikan yang signifikan.</li>
  <li>Program ini mencakup banyak universitas mitra, sehingga kamu memiliki banyak pilihan.</li>
  <li>Peluang untuk menjadi salah satu awardee Beasiswa Djarum Plus yang membanggakan.</li>
</ul>
</p>
    
        <p><b>Syarat Mendaftar : </b></p>
       <p> <ul>
  <li>Kamu harus sedang menempuh pendidikan Strata 1/Diploma 4 di semester IV, dari semua disiplin ilmu pada universitas mitra.</li>
  <li>Harus memiliki IPK minimum 3.20 pada semester III, dan juga harus mampu mempertahankan IPK dengan minimal 3.20 hingga akhir pada semester IV.</li>
  <li>Aktif berpartisipasi dalam kegiatan organisasi yang ada baik it di dalam maupun di luar kampus.</li>
  <li>Tidak sedang mendapatkan atau menerima beasiswa dari pihak lain.</li>
  <li>Harus melampirkan berbagai dokumen seperti bukti cetak PDF dari formulir pendaftaran online.</li>
  <li>Transkrip nilai yang telah dilegalisir otoritas kampus sampai dengan semester III.</li>
  <li>Satu lembar pas foto berwarna memakai jaket almamater ukuran 4 x 6 cm.</li>
  <li>Fotokopi Kartu Tanda Mahasiswa.</li>
  <li>Surat keterangan dari Rektorat yang menyatakan bahwa kamu tidak sedang menerima beasiswa dari pihak lain, dan sejumlah sertifikat prestasi lainnya.</li>
</ul>
</p>
      
        <p><b>Dibuka : </b>27 Maret - 30 Mei S</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://djarumbeasiswaplus.org/tentang_kami/daftar-perguruan-tinggi-program-djarum-beasiswa-plus '>Beasiswa Djarum Plus</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default DL3
