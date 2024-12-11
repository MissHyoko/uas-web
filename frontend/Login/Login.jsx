import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nama, password });
  };

  return (
    <div>
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
        <br />
        <br />
        <br />
        <button type="submit">Masuk</button>

        {/* Pindahkan bagian sign-up link di bawah tombol "Masuk" */}
        <div className="signup-link">
          <p>
            Belum punya akun?{" "}
            <a href="/Signup">Buat Akun</a> {/* Link ke halaman pendaftaran */}
          </p>
        </div>
      </form>
    </div>
  );
}

<<<<<<< Updated upstream
export default Login;
=======
export default Login
>>>>>>> Stashed changes
