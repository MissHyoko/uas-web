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
          <h2>Beasiswa IGGS Telkom University</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa IGGS Telkom University</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Gratis kuliah 100% hingga lulus di Telkom University</li>
  <li>Mendapatkan 1on1 mentoring bersama mentor ekslusif</li>
  <li>Mendapatkan kesempatan magang dan pengabdian untuk pelajar Indonesia</li>
  <li>Sertifikat Nasional untuk seluruh pendaftar beasiswa</li>
</ul>
</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Siswa lulusan SMA/SMK/MA sederajat lulusan 2023 dan 2024 yang berdomisili di Indonesia</li>
  <li>Persyaratan rapor:
Lulusan tahun 2023: nilai rapor semester 1 s.d. 6
Lulusan tahun 2024: nilai rapor semester 1 s.d. 4</li>
  <li>Peserta dapat memilih 2 program studi</li>
  <li>Wajib mengikuti akun instagram @iggscholarship, @smbtelkom, @forumosisjabar.id dan @medpel.id</li>
</ul>
</p>
        <p><b>Dibuka : </b>21 Des 2023 – 23 Feb 2024</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://smb.telkomuniversity.ac.id/jalur-seleksi/iggs/'>Beasiswa IGGS Telkom University</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default BI
