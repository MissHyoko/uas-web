import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function DL2() {
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
          <h2>Beasiswa Tanoto Foundation</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/tanoto.jpg" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa Tanoto Foundation</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Memberikan dana bantuan pendidikan yang signifikan pada 9 mitra universitas ternama di Indonesia.</li>
  <li>Memberikan beragam program perkembangan diri selama periode beasiswa.</li>
  <li>Membuka peluang untuk networking dan pengembangan kepemimpinan.</li>
</ul>
</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Kamu harus menjadi Warga Negara Indonesia (WNI).</li>
  <li>Kamu harus terdaftar sebagai mahasiswa reguler pada semester pertama di salah satu mitra universitas, seperti Universitas Gadjah Mada, Universitas Brawijaya, dan lainnya.</li>
  <li>Menunjukkan prestasi non-akademik, pengalaman organisasi kesiswaan, komunitas sosial, atau terkait lainnya.</li>
  <li>Memiliki nilai prestasi akademik yang baik, dan juga harus memiliki nilai rata-rata rapor kelas XII tingkat SMA/SMK/MA dengan minimal 8 dari skala 10.</li>
  <li>Menunjukkan potensi kepemimpinan yang kuat dan berkomitmen untuk berkontribusi pada masyarakat dan pembangunan negara.</li>
  <li>Tidak sedang mendpatkan beasiswa atau juga program dukungan finansial lain dari pemerintah atau lembaga lainnya.</li>
  <li>Mampu berkomunikasi dengan baik dalam bahasa Indonesia, dan juga kamu memiliki nilai tambah jika mampu berkomunikasi dalam bahasa asing seperti Inggris dan bahasa lain.</li>
</ul>
</p>
        <p><b>Dibuka : </b>17 Agustus - 01 Oktober 2024</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://www.tanotofoundation.org/id/teladan-2025/'>Beasiswa Tanoto Foundation</a></p>
        </div>
        </div>  
          <button><Link to={"/BeasiswaDN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
  </section>
    </>
  )
}

export default DL2
