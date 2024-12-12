import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function DL4() {
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

      <section class="beasiswa-detail">
        
          <button><Link to={"/BeasiswaDN"}>
          <div className='left'>&#11164; Kembali</div></Link>
        </button>
        
        <div className='beasiswa-title'>
          <h2>Beasiswa BCA Finance</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa BCA Finance</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Bantuan dana sebesar 3,5 juta rupiah untuk biaya pendidikan.</li>
  <li>Kelas persiapan untuk memasuki dunia kerja.</li>
  <li>Pelatihan dan pengembangan keterampilan yang dibutuhkan untuk menjadi profesional yang sukses.</li>
</ul>
</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Kamu harus merupakan mahasiswa/i PTN/PTS dari semua jurusan di Indonesia yang sedang menempuh program Strata-1 (S-1).</li>
  <li>Kamu juga harus menjadi mahasiswa aktif S1 yang pada saat pendaftaran Beasiswa dibuka, sedang menempuh studi minimal semester 4 perkuliahan dan tidak lebih dari semester 8.</li>
  <li>Perguruan Tinggi Negeri (PTN) memiliki syarat IPK minimum 3,20; IPS terakhir 3,00, dan Perguruan Tinggi Swasta (PTS) syarat IPK minimum 3,40; IPS terakhir 3,20.</li>
  <li>Melampirkan data softcopy Surat Keterangan Tidak Mampu dari Kelurahan yang sesuai dengan wilayah atau daerah asal pada KTP. </li>
  <li>Melampirkan data softcopy dari tagihan rekening listrik selama 2 bulan terakhir, sesuai dengan wilayah atau daerah asal pada KTP.</li>
  <li>Melampirkan softcopy surat keterangan dari Universitas yang menyatakan bahwa kamu tidak sedang menerima beasiswa dari tempat lain.</li>
  <li>Harus aktif berorganisasi (kemahasiswaan / Karang Taruna / Organisasi Non Politik Lainnya).</li>
  <li>Tidak pernah masuk dan terlibat dalam tindak kasus pidana ataupun kasus perdata, dan juga penyalahgunaan narkotika, psikotropika, hingga zat adiktif.</li>
</ul>
</p>
        <p><b>Dibuka : </b>01 - 30 Juni 2024</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://bcafinance.co.id/tentang-kami/csr/test-beasiswa '>Beasiswa BCA Finance</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default DL4
