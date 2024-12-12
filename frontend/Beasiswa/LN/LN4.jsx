import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function LN4() {
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
          <h2>Turkiye Burslari Scholarship</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/turkiye.png" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Turkiye Burslari Scholarship</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
          <li>Penempatan universitas dan departemen</li>
          <li>Gaji bulanan</li>
          <li>biaya pendidikan</li>
          <li>kursus bahasa turki (1tahun)</li>
          <li>akomodasi,asuransi kesehatan</li>
          <li>Tiket pesawat sekali saja (pada awal pendidikan dan saat lulus)</li>
          </ul></p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
          <li>Program sarjana berusia dibawah 21 Tahun</li>
          <li>Program magister berusia dibawah 30 tahun</li>
          <li>Program PhD berusia dibawa 35 tahun</li>
          </ul></p>
        <p><b>Dibuka : </b>20 Februari 2025</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://www.turkiyeburslari.gov.tr/'>Turkiye Burslari Scholarship</a></p>
        </div>
          <button><Link to={"/BeasiswaLN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        </div>
  </section>
    </>
  )
}

export default LN4
