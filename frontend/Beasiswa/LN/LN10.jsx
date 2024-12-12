import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function LN10() {
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
        
          <button><Link to={"/BeasiswaLN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        
        <div className='beasiswa-title'>
          <h2>Nama Beasiswa</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>The Lester B.Pearson Scholarship - University of Toronto</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
          <li>Biaya kuliah, buku, biaya insidental, dan dukungan tempat tinggal penuh selama empat tahun</li>
          </ul></p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
          <li>Pelajar internasional memerlukan izin belajar.</li>
          <li>Terdaftar ditahun terakhir sekolah menengah atas pada tahun 2024/2025 atau Telah lulus paling lambat bulan juni 2024</li>
          </ul></p>
        <p><b>11 Oktober 2025</b></b></p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://future.utoronto.ca/pearson/about/'>The Lester B.Pearson Scholarship - University of Toronto</a></p>
        
        </div>
        </div>
  </section>
    </>
  )
}

export default LN10
