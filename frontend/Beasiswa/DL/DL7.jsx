import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function DL7() {
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
          <h2>Beasiswa Cargill Global Scholar</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/cargill.jpg" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa Cargill Global Scholar	</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Bantuan dana pendidikan yang signifikan.</li>
  <li>Kesempatan untuk memperluas jaringan internasional.</li>
  <li>Pengembangan potensi kepemimpinan dan pengalaman berharga.</li>
</ul>
</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Kamu harus menjadi Warga Negara Indonesia (WNI).</li>
  <li>Harus juga terdaftar di salah satu universitas mitra berikut: Institut Pertanian Bogor (IPB), Institut Teknologi Bandung (ITB) (khusus jurusan Biologi), Institut Teknologi Sepuluh Nopember (ITS) (khusus jurusan Teknik Lingkungan dan Biologi), Universitas Brawijaya (UB), Universitas Diponegoro (UNDIP), Universitas Gadjah Mada (UGM), Universitas Hasanuddin (UNHAS), Universitas Lampung (UNILA), Universitas Sebelas Maret (UNS), Universitas Sriwijaya (UNSRI).</li>
  <li>Aktif dalam berbagai kegiatan sosial dan kemahasiswaan dan menunjukkan potensi kepemimpinan.</li>
  <li>Memiliki nilai prestasi akademik yang baik, kamu harus memiliki IPK minimal 3.0 pada semester 1 hingga 3.</li>
  <li>Membutuhkan bantuan keuangan.</li>
  <li>Terdaftar sebagai mahasiswa yang sedang aktif di perkuliahan</li>
</ul>
</p>
        <p><b>Dibuka : </b>Dibuka setiap tahun dari 20 Mei hingga akhir tahun </p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://apply.iie.org/cargillglobalscholars-indonesia'>Beasiswa Cargill Global Scholar	</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default DL7
