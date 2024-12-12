import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'


function SMA1() {
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
          <h2>Australian Independent School (AIS) Scholarships Programme</h2>
        </div>
        <button><Link to={"/BeasiswaSMA"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Australian Independent School (AIS) Scholarships Programme</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
        <li>Bebas dari biaya sekolah biaya ujian Diploma IB serta biaya pembangunan sekolah</li>
        <li>Para pelajar yang telah menyelesaikan studi dari AIDS akan mendapatkan predikat International Baccalaureate (IB) Diploma yang setara SMA dan bisa dipergunakan untuk langsung melanjutkan kuliah, baik dalam negeri maupun luar negeri</li>
    </ul></p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
        <li>Merupakan Warga Negara Indonesia yang berdomisi di Indonesia</li>
        <li>Memiliki kemampuan berbahasa Inggris</li>
        <li>Memiliki catatan akademik yang menonjol</li>
        <li>Memiliki motivasi yang kuat dan atribut yang mendukung untuk program id</li>
        <li>Saat ini tidak sedang terdaftar sebagai siswa di AIS Indonesia manapun</li>
        <li>Terdaftar sebagai siswa kelas 10 atau 1 SMA di sekolah saat ini</li>
    </ul></p>
        <p><b>Dibuka : </b>Dibuka hingga 17 februari</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://www.ais-indonesia.com/'>Australian Independent School (AIS) Scholarships Programme</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default SMA1
