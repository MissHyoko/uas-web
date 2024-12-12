import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function SMA6
() {
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
          <h2>Beasiswa Amartha Cendekia</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/amartha.jpg" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa Amartha Cendekia</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Biaya pendidikan dan insentif sebesar Rp 3 juta per tahun</li>
  <li>Tunjangan tambahan Rp 5 juta untuk siswa yang melanjutkan ke perguruan tinggi</li>
  <li>Program pengembangan diri development class untuk persiapan diri pasca kelulusan</li>
  <li>Coaching dan mentoring dari kakak pendamping</li>
</ul>
</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Siswa dan siswi kelas XI pada tahun ajaran 2023/2024</li>
  <li>Memiliki prestasi akademik yang baik pada semester 1 dan 2</li>
  <li>Aktif terlibat di organisasi atau kegiatan ekstrakulikuler</li>
  <li>Bersedia menjalani program beasiswa selama satu tahun penuh</li>
</ul>
</p>
        <p><b>Dibuka : </b>27 Maret hingga 15 Juni 2024</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://beasiswa-amartha.org/'>Beasiswa Amartha Cendekia</a></p>
        </div>
          <button><Link to={"/BeasiswaSMA"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        </div>
  </section>
    </>
  )
}

export default SMA6

