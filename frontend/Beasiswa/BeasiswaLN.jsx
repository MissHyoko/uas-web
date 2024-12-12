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

        <div className="container">

          <h2 className="title">Temukan Beasiswa Yang Tepat Untukmu!</h2>
          
          
            <div className='roll'>
            <button><Link to={"/BeasiswaSMA"}>Sekolah Menengah Atas</Link></button>
          <button><Link to={"/BeasiswaDN"}>Kuliah Dalam Negeri</Link></button>
          <button><Link to={"/BeasiswaLN"}>Kuliah Luar Negeri</Link></button>
            </div>
          <div className="shop-content">

            <div className="food-box">
            <Link to={"/SMA1"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Iced Coffee" />
              </div>
              <h2 className="food-title">Iced Coffee</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA1"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Choco Truffle Cake" />
              </div>
              <h2 className="food-title">Choco Truffle Cake</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA1"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Frappe" />
              </div>
              <h2 className="food-title">Frappe</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA1"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Brewed Coffee" />
              </div>
              <h2 className="food-title">Brewed Coffee</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA1"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Pineapple Pastry" />
              </div>
              <h2 className="food-title">Pineapple Pastry</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA1"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Mocha" />
              </div>
              <h2 className="food-title">Mocha</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA1"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Espresso" />
              </div>
              <h2 className="food-title">Espresso</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/SMA1"}>
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Ferrero Rocher Pastry" />
              </div>
              <h2 className="food-title">Ferrero Rocher Pastry</h2>
              </Link>
            </div>

          </div>
        </div>
    </>
  );
}

export default Beasiswa;