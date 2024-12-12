import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function DL5() {
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
          <h2>Beasiswa CIMB Niaga</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/cimb.jpg" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa CIMB Niaga</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Bantuan dana pendidikan.</li>
  <li>Program pengembangan diri dan karir.</li>
  <li>Kesempatan untuk menjadi bagian dari jaringan mahasiswa dari seluruh Indonesia.</li>
</ul>
</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Kamu harus masih berkuliah di tahun pertama dan kedua atau berada di semester 1 sampai dengan 4 pada jenjang D4 maupun S1 baik di perguruan tinggi negeri maupun swasta segala jurusan.</li>
  <li>Usiamu tidak lebih dari 21 tahun.</li>
  <li>Memiliki IPK minimal 2.8 dan selalu aktif dalam organisasi kemahasiswaan.</li>
</ul>
</p>
        <p><b>Dibuka : </b>03 - 31 Agustus 2024</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://www.kejarmimpi.id/register '>Beasiswa CIMB Niaga</a></p>
        </div>
        </div>
          <button><Link to={"/BeasiswaDN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
  </section>
    </>
  )
}

export default DL5
