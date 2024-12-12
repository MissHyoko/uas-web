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
        <div className="sejarah-container">
          <h2>Tentang Info Beasiswa</h2>
          <img src="././images/beasiswa.jpg" className="gambar" alt="" />
          <br />
          <p>Beasiswa adalah program pendanaan yang diberikan kepada individu untuk membantu mereka dalam menempuh pendidikan, baik di dalam negeri maupun di luar negeri. Beasiswa biasanya diberikan oleh lembaga pendidikan, organisasi, atau pemerintah untuk membantu siswa atau mahasiswa yang memiliki potensi akademik yang baik, tetapi tidak memiliki kemampuan finansial yang cukup untuk menempuh pendidikan. Beasiswa dapat membantu individu untuk menempuh pendidikan yang lebih tinggi, meningkatkan kemampuan akademik, dan memperluas kesempatan karir.</p>
          <p>
          Pentingnya beasiswa tidak dapat dipungkiri. Beasiswa dapat membantu individu untuk mencapai tujuan pendidikan mereka, meningkatkan kemampuan akademik, dan memperluas kesempatan karir. Selain itu, beasiswa juga dapat membantu mengurangi beban biaya pendidikan yang mahal, sehingga individu dapat fokus pada studinya tanpa harus khawatir tentang biaya. Beasiswa juga dapat membantu meningkatkan kesadaran dan kesempatan bagi individu yang kurang mampu, sehingga mereka dapat memiliki kesempatan yang sama untuk mencapai tujuan pendidikan mereka. Dalam jangka panjang, beasiswa dapat membantu meningkatkan kualitas pendidikan dan meningkatkan kemampuan individu untuk berkontribusi pada masyarakat. Oleh karena itu, beasiswa sangat penting untuk membantu individu mencapai tujuan pendidikan mereka dan meningkatkan kemampuan akademik mereka.
          </p>
          <p>
          Orang sering kali kesulitan menemukan beasiswa yang sesuai dengan kebutuhan mereka karena informasi tentang beasiswa tersebar di berbagai situs web dan platform di internet. Hal ini dapat membuat pencarian beasiswa menjadi rumit dan memakan waktu.
          </p>
          <p>
          Info beasiswa menawarkan solusi untuk mengatasi kesulitan ini dengan mengumpulkan seluruh informasi beasiswa dalam satu web. Dengan demikian, individu dapat dengan mudah menemukan informasi tentang beasiswa yang sesuai dengan kebutuhan mereka. Info beasiswa dapat membantu individu untuk:</p>
<ul>
<li>Mencari beasiswa yang sesuai dengan kebutuhan mereka</li>
<li>Menghemat waktu dalam mencari informasi tentang beasiswa</li>
<li>Meningkatkan kesempatan untuk mendapatkan beasiswa</li>
<li>Membuat proses pencarian beasiswa menjadi lebih efisien dan efektif</li></ul>
<br />
<p>Dengan mengumpulkan seluruh informasi beasiswa dalam satu web, Info beasiswa dapat membantu individu untuk mencapai tujuan pendidikan mereka dengan lebih mudah dan efektif.
          </p>
        </div>

        <footer>
    <h1>InfoBeasiswa</h1>
    <p>Ciptakan Masa Depanmu: Temukan Beasiswa yang Tepat</p>
  </footer>

    </>
  );
}

export default Tentang;

