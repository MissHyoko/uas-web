import React from 'react';
import { Link } from 'react-router-dom'
import "./Beasiswa.css"

function BeasiswaSMA() {
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
            <Link to={"/SMA1"}>
              <div className="pic">
                <img src="../images/bi.jpg" className="food-img" alt="Iced Coffee" />
              </div>
              <h2 className="food-title">Australian Independent School (AIS) Scholarships Programme</h2>              
            </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA2"}>
              <div className="pic">
                <img src="../images/bi.jpg" className="food-img" alt="Choco Truffle Cake" />
              </div>
              <h2 className="food-title">Beasiswa Tunas Indonesia Jepang</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA3"}>
              <div className="pic">
                <img src="../images/bi.jpg" className="food-img" alt="Frappe" />
              </div>
              <h2 className="food-title">Beasiswa SimulasiKu</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA4"}>
              <div className="pic">
                <img src="../images/bi.jpg" className="food-img" alt="Brewed Coffee" />
              </div>
              <h2 className="food-title">Beasiswa YBM BRILIAN</h2>
             </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA5"}>
              <div className="pic">
                <img src="../images/bi.jpg" className="food-img" alt="Pineapple Pastry" />
              </div>
              <h2 className="food-title">Beasiswa Inspiratif</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA6"}>
              <div className="pic">
                <img src="../images/bi.jpg" className="food-img" alt="Mocha" />
              </div>
              <h2 className="food-title">Beasiswa Amartha Cendekia</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA7"}>
              <div className="pic">
                <img src="../images/bi.jpg" className="food-img" alt="Espresso" />
              </div>
              <h2 className="food-title">Beasiswa Anak Teladan Indonesia (BATI)</h2>
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

export default BeasiswaSMA