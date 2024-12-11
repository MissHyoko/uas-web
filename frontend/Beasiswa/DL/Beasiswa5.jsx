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
          <h2>Beasiswa CIMB Niaga</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
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
  </section>
    </>
  )
}

export default BI
