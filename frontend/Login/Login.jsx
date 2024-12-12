import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom'


function Login() {
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nama, password });
  };

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
    <div className="login-container">
      <div className="na">
        <i className="fas fa-times" id="hide"></i>
      </div>

      <div id="particles-js"></div>

      <form onSubmit={handleSubmit}>
        <h2>Selamat Datang</h2>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Masuk</button>

        <div className="signup-link">
          <p>
            Belum punya akun?{" "}
            <a href="/Signup">Buat Akun</a> 
          </p>
        </div>
      </form>
    </div></>
  );
}

export default Login