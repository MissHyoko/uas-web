import React from 'react'
import "./Home.css"

function Home() {
  return (
    <>
    <header class="header">
        <a href="/" className="logo">InfoBeasiswa</a>
        <nav className='navbar'>
            <a href="#">Beranda</a>
            <a href="#">Beasiswa</a>
            <a href="#">Tentang</a>
            <a href="#">Kontak</a>
        </nav>
    </header>

  <section class="intro-section">
        <div class="intro-title">
          <h1>Dapatkan Pendidikan <span>Berkualitas Dengan</span><span class="span-color"> Beasiswa</span></h1>
          <p>
          Saat ini, pendidikan bukan lagi impian yang sulit dijangkau. Dengan adanya beasiswa, siapa pun memiliki kesempatan untuk bersekolah dan meraih cita-cita. Beasiswa memberikan akses kepada semua kalangan, tanpa memandang latar belakang ekonomi, untuk mendapatkan pendidikan berkualitas. Kini, pendidikan terbuka lebar bagi semua, karena beasiswa adalah jembatan menuju kesuksesan!
          </p>
        </div>
        <div class="intro-img">
          <img src="././images/topi.png" alt="" />
        </div>
  </section>

  <section class="about-section">
      <div class="about-title">
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

  <section class="team-section">
      <div class="team-header">
        <h2>Tim <span>Kami</span></h2>
        <p>Sekumpulan mahasiswi cantik yang penuh dengan talenta, berambisi mendapat nilai bagus dalam mata kuliah Pemrograman Web!</p>
      </div>
      <div class="team-wrap">
        <div class="team-box">
          <img src="././images/michelle.jpg" alt="" />
          <h2>Michelle K. S. Rinding</h2>
          <p>Mahasiswi Teknik Informatika angkatan 2023. Dikasih otak encer sama Tuhan, tapi suka hobi nunda tugas sampai h-1</p>
        </div>
        <div class="team-box">
          <img src="././images/novi.jpg" alt="" />
          <h2>Novita W. Halatu</h2>
          <p>Mahasiswi Teknik Informatika angkatan 2023. Si paling santai dalam keadaan apapun, yang penting senyumin aja dulu</p>
        </div>
        <div class="team-box">
          <img src="././images/cindy.jpg" alt="" />
          <h2>Cindy G. Boro</h2>
          <p>Mahasiswi Teknik Informatika angkatan 2023. Suka keliling kota cari makanan enak, tapi tidak pernah gendut</p>
        </div>
        <div class="team-box">
          <img src="././images/putria.jpg" alt="" />
          <h2>Putria Ningsih</h2>
          <p>Mahasiswi Teknik Informatika angkatan 2023. Badannya boleh kecil, tapi nyalinya lebih besar dari yang lain</p>
        </div>
        <div class="team-box">
          <img src="././images/fuah.jpg" alt="" />
          <h2>Siti Marfuah</h2>
          <p>Mahasiswi Teknik Informatika angkatan 2023. Paling tinggi dibandingkan yang lain, ekstrovert tergantung kondisi</p>
        </div>
      </div>
  </section>

  
  <footer>
    <h1>InfoBeasiswa</h1>
    <p>Ciptakan Masa Depanmu: Temukan Beasiswa yang Tepat</p>
  </footer>
    </>
  )
}

export default Home
