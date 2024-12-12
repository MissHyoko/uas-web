import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

function Home() {
  return (
    <>
    <div className='home-container'>
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
  <div className='space'></div>
  <section className="intro-section">
        <div className="intro-title">
          <h1>Dapatkan Pendidikan <span>Berkualitas Dengan</span><span className="span-color"> Beasiswa</span></h1>
          <p>
          Saat ini, pendidikan bukan lagi impian yang sulit dijangkau. Dengan adanya beasiswa, siapa pun memiliki kesempatan untuk bersekolah dan meraih cita-cita. Beasiswa memberikan akses kepada semua kalangan, tanpa memandang latar belakang ekonomi, untuk mendapatkan pendidikan berkualitas. Kini, pendidikan terbuka lebar bagi semua, karena beasiswa adalah jembatan menuju kesuksesan!
          </p>
        </div>
        <div className="intro-img">
          <img src="././images/topi.png" alt="" />
        </div>
  </section>

  <section className="about-section">
      <div className="about-title">
        <h2>Harapan Kami</h2>
        <p>InfoBeasiswa hadir sebagai wadah berisi informasi beasiswa yang mudah diakses dan terpusat bagi para pelajar dan mahasiswa yang mencari peluang pendanaan untuk pendidikan mereka. Dalam era digital saat ini, informasi mengenai beasiswa sering kali tersebar di berbagai sumber yang tidak terorganisir, sehingga menyulitkan calon penerima beasiswa untuk menemukan informasi yang relevan dan akurat. Dengan adanya website ini, pengguna dapat dengan cepat menemukan informasi terkini mengenai berbagai jenis beasiswa, termasuk syarat pendaftaran, tenggat waktu, dan prosedur pendaftaran.</p>
      </div>
  </section>

  <section className="testimonial-section">
    <div className="little-description">
      <h2>Kata Orang Tentang Kami</h2>
      <p >Mereka sangat terbantu dengan InfoBeasiswa!</p>
    </div>

    <div className="row">
      <div className="col span_1_of_2 box">
        <div className="client-photo">
          <img src="././images/tes1.jpg" alt="client1"/>
        </div>
        <div className="client-review">
          <p>“ Saya menemukan banyak informasi tentang beasiswa yang tidak saya ketahui sebelumnya, dan itu sangat membantu saya.”</p>
          <h4>Gloria</h4>
          <span className="role">Pelajar SMA</span>
        </div>
      </div>
      <div className="col span_1_of_2 box">
        <div className="client-photo">
          <img src="././images/tes2.jpg" alt="client2"/>
        </div>
        <div className="client-review">
          <p>“Daripada keliling internet buat cari beasiswa, mending cari saja di InfoBeasiswa "</p>
          <h4>Lori</h4>
          <span className="role">Pelajar SMA</span>
        </div>
      </div>
      <div className="col span_1_of_2 box">
        <div className="client-photo">
          <img src="././images/tes3.jpg" alt="client3"/>
        </div>
        <div className="client-review">
          <p>“Berkat InfoBeasiswa, saya lebih hemat paket data karena semua beasiswa bisa dicara dalam satu tempat saja.”</p>
          <h4>Kenia</h4>
          <span className="role">Pelajar SMA</span>
        </div>
      </div>
      <div className="col span_1_of_2 box">
        <div className="client-photo">
          <img src="././images/tes4.jpg" alt="Client4"/>
        </div>
        <div className="client-review">
          <p>“Saya sangat merekomendasikan InfoBeasiswa kepada teman-teman saya. Mereka memiliki berbagai informasi tentang beasiswa"</p>
          <h4>Emma</h4>
          <span className="role">Mahasiswa Semester 2</span>
        </div>
      </div>
    </div>
  </section>

  <section className="team-section">
      <div className="team-header">
        <h2>Tim <span>Kami</span></h2>
        <p>Sekumpulan mahasiswi cantik yang penuh dengan talenta, berambisi mendapat nilai bagus dalam semua mata kuliah mereka!</p>
      </div>
      <div className="team-wrap">
        <div className="team-box">
          <img src="././images/michelle.jpg" alt="" />
          <h2>Michelle K. S. Rinding</h2>
          <p>Mahasiswi Teknik Informatika angkatan 2023. Sering beli novel tapi jarang dibaca</p>
        </div>
        <div className="team-box">
          <img src="././images/novi.jpg" alt="" />
          <h2>Novita W. Halatu</h2>
          <p>Mahasiswi Teknik Informatika angkatan 2023. Hobi jalan-jalan buat refreshing</p>
        </div>
        <div className="team-box">
          <img src="././images/cindy.jpg" alt="" />
          <h2>Cindy G. Boro</h2>
          <p>Mahasiswi Teknik Informatika angkatan 2023. Suka keliling kota cari makanan enak</p>
        </div>
        <div className="team-box">
          <img src="././images/putria.jpg" alt="" />
          <h2>Putria Ningsih</h2>
          <p>Mahasiswi Teknik Informatika angkatan 2023. </p>
        </div>
        <div className="team-box">
          <img src="././images/fuah.jpg" alt="" />
          <h2>Siti Marfuah</h2>
          <p>Mahasiswi Teknik Informatika angkatan 2023. Paling tinggi dibandingkan temannya yang lain</p>
        </div>
      </div>
  </section>

  
  <footer>
    <h1>InfoBeasiswa</h1>
    <p>Ciptakan Masa Depanmu: Temukan Beasiswa yang Tepat</p>
  </footer>
  </div>
    </>
  )
}

export default Home
