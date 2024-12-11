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
          <h2>Beasiswa SimulasiKu</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa SimulasiKu</p>
        <p><b>Keuntungan : </b></p>
        <p> <ul>
        <li>Mendapatkan dana sebesar 5 juta tiap semester.</li>
        <li>Mendapat uang pendidikan 250ribu per-bulan</li>
        <li>video belajar gratis</li>
        <li>Akses Tryout UTBK gratis</li>
        <li>Bimbingan belajar untuk masuk PTN/PTS</li>
    </ul></p>
        <p><b>Syarat Mendaftar : </b></p>
        <p> <ul>
        <li>Merupakan WNI</li>
        <li>Siswa SMA sederajat baik Swasta maupun Negeri</li>
        <li>Program beasiswa ini terbuka untuk Kelas 10, 11 dan 12. Santri, Paket C maupun Gap Year diperbolehkan apply.</li>
        <li>Bebas terikat dengan beasiswa lainnya</li>
        <li>Tidak mencantumkan surat kemampuan ekonomi</li>
        <li>Tanpa syarat minimal nilai mapel tertentu.</li>
    </ul></p>
        <p><b>Dibuka : </b> Deadline sampai 31 Desember</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://beasiswa.co/beasiswa-simulasikuid-untuk-pelajar/'>Beasiswa SimulasiKu</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default BI
