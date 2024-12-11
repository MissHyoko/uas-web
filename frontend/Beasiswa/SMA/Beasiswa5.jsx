import React from 'react'
import "../beasiswa-style.css"

function BI() {
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

      <section class="beasiswa-detail">
        
          <button><a href='../BeasiswaSMA.jsx'>
          <div className='left'>&#11164; Kembali</div></a>
        </button>
        
        <div className='beasiswa-title'>
          <h2>Beasiswa Inspiratif</h2>
        </div>
        

        <div className='beasiswa-content'>
        <div class="beasiswa-img">
          <img src="/" alt="" />
        </div>

        <div className='beasiswa-info'>
        <p><b>Nama Beasiswa : </b>Beasiswa Inspiratif</p>
        <p><b>Keuntungan : </b></p>
        <p><ul>
        <li>Tunjangan dana pendidikan hingga lulus dibayarkan setiap satu semester sekali.</li>
        <li>Virtual coaching sebanyak 3 kali.</li>
        <li>E-Certificate penerima beasiswa Inspiratif Tingkat Nasional dengan tanda tangan Kemenpora RI.</li>
        <li>Akses e-book self empowerment untuk menunjang pendidikan dan karier.</li>
    </ul></p>
        <p><b>Syarat Mendaftar : </b></p>
        <p><ul>
        <li>Terbuka untuk siswa SMP-SMA, gap year, dan mahasiswa D1-S2 perguruan tinggi negeri/swasta semua jurusan di seluruh Indonesia.</li>
        <li>Tanpa minimal nilai IPK dan rapor.</li>
        <li>Siswa/mahasiswa yang sudah menerima beasiswa pemerintah ataupun swasta diperbolehkan mendaftar.</li>
        <li>Memiliki kemampuan berkomunikasi yang baik. Aktif di media sosial menjadi nilai tambah.</li>
        <li>Memiliki wawasan yang luas tentang banyak hal, terutama pengetahuan umum tentang Indonesia serta provinsi dan daerah asal.</li>
        <li>Memiliki keterampilan dan atau passion yang kuat di bidang masing-masing.</li>
        <li>Sehat jasmani dan rohani.</li>
        <li>Memiliki komitmen yang tinggi, bertanggung jawab dan mau berkontribusi selama periode penerima Beasiswa Inspiratif.</li>
        <li>Merupakan pribadi yang menginspirasi atau memiliki tekat yang kuat untuk menjadi pribadi yang menginspirasi di masa yang akan datang.</li>
    </ul></p>
        <p><b>Dibuka : </b>11 Maret - 10 Juni</p>
        <p><b>Informasi Lebih Lanjut : </b><a href='https://bit.ly/BeasiswaInspiratif2022'>Beasiswa Inspiratif</a></p>
        </div>
        </div>
  </section>
    </>
  )
}

export default BI
