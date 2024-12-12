import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function LN7() {
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
          <h2>KAIST International Undergradate Scholarship</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/kaist.png" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>KAIST International Undergradate Scholarship</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
        <li>Biaya kuliah penuh selama 8 semester.</li>
        <li>Biaya hidup 350.000 KRW per bulan.</li>
        <li>Asuransi kesehata.</li>
        </ul></p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
          <li>TOEFL iBT (83)</li>
          <li>IELTS (6.5)</li>
          <li>TOEFL PBT (560)</li>
          </ul></p>
        <p><b>Dibuka : </b>24 Oktober 2025</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://www.schoters.com/id/beasiswa/info/kaist-international-student-scholarship-copy-s1-1-3bf2M'>KAIST International Undergradate Scholarship</a></p>
       
        </div> 
          <button><Link to={"/BeasiswaLN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        </div>
  </section>
    </>
  )
}

export default LN7
