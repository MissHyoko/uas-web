import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function LN1() {
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
          <h2>Stipendium Hungaricum Scholarhip</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="../images/stipendium.png" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Stipendium Hungaricum Scholarhip</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
        <li>Bebas biaya kuliah selama masa studi,tanpa biaya pendaftaran atau ujian.</li>
        <li>Bantuan bulanan untuk mahasiswa program Sarjana, Magister, atau Doktor.</li>
        <li>Kontribusi terhadap akomodasi.</li>
        <li>Asuransi kesehatan gratis untuk seluruh durasi program BSc, MSc atau Phd.</li>
        </ul></p>
        <p><b>Syarat Mendaftar : - </b></p>
        <p><b>Dibuka : </b>15 Januari 2025</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://edu.unideb.hu/p/stipendium-hungaricum-scholarship-20252026?gad_source=1&gclid=CjwKCAiAjeW6BhBAEiwAdKltMtg6LYwkq3TINuPhJNiWaRex_Gmggpnjsj7XcuR6r1TpZxnkAdQrqxoCDR0QAvD_BwE'>(stipendium Hungaricum Scholarhip)</a></p>
        </div>
          <button><Link to={"/BeasiswaLN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        </div>
  </section>
    </>
  )
}

export default LN1
