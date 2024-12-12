import React from 'react';
import { Link } from 'react-router-dom'

import "./Beasiswa.css"

function Beasiswa() {
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
<div className='margin-DN'></div>

        <div className="container">

          <div className='top'>
                    <h2 className="title">Temukan Beasiswa Yang Tepat Untukmu!</h2>
                    
                    
                      <div className='roll'>
                      <button><Link to={"/BeasiswaSMA"}>Sekolah Menengah Atas</Link></button>
                    <button><Link to={"/BeasiswaDN"}>Kuliah Dalam Negeri</Link></button>
                    <button><Link to={"/BeasiswaLN"}>Kuliah Luar Negeri</Link></button>
                      </div>
                      </div>
          <div className="shop-content">

            <div className="food-box">
            <Link to={"/DL1"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Iced Coffee" />
              </div>
              <h2 className="food-title">Beasiswa Bank Indonesia</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/DL2"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Choco Truffle Cake" />
              </div>
              <h2 className="food-title">Beasiswa Tanoto Foundation</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/DL3"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Frappe" />
              </div>
              <h2 className="food-title">Beasiswa Djarum Plus</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/DL4"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Brewed Coffee" />
              </div>
              <h2 className="food-title">Beasiswa BCA Finance</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/DL5"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Pineapple Pastry" />
              </div>
              <h2 className="food-title">Beasiswa CIMB Niaga</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/DL6"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Mocha" />
              </div>
              <h2 className="food-title">Beasiswa XL Future Leaders</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/DL7"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Espresso" />
              </div>
              <h2 className="food-title">Beasiswa Cargill Global Scholar</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/DL8"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Ferrero Rocher Pastry" />
              </div>
              <h2 className="food-title">Beasiswa PPA (Peningkatan Prestasi Akademik)</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/DL9"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Ferrero Rocher Pastry" />
              </div>
              <h2 className="food-title">Beasiswa IGGS Telkom University</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/DL10"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Ferrero Rocher Pastry" />
              </div>
              <h2 className="food-title">Beasiswa Kartu Indonesia Pintar (KIP) kuliah</h2>
              </Link>
            </div>

          </div>
        </div>
        <footer>
    <h1>InfoBeasiswa</h1>
    <p>Ciptakan Masa Depanmu: Temukan Beasiswa yang Tepat</p>
  </footer>
    </>
  );
}

export default Beasiswa;