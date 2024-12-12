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
    <div className='margin-LN'></div>

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
            <Link to={"/LN1"}>
              <div className="pic">
                <img src="././images/logo.png" className="food-img" alt="Iced Coffee" />
              </div>
              <h2 className="food-title">Stipendium Hungaricum Scholarhip</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/LN2"}>
              <div className="pic">
                <img src="././images/logo.png" className="food-img" alt="Choco Truffle Cake" />
              </div>
              <h2 className="food-title">NTU ASEAN Undergraduate Scholarship</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/LN3"}>
              <div className="pic">
                <img src="././images/logo.png" className="food-img" alt="Frappe" />
              </div>
              <h2 className="food-title">Mitsui Bussan Scholarship</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/LN4"}>
              <div className="pic">
                <img src="././images/logo.png" className="food-img" alt="Brewed Coffee" />
              </div>
              <h2 className="food-title">Turkiye Burslari Scholarship</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/LN5"}>
              <div className="pic">
                <img src="././images/logo.png" className="food-img" alt="Pineapple Pastry" />
              </div>
              <h2 className="food-title">KAren McKellin International Leader of Tomorrow Awards - University British Columbia</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/LN6"}>
              <div className="pic">
                <img src="././images/logo.png" className="food-img" alt="Mocha" />
              </div>
              <h2 className="food-title">Stamps Scholarship - University of Miami</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/LN7"}>
              <div className="pic">
                <img src="././images/logo.png" className="food-img" alt="Espresso" />
              </div>
              <h2 className="food-title">KAIST International Undergradate Scholarship</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/LN8"}>
              <div className="pic">
                <img src="././images/logo.png" className="food-img" alt="Ferrero Rocher Pastry" />
              </div>
              <h2 className="food-title">FeTokyo International University Scholarship</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/LN9"}>
              <div className="pic">
                <img src="././images/logo.png" className="food-img" alt="Ferrero Rocher Pastry" />
              </div>
              <h2 className="food-title">HKU Etrance Scholarship for Outstanding Student</h2>
              </Link>
            </div>

            <div className="food-box">
            <Link to={"/LN10"}>
              <div className="pic">
                <img src="././images/logo.png" className="food-img" alt="Ferrero Rocher Pastry" />
              </div>
              <h2 className="food-title">The Lester B.Pearson Scholarship - University of Toronto</h2>
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