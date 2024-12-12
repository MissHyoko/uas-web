import React, { useState } from "react";
import "./Signup.css";
import { Link } from 'react-router-dom'


function Signup() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nama, email, password });
  };

  return (
    <>
    <div className="signup-container">
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
      <div className="na">
        <i className="fas fa-times" id="hide"></i>
      </div>

      <div id="particles-js"></div>

      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Selamat Datang Di Website Beasiswa</h2>
        
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  
        />

        <button type="submit">Daftar</button>
      </form>
    </div></>
  );
}

export default Signup