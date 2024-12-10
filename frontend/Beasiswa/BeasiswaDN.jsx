import React from 'react';
import "./Beasiswa.css"

function Beasiswa() {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">InfoBeasiswa</a>
        <nav className='navbar'>
          <a href="#">Beranda</a>
          <a href="#">Beasiswa</a>
          <a href="#">Tentang</a>
          <a href="#">Kontak</a>
        </nav>
      </header>

        <div className="container">

          <h2 className="title">Temukan Beasiswa Yang Tepat Untukmu!</h2>
          
          
            <div className='roll'>
            <button><a  href="./BeasiswaSMA.jsx">Sekolah Menengah Atas</a></button>
          <button className='button-click'><a  href="./BeasiswaDN.jsx">Kuliah Dalam Negeri</a></button>
          <button><a href="./BeasiswaLN.jsx">Kuliah Luar Negeri</a></button>
            </div>
          <div className="shop-content">

            <div className="food-box">
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Iced Coffee" />
              </div>
              <h2 className="food-title">Iced Coffee</h2>
              <span className="food-price">Rs.65</span>
            </div>

            <div className="food-box">
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Choco Truffle Cake" />
              </div>
              <h2 className="food-title">Choco Truffle Cake</h2>
              <span className="food-price">Rs.165</span>
            </div>

            <div className="food-box">
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Frappe" />
              </div>
              <h2 className="food-title">Frappe</h2>
              <span className="food-price">Rs.65</span>
            </div>

            <div className="food-box">
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Brewed Coffee" />
              </div>
              <h2 className="food-title">Brewed Coffee</h2>
              <span className="food-price">Rs.100</span>
            </div>

            <div className="food-box">
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Pineapple Pastry" />
              </div>
              <h2 className="food-title">Pineapple Pastry</h2>
              <span className="food-price">Rs.125</span>
            </div>

            <div className="food-box">
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Mocha" />
              </div>
              <h2 className="food-title">Mocha</h2>
              <span className="food-price">Rs.110</span>
            </div>

            <div className="food-box">
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Espresso" />
              </div>
              <h2 className="food-title">Espresso</h2>
              <span className="food-price">Rs.90</span>
            </div>

            <div className="food-box">
              <div className="pic">
                <img src="././images/bi.jpg" className="food-img" alt="Ferrero Rocher Pastry" />
              </div>
              <h2 className="food-title">Ferrero Rocher Pastry</h2>
              <span className="food-price">Rs.145</span>
            </div>

          </div>
        </div>
    </>
  );
}

export default Beasiswa;