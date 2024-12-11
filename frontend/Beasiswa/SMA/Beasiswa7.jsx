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
          <h2>Beasiswa Tunas Indonesia Jepang</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa Tunas Indonesia Jepang</p>
        <p><b>Keuntungan : </b></p>
        <p> <ul>
        <li>Bantuan dana pendidikan sebesar Rp.1.440.000 dan diberikan satu kali pada bulan Oktober 2024</li>
        <li>Webinar mentoring dan motivasi eksklusif untuk persiapan studi lanjut dan kehidupan setelah lulus sekolah pulsa dan kuota akan disubsidi</li>
        <li>Grup eksklusif penerima Beasiswa TIJ batch XV untuk berjejaring dan bertukar informasi</li>
        <li>Sertifikat resmi sebagai penerima beasiswa TIJ Batch XV yang diberikan setelah menyelesaikan rangkaian program mentoring atau pendampingan</li>
    </ul></p>
        <p><b>Syarat Mendaftar : </b></p>
        <p> <ul>
        <li>Merupakan siswa-siswi SMA/SMK/Ma sederajat yang pada masa pendaftaran (Juli 2024) berada di kelas XI/XII atau baru saja naik ke kelas XI/XII</li>
        <li>Merupakan siswa-siswi berprestasi dengan rata-rata nilai rapor minimal 7,25 dalam satu semester terakhir</li>
        <li>Berkelakuan baik dan aktif berorganisasi baik di dalam maupun luar sekolah</li>
        <li>Berasal dari keluarga yang kurang mampu</li>
    </ul></p>
        <p><b>Dibuka : </b>Hingga 7 Agustus</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://indbeasiswa.com/beasiswa-tunas-indonesia-jepang/'>Beasiswa Tunas Indonesia Jepang</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default BI
