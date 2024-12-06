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

  <section class="testimonial-section" id="testimonial">
            <div class="row">
                <h2>What People say about us</h2>
                <p class="little-description">Our clients love us!</p>
            </div>
            <div class="row">
                <div class="col span_1_of_2 box">
                    <div class="client-photo">
                        <img src="resources/img/1.jpg" alt="Chanel Iman"/>
                    </div>
                    <div class="client-review">
                        <p>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”</p>
                        <h3>Chanel Iman</h3>
                        <span class="role">Ceo of Pinterest</span>
                    </div>
                </div>
                <div class="col span_1_of_2 box">
                    <div class="client-photo">
                        <img src="resources/img/2.jpg" alt="ADRIANA LIMA"/>
                    </div>
                    <div class="client-review">
                        <p>“Vivamus  luctus luctus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta"</p>
                        <h3>ADRIANA LIMA</h3>
                        <span class="role">Founder of Instagram</span>
                    </div>
                </div>
                <div class="col span_1_of_2 box">
                    <div class="client-photo">
                        <img src="resources/img/3.jpg" alt="ANNE HATHAWAY"/>
                    </div>
                    <div class="client-review">
                        <p>“Vivamus luctus urna sed urna luctus luctus  ultricies ac tempor dui sagittis. In condimentum facilisis porta.”</p>
                        <h3>ANNE HATHAWAY</h3>
                        <span class="role">Lead Designer at Behance</span>
                    </div>
                </div>
                <div class="col span_1_of_2 box">
                    <div class="client-photo">
                        <img src="resources/img/4.jpg" alt="Chanel Iman"/>
                    </div>
                    <div class="client-review">
                        <p>“Phasellus non purus vel arcu tempor commodo. Fusce semper, purus vel luctus molestie, risus sem cursus </p>
                        <h3>EMMA STONE</h3>
                        <span class="role">Co-Founder of Shazam</span>
                    </div>
                </div>
            </div>
        </section>

  <section class="recipie-section">
      <div class="recipie-header">
        <h1>Our <span>Recipies</span></h1>
        <p>Simply sharing a table or insights about one another's food culture helps unmask our common humanity. The
          universal language of food is a unifying force</p>
      </div>
      <div class="recipie-wrap">
        <div class="recipie-box">
          <img src="images/burger-recipie0-min.jpg" alt="" />
          <h2>Veggie Burgers</h2>
          <p>A veggie burger is a burger patty that does not contain meat. These burgers may be made from ingredients
            like beans, especially soybeans and tofu, nuts, grains, seeds or fungi such as mushrooms or mycoprotein</p>
        </div>
        <div class="recipie-box">
          <img src="images/burger-recipie1-min.jpg" alt="" />
          <h2>Beef Burgers</h2>
          <p>These stacked beef burgers are a BBQ favourite & are really easy-to-make. Find this homemade burger recipe
            & loads more BBQ recipes at Tesco Real Food</p>
        </div>
        <div class="recipie-box">
          <img src="images/burger-recipie3-min.jpg" alt="" />
          <h2>Turkey Burgers</h2>
          <p>Turkey burgers are much leaner than hamburgers, but they can be dry and dull Moisten them by adding ketchup
            and a bit of grated onion to the ground turkey .
          </p>
        </div>
      </div>
  </section>

  
  <footer>
    <h1>Hamburger <span>World</span></h1>
    <p>Eat healthy to live healthy. Live healthy to live happy.</p>
  </footer>
    </>
  )
}

export default Home
