import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function DL6() {
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
          <h2>Beasiswa XL Future Leaders</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/xl.jpg" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa XL Future Leaders</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Bantuan dana pendidikan.</li>
  <li>Program pengembangan diri dan potensi kepemimpinan.</li>
  <li>Kesempatan untuk menjadi bagian dari jaringan mahasiswa dari seluruh Indonesia.</li>
</ul>
</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Kamu harus masih berkuliah di tahun pertama dan juga kedua atau sedang berada di semester 1 sampai dengan 4. Itu berlaku pada jenjang D4 maupun S1 baik di perguruan tinggi negeri atau bisa juga di swasta segala jurusan.</li>
  <li>Usiamu tidak boleh lebih dari 21 tahun.</li>
  <li>Harus memiliki IPK dengan minimal 2.8 dan juga selalu aktif di dalam organisasi kemahasiswaan.</li>
</ul>
</p>
        <p><b>Dibuka : </b>21 Februari - 31 Mei</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://xlfutureleaders.com/global-leaders/ '>Beasiswa XL Future Leaders</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default DL6
