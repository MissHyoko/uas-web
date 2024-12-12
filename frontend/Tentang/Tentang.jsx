import React from 'react';
import { Link } from 'react-router-dom'
import "./Tentang.css";

function Tentang() {
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
    <div className='empty'></div>

      <section className="banner">
        <div className="container">
          <h1>Tentang Info Beasiswa</h1>
          <p>"Info Beasiswa adalah platform yang menyediakan informasi terbaru tentang beasiswa, bertujuan untuk membantu pelajar di seluruh dunia mendapatkan pendidikan berkualitas tanpa hambatan biaya."</p>
        </div>
      </section> {/* .banner */}

      <section className="first">
        <div className="container">
          <div className='right-content'>
          <h2> Tujuan Kami </h2> 
          <p>Menjadi platform terpercaya dan terdepan dalam memberikan informasi beasiswa yang akurat dan mudah diakses oleh siapa saja yang membutuhkan.</p>
          </div>
        </div>
      </section>

      <section className="second">
        <div className="container">
          <div className="right-content">
            <h2>Tentang Info Beasiswa</h2>
            <p>"Info Beasiswa adalah platform yang menyediakan informasi terbaru tentang beasiswa, bertujuan untuk membantu pelajar di seluruh dunia mendapatkan pendidikan berkualitas tanpa hambatan biaya."</p>
            <a className="cta" href="index.html">Learn more »</a>
          </div>
        </div>
      </section>

      <section className="third">
        <div className="container">
          <div className="left-content">
            <h2> Siapa Kami?</h2>
            <p>"Kami adalah tim yang berdedikasi untuk memberikan solusi pendidikan terbaik. Kami berfokus pada penyediaan informasi beasiswa yang terverifikasi dan relevan."</p>
            <a className="cta" href="index.html">Contact us »</a>
          </div>
          <div className="right-img">
            <img src="./img/photo-2.jpg" alt="photo" />
          </div>
        </div>
      </section>

      <section className="four">
        <div className="container">
          <div className="member">
            <img src="./img/photo-3.jpg" alt="photo" />
            <h3>Misi dan Visi Kami</h3>
            <p>"Kami berkomitmen untuk memberikan informasi akurat, memberikan panduan beasiswa, dan membantu Anda mencapai impian pendidikan tanpa hambatan biaya."</p>
            <div className="social">
              <a title="LinkedIn" href="index.html"><img src="./img/linkedin.png" alt="linkedin" /></a>
              <a title="Facebook" href="index.html"><img src="./img/facebook.png" alt="facebook" /></a>
              <a title="Instagram" href="index.html"><img src="./img/instagram.png" alt="instagram" /></a>
            </div>
          </div> {/* .member */}

          <div className="member">
            <img src="./img/photo-4.jpg" alt="photo" />
            <h3>Kenali Tim Kami</h3>
            <p>"Kami adalah tim ahli yang bersemangat tentang pendidikan dan kesempatan beasiswa. Temui orang-orang yang ada di balik InfoBeasiswa."</p>
            <div className="social">
              <a title="LinkedIn" href="index.html"><img src="./img/linkedin.png" alt="linkedin" /></a>
              <a title="Instagram" href="index.html"><img src="./img/instagram.png" alt="instagram" /></a>
              <a title="Medium" href="index.html"><img src="./img/medium.png" alt="medium" /></a>
            </div> {/* .social */}
          </div> {/* .member */}

          <div className="member">
            <img src="./img/photo-5.jpg" alt="photo" />
            <h3>Tentang Platform Kami</h3>
            <p>"Info Beasiswa adalah tempat terbaik untuk menemukan peluang beasiswa, dengan informasi yang selalu diperbarui dan relevansi tinggi. Kami ingin Anda berhasil dalam perjalanan pendidikan Anda."</p>
            <div className="social">
              <a title="LinkedIn" href="index.html"><img src="./img/linkedin.png" alt="linkedin" /></a>
              <a title="Facebook" href="index.html"><img src="./img/facebook.png" alt="facebook" /></a>
              <a title="Medium" href="index.html"><img src="./img/medium.png" alt="medium" /></a>
            </div> {/* .social */}
          </div> {/* .member */}
        </div> {/* .container */}
      </section> {/* .four */}

      <section className="five">
        <div className="container">
          {/* Video Section could go here */}
        </div> {/* .container */}
      </section> {/* .five */}

      <section className="six">
        <div className="container">
        </div> {/* .c<h4>Hubungi Kami</h4>
          <p>Noontainer */}
      </section>

      <footer>
        <div className="container">
          <h2>
            Hubungi Kami
          </h2>
          <p>No telp: 082197679118, Instagram: @Beasiswa.id, Email: Infobeasiswamkw@gmail.com</p>
        </div>
      </footer>
    </>
  );
}

export default Tentang;

