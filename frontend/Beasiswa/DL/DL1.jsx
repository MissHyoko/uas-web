import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function DL1() {
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
          <h2>Beasiswa Bank Indonesia</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/bi.jpg" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa Bank Indonesia</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Bantuan pendidikan dari Bank Indonesia ini merupakan salah satu Beasiswa S1 dalam negeri full membantu pembiayaan pendidikan S1 kamu.</li>
  <li>Memberikan kesempatan untuk berkontribusi dalam pengembangan Generasi Baru Indonesia.</li>
  <li>Peluang untuk berpartisipasi dalam kegiatan yang diselenggarakan oleh Bank Indonesia.</li>
</ul>
</p>
        <p><b>Syarat Mendaftar : </b><ul>
  <li>Kamu harus merupakan mahasiswa yang sedang aktif di program S1 dan telah menyelesaikan setidaknya 40 SKS atau juga 3 semester.</li>
  <li>Batas usia penerima beasiswa maksimal 23 tahun (atau pilihan lain: 27 tahun untuk mahasiswa Orang Asli Papua di Papua dan juga Papua Barat).</li>
  <li>Beasiswa ini hanya diberikan paling lama selama 4 semester saja, selama memenuhi kriteria yang memang telah ditentukan.</li>
  <li>Aktif berpartisipasi dalam aktivitas sosial yang bermanfaat bagi banyak masyarakat.</li>
  <li>Tidak sedang mendapatkan beasiswa dari lembaga lain atau juga berada dalam ikatan dinas dari lembaga/instansi lainnya.</li>
  <li>Bersedia mengambil peran aktif, berpartisipasi dalam kegiatan yang diselenggarakan oleh Bank Indonesia.</li>
</ul>
</p>
      
        <p><b>Dibuka : </b>periode 13-19 Februari 2024</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://bit.ly/daftar-beasiswa-bi-usk-2024'>Beasiswa Bank Indonesia</a></p>
        </div>
        </div>
      <button><Link to={"/BeasiswaDN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
  </section>
    </>
  )
}

export default DL1
