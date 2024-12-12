import React from 'react'
import "../beasiswa-style.css"
import { Link } from 'react-router-dom'

function DL8() {
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
          <h2>Beasiswa PPA (Peningkatan Prestasi Akademik)</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa PPA</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
  <li>Bantuan dana pendidikan yang lumaya bermanfaat.</li>
  <li>Kesempatan untuk meningkatkan prestasi akademik dan berkontribusi pada kemajuan pendidikan.</li>
</ul>
</p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
  <li>Kamu harus terdaftar sebagai mahasiswa PTS di Pangkalan Data Perguruan Tinggi (PDPT) dengan beberapa ketentuan berikut:
o	Program DIII: minimal semester II, maksimal semester IV.
o	Program DIV/S1: minimal semester II, maksimal semester VI, dan masih menjadi mahasiswa aktif sekurang-kurangnya 6 (enam) bulan tahun anggaran belanja.</li>
  <li>Kamu tidak mendapatkan bantuan biaya pendidikan yang lain dari sumber APBN/APBD (Beasiswa Pemprov Jateng, Bidikmisi, dsb).</li>
  <li>Melampirkan laporan IPK mahasiswa dengan IPK minimal 3,00.</li>
  <li>Melampirkan rekomendasi dari pimpinan Fakultas/Jurusan/Departemen.</li>
  <li>Melampirkan data yang disahkan oleh pihak perguruan tinggi dengan IPK minimal 3,00. Data tersebut seperti Kartu Tanda Mahasiswa (KTM), Kartu Hasil Studi (KHS)/transkrip nilai dan Kartu Rencana Studi (KRS) Semester Genap TA 2018/2019 sebagai bukti mahasiswa aktif.</li>
  <li>Melampirkan KTP dan Kartu Keluarga (KK) mahasiswa.</li>
  <li>Melampirkan piagam atau bukti prestasi lainnya pada bidang ko-kurikuler dan/atau ekstra kurikuler jika memiliki.</li>
  <li>Melampirkan buku tabungan/rekening koran bank (sesuai ketentuan) atas nama mahasiswa yang data rekeningnya terlihat jelas/bisa terbaca.</li>
</ul>
</p>
        <p><b>Dibuka : </b>26 Juli- 20 Agustus 2024.</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://lldikti6.kemdikbud.go.id/beasiswa-dan-bantuan-biaya-bendidikan-bagi-mahasiswa/ '>Beasiswa PPA</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default DL8
