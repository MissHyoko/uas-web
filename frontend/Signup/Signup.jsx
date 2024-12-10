import React, { useState } from "react"
import "./Signup.css"

function Signup() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [NoTelp, setNoTelp] = useState("");
  const [JenisKelamin, setJenisKelamin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nama, email, password, NoTelp, JenisKelamin});
  };

  return (
    <div>
      <i id="burger" className="fas fa-bars" style={{ color: "#00AA5B" }}></i>
      <div className="na">
        <i className="fas fa-times" id="hide"></i>
    
      </div>

      <div id="particles-js"></div>

      <form onSubmit={handleSubmit}>
        <h2>Selamat Datang Di Website Beasiswa</h2>
        <br />
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <br />
        <input
          type="tel"
          placeholder="No Telp"
          value={NoTelp}
          onChange={(e) => setNoTelp(e.target.value)}
          />
        <br />
        <input
          type="tel"
          placeholder="Jenis Kelamin"
          value={JenisKelamin}
          onChange={(e) => setJenisKelamin(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  
        />
        <br />
        <button type="submit">Daftar</button>
      </form>
    </div>
  );
}

export default Signup;