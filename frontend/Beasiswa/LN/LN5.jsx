import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function LN5() {
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
          <h2>KAren McKellin International Leader of Tomorrow Awards - University British Columbia</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/columbia.png" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>KAren McKellin International Leader of Tomorrow Awards - University British Columbia</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
          <li>Biaya kuliah selama di UBC</li>
          <li>Biaya hidup</li>
          </ul></p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
          <li>Merupakan mahasiswa internasional yang akan belajar di kanada dengan memiliki izin belajar kanada.</li>
          <li>Menunjukan prestasi akademik yang unggul.</li>
          <li>Menunjukan kebutuhan finansial atau kurang mapu dalam melanjutkan studi.</li>
          </ul></p>
        <p><b>Dibuka : </b>15 November 2025</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.scholarsofficial.com/info-beasiswa/beasiswa-karen-mckellin-international-leader-of-tomorrow-untuk-kuliah-s1-di-ubc-kanada/&ved=2ahUKEwj_iZ_krqGKAxWJRmwGHTtgJC4Qh-wKegQIEBAC&usg=AOvVaw10gk_93Kvln_rbzG5WTAOe'>KAren McKellin International Leader of Tomorrow Awards - University British Columbia</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default LN5
