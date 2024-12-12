import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function SMA4() {
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
          <h2>Beasiswa YBM BRILIAN</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/bright.jpg" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa YBM BRILIAN</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Tunjangan Prestasi</li>
  <li>Pembinaan masuk PTN</li>
  <li>Motivasi dan Pembinaan Kapasitas Diri</li>
</ul>
</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Warga negara Indonesia</li>
  <li>Siswa/i aktif SMA/sederajat Kelas XI</li>
  <li>Memiliki potensi akademik baik dan dorongan berprestasi tinggi</li>
  <li>Memiliki keterbatasan finansial</li>
</ul>
</p>
        <p><b>Dibuka : </b>27 FEBRUARI 2024</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='(linkhttps://ybmbrilian.id/program/pendidikan/my-scholarship/ beasiswa'>Beasiswa YBM BRILIAN</a></p>
        </div>
          <button><Link to={"/BeasiswaSMA"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        </div>
  </section>
    </>
  )
}

export default SMA4
