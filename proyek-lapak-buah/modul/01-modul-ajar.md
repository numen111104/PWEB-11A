# Modul Ajar: Proyek "Lapak Buah 11-A"

Proyek website interaktif untuk merangkum materi JavaScript, struktur data, DOM, dan ES Module yang sudah diajarkan di kelas 11-A.

| | |
|---|---|
| Mata pelajaran | Pemrograman Web (PWEB) dan Pemrograman Berbasis Teks, Grafis dan Multimedia (PBTGM) |
| Kelas | 11-A |
| Waktu | Senin 19 Oktober sampai Kamis 22 Oktober 2026: 5 pertemuan, 10 JP, sekitar 370 menit |
| Produk akhir | Website "Lapak Buah 11-A": katalog buah, nota belanja, diskon, kupon, pembayaran |
| Teknologi | HTML, CSS native (tanpa framework CSS), JavaScript ES Module (tanpa library) |
| Bentuk kerja | Individu. Pair programming pada langkah tertentu |
| Berkas siswa | `starter/`, `modul/02-panduan-siswa.md`, `modul/04-lembar-kerja-siswa.md` |
| Berkas guru | `contoh-jadi/`, `modul/01`, `03`, `05` |

> Semua jadwal di dokumen ini berasal dari jadwal mengajar yang Bapak/Ibu berikan. "Hari ini" dibaca sebagai Senin 19 Oktober 2026.

---

## 1. Gambaran proyek

Siswa membangun toko buah kecil yang bisa dipakai langsung:

1. Katalog buah dibuat dari data (`array` berisi `object`), bukan ditulis satu per satu di HTML.
2. Klik "Tambah ke nota" memasukkan buah ke nota belanja. Nota disimpan dalam `Map`.
3. Nota bisa diubah jumlahnya atau dihapus. Subtotal, diskon bertingkat, pembulatan, dan total dihitung otomatis.
4. Pembeli mengisi uang dibayar, lalu halaman menghitung kembalian.
5. Kode program dipecah ke beberapa file `ES Module`.
6. Tampilan memakai CSS native: variabel CSS, grid, flexbox, media query, mode gelap.

### Mengapa tema lapak buah

Setiap bagian proyek adalah versi lebih besar dari contoh yang sudah siswa lihat di kelas, sehingga siswa mengenali polanya dan tidak merasa belajar hal asing.

| Contoh di kelas | Wujud di proyek |
|---|---|
| `products` (name, price, category, stok) di `struktur-data/object.js` | Data `produk` di `js/data.js` memakai nama key yang sama |
| Array `"Apel", "Mangga", "Nanas", "Pisang"` di `manipulasi-array.js` | Nama buah yang dijual |
| Bonus gaji bertingkat di `challange.js` (>= 5 juta 10%, >= 3 juta 5%, selain itu 0) | Diskon bertingkat di `hitungPersenDiskon` |
| `sessions` Map dengan key object di `real-case-map.js` | Nota belanja: `Map` dengan key object produk |
| `multiplier(2)` yang mengembalikan function di `first-class-citizen.js` | `buatKupon(10)` mengembalikan function kupon |
| `mahasiswa`, `hitungRataRata`, `tentukanPredikat` di `ESModule/config.mjs` | Pola data + fungsi yang dipecah per file |
| `event.html`: klik tombol mengubah `textContent`, `className`, `src` | Semua interaksi di `main.js` |
| `sapaByZona()` di `return-value.js` | `sapaByWaktu(jam)` untuk sapaan di halaman |

### Tiga tingkat target

| Tingkat | Isi | Siapa |
|---|---|---|
| **Wajib** | Katalog dari data, nota (Map), diskon bertingkat, pembulatan, bayar dan kembalian, modul ES, CSS responsif, sapaan, papan info, mode gelap | Semua siswa |
| **Level 2** | Kupon: `Map` berisi function, `buatKupon` yang mengembalikan function | Target kelas |
| **Bonus** | Filter dan urutan katalog, riwayat pesanan (push, shift, pop), tombol ganti warna apel | Siswa yang selesai lebih cepat |

---

## 2. Tujuan pembelajaran

Setelah 5 pertemuan, siswa mampu:

| TP | Tujuan | Indikator keberhasilan |
|---|---|---|
| TP1 | Menyusun halaman responsif dengan HTML semantik dan CSS native | Halaman rapi di lebar 1366 px dan 375 px tanpa scroll mendatar. Warna dan ukuran utama diambil dari `var(--...)`. State "habis" dibuat lewat `className` |
| TP2 | Menyimpan dan mengolah data dengan `array` dan `object` | `data.js` berisi minimal 6 produk valid (tes data lulus). Memakai destructuring minimal 2 tempat |
| TP3 | Memakai `Map` (`set`, `get`, `has`, `delete`) dengan key berupa object | Semua tes keranjang lulus. Siswa bisa menjelaskan mengapa key-nya object |
| TP4 | Menulis function (declaration, expression, arrow), parameter default, return, dan function sebagai nilai | Semua tes helper lulus. Siswa menyebut 3 tempat function dikirim sebagai argumen (`addEventListener`, `forEach`, `setTimeout`, dan lainnya) |
| TP5 | Memakai operator, konversi tipe, dan percabangan/ternary untuk aturan bisnis | Diskon benar di batas 74.999, 75.000, dan 150.000. Input diubah dengan `Number()`. Siswa bisa menjelaskan kenapa `"100000" + 1` menghasilkan `"1000001"` |
| TP6 | Memanipulasi DOM dan event | Katalog dan nota dirender dari data. Memakai event `click`, `input`, `change`. Mengubah `textContent`, `className`, `src` |
| TP7 | Memecah program dengan ES Module | Minimal 4 file module. Memakai named export, default export, dan `import * as`. Siswa bisa menjelaskan kenapa halaman harus dibuka lewat server |
| TP8 | Menguji, mencari kesalahan, dan menjelaskan kode sendiri | Menjalankan `node uji-logika.mjs` dan memperbaiki yang gagal. Ikut uji silang. Lolos satu tugas "ubah-langsung" saat wawancara kode |

---

## 3. Peta materi, fitur, dan file

Kolom "Asal materi" menunjuk berkas di repositori PWEB-11A, supaya siswa bisa membuka kembali contoh asalnya.

| Materi yang sudah diajarkan | Asal materi | Wujud di proyek | File |
|---|---|---|---|
| Variabel, `const` dan `let` | `variabel.js` | State halaman, konstanta aturan toko | `main.js`, `helper.js` |
| Operator aritmetika, `%`, `++`, `--`, `+=`, `-=` | `operator.js`, `pertemuan-4.pdf` | Harga x jumlah, diskon, pembulatan Rp100 dengan `%`, nomor pesanan `++`, stok `-=` | `helper.js`, `main.js` |
| Operator perbandingan dan logika | `operator.js`, `pertemuan-4.pdf` | `stok > 0`, `subtotal >= batas`, `a \|\| b` (kolom bayar kosong atau nota kosong) | `main.js`, `helper.js` |
| Ternary | `operator.js`, `arrow-function.js` | Class kartu, label stok, diskon bertingkat | `main.js`, `helper.js` |
| Konversi implisit dan eksplisit | `konversi-implisit.js`, `konversi-eksplisit.js` | `Number(inputBayar.value)`, `"Rp" + angka` | `main.js`, `helper.js` |
| Function declaration dan hoisting | `function.js` | `sapaByWaktu`, fungsi `render...` | `helper.js`, `main.js` |
| Return value | `return-value.js` | Seluruh fungsi helper | `helper.js`, `keranjang.js` |
| Function expression dan parameter default | `function-experession.js` | `formatRupiah(angka = 0)` | `helper.js` |
| First-class citizen | `first-class-citizen.js` | `buatKupon`, callback `forEach`/`addEventListener`/`setTimeout`/`sort`/`filter`, default parameter berupa function | `helper.js`, `main.js` |
| Arrow function | `arrow-function.js`, `challange.js` | Hampir semua helper dan event handler | semua |
| Array, method array | `array.js`, `manipulasi-array.js`, `array-method.js` | `produk`, `Array.from` untuk salinan, `sort`, `reverse`, `push`, `shift`, `pop` | `data.js`, `main.js`, `riwayat.js` |
| Array destructuring | `array-destructuring.js` | Pasangan `[item, jumlah]`, tukar gambar apel | `main.js` |
| Object, destructuring, ubah property | `object.js` | Produk, pesanan, `const { total } = ambilRingkasan()`, `item.stok -= jumlah` | `data.js`, `main.js` |
| Function di dalam struktur data | `array-object-function.js` | `daftarKupon`: Map berisi function | `helper.js` |
| Map | `map.js`, `real-case-map.js` | Nota (key object), daftar kupon | `keranjang.js`, `helper.js` |
| DOM dan event | `dom/index.html`, `dom/event.html` | Seluruh tampilan interaktif | `main.js` |
| ES Module | `modularisasi/*`, `ESModule/*` | 5 file `.js` saling import | semua `js/` |

---

## 4. Materi jembatan (hal baru yang perlu diajarkan singkat)

Proyek ini sengaja tidak memakai materi besar baru. Ada delapan mini-lesson, masing-masing 3 sampai 7 menit. Naskah, contoh kode, dan kunci jawabannya ada di `modul/05-bahan-guru.md`.

| Kode | Topik | Dipakai di | Mengapa perlu |
|---|---|---|---|
| M1 | Server lokal dan `<script type="module">` | Pertemuan 1 | Module tidak jalan jika halaman dibuka dengan klik dua kali |
| M2 | Variabel CSS, box model, flex dan grid | Pertemuan 1 | Dasar semua CSS proyek |
| M3 | `innerHTML` dan template literal untuk membuat HTML dari data | Pertemuan 2 | Cara merender katalog |
| M4 | Pola "render lalu pasang event" dan error `null` | Pertemuan 2 | Elemen baru harus ada dulu sebelum diberi event |
| M5 | Map dengan key object dan urutan `Map.forEach` (value, key) | Pertemuan 3 | Inti nota belanja |
| M6 | `input.value` selalu string, `Number()` | Pertemuan 4 | Kembalian dan pembayaran |
| M7 | Closure: `buatKupon` mengembalikan function | Pertemuan 4 dan 5 | Level 2 |
| M8 | `sort` dan `filter` menerima function | Pertemuan 5 | Bonus |

---

## 5. Persiapan guru

Sekitar 20 menit sebelum pertemuan pertama.

- [ ] Buka `contoh-jadi/` lewat server dan klik semua fitur sekali, supaya Bapak/Ibu tahu tampilan akhirnya. Cara menjalankan: lihat `README.md` di folder proyek.
- [ ] Jalankan `node uji-logika.mjs` di `contoh-jadi/`. Hasil yang benar: **WAJIB 25 benar, LEVEL 2 5 benar, BONUS 5 benar**.
- [ ] Bagikan folder `starter/` ke siswa (flashdisk, Classroom, atau zip). **Jangan bagikan `contoh-jadi/` sebelum Kamis**, kecuali untuk siswa Jalur Kejar (bagian 9).
- [ ] Pastikan tiap laptop punya VS Code dengan ekstensi Live Server, Node.js (`node -v` menampilkan versi), dan Chrome atau Edge.
- [ ] Siapkan proyektor dengan tiga jendela: browser, VS Code, dan terminal.
- [ ] Cetak atau bagikan `04-lembar-kerja-siswa.md` (satu per siswa).
- [ ] Cetak kartu pertanyaan wawancara dari `05-bahan-guru.md` (bagian C).
- [ ] Atur tempat duduk berpasangan untuk pair programming.
- [ ] Siapkan tabel penilaian dari `03-rubrik-penilaian.md`.

Asumsi ukuran kelas: 20 sampai 24 siswa. Jika berbeda, sesuaikan waktu wawancara di Pertemuan 5.

---

## 6. Jadwal satu minggu

| Pertemuan | Hari dan tanggal | Jam ke | Waktu | Mapel | JP | Menit efektif | Tema |
|---|---|---|---|---|---|---|---|
| 1 | Senin 19 Okt 2026 | 7 sampai 9 | 13:05 sampai 15:00 (jeda 13:40 sampai 13:45) | PWEB | 3 | 110 | Kerangka halaman dan data produk |
| 2 | Selasa 20 Okt 2026 | 3 | 09:40 sampai 10:20 | PWEB | 1 | 40 | Katalog dinamis dari data |
| 3 | Selasa 20 Okt 2026 | 6 sampai 7 | 12:30 sampai 13:40 | PBTGM | 2 | 70 | Nota belanja dengan Map |
| 4 | Rabu 21 Okt 2026 | 6 sampai 7 | 12:30 sampai 13:40 | PBTGM | 2 | 70 | Diskon, pembayaran, kupon |
| 5 | Kamis 22 Okt 2026 | 4 sampai 5 | 10:20 sampai 11:40 | PWEB | 2 | 80 | Finishing, uji silang, wawancara kode |

Total: 10 JP, 370 menit.

**Tentang slot PBTGM (Pertemuan 3 dan 4).** Jadwal yang diberikan memuat kelas 11-A pada mapel PBTGM di Selasa dan Rabu, sehingga slot itu dipakai untuk proyek ini. Bagian yang dikerjakan di slot tersebut adalah yang paling dekat dengan PBTGM: logika program berbasis teks (function, `Map`, hitung-hitungan) dan keluaran visual (gambar produk, animasi). Rubrik memisahkan skor logika dan skor tampilan (bagian 10), sehingga dapat dipakai untuk dua mapel jika sekolah memerlukannya. Jika slot PBTGM tidak boleh dipakai untuk proyek ini, kabari saya agar jadwal dipadatkan.

---

## 7. Rencana per pertemuan

Penanda langkah (`1.3`, `2.2`, dan seterusnya) sama dengan penanda di `starter/` dan `modul/02-panduan-siswa.md`.

> **Untuk dipegang saat mengajar:** ringkasan **satu halaman per pertemuan** (jalan kelas menit demi menit, poin yang diucapkan, kunci tebakan, error yang sering muncul, exit ticket dan kuncinya) ada di `modul/pdf/kartu/`. Bagian 7 ini adalah versi lengkapnya.

### Pertemuan 1: Kerangka halaman dan data produk

**Senin 19 Oktober 2026, jam ke-7 sampai 9, 13:05 sampai 15:00, PWEB, 110 menit**

**Tujuan:** siswa dapat (a) menjalankan proyek lewat server lokal dan menjelaskan alasannya, (b) menata halaman dengan CSS native, (c) menulis data produk sebagai array of object.

| Waktu | Menit | Kegiatan | Langkah |
|---|---|---|---|
| 13:05 sampai 13:15 | 10 | **Pembuka.** Tampilkan `contoh-jadi` di proyektor, klik semua fitur. Tanya: "Fitur mana yang memakai materi apa?" Siswa menulis 3 tebakan di lembar kerja. Bagikan peta materi (bagian 3). | - |
| 13:15 sampai 13:25 | 10 | **Setup.** Siswa membuka `starter/` di VS Code dan menjalankan Live Server. Guru lebih dulu membuka `index.html` dengan klik dua kali agar siswa melihat error CORS di Console. Mini-lesson **M1**. | 1.1 |
| 13:25 sampai 13:40 | 15 | **Baca HTML.** Siswa mengisi "Peta ID" di lembar kerja: 8 id dan perkiraan fungsinya. Guru menjelaskan tag semantik (`header`, `main`, `section`, `aside`, `footer`) dan beda `id` dan `class`. **Checkpoint 1**: server berjalan dan Peta ID terisi. | 1.2 |
| 13:40 sampai 13:45 | 5 | Pergantian jam pelajaran. | - |
| 13:45 sampai 13:50 | 5 | Mini-lesson **M2**: variabel CSS, box model, flex vs grid. | - |
| 13:50 sampai 14:25 | 35 | **Praktik CSS.** Header (10 menit), papan dan stiker (10), tata letak 2 kolom (10). **Checkpoint 2**: header, papan, dan dua kolom tampil. | 1.3, 1.4 |
| 14:25 sampai 14:45 | 20 | **Praktik CSS.** Katalog grid dan kartu contoh. | 1.5 |
| 14:45 sampai 14:55 | 10 | **Data.** Siswa melengkapi `js/data.js` (minimal 6 produk). Jalankan `node uji-logika.mjs`. **Checkpoint 3**: bagian DATA 4 dari 4 lulus. | 1.6 |
| 14:55 sampai 15:00 | 5 | **Exit ticket** (lihat `05-bahan-guru.md`), simpan pekerjaan. | - |

**Hasil akhir pertemuan:** halaman statis rapi dengan satu kartu contoh, `data.js` berisi 6 produk, tes DATA lulus.

**Jika waktu kurang:** langkah 1.5 yang belum selesai boleh dilanjutkan di awal Pertemuan 2 (maksimal 5 menit). Siswa yang jauh tertinggal memakai Jalur Kejar (bagian 9).

**Catatan guru:**
- Langkah 5.1 (CSS responsif) sengaja ditunda ke Pertemuan 5 supaya Pertemuan 1 tidak terlalu padat.
- Bagian nota di CSS sudah disediakan karena memakai teknik lanjutan (conic-gradient, drop-shadow). Siswa tidak menulisnya, tetapi diminta menjelaskan 3 aturan di Pertemuan 5.

---

### Pertemuan 2: Katalog dinamis dari data

**Selasa 20 Oktober 2026, jam ke-3, 09:40 sampai 10:20, PWEB, 40 menit**

**Tujuan:** siswa dapat membuat HTML dari data memakai function, `forEach`, dan template literal, lalu menampilkannya lewat DOM.

| Waktu | Menit | Kegiatan | Langkah |
|---|---|---|---|
| 09:40 sampai 09:45 | 5 | **Pemanasan "tebak output"**: 3 soal tentang destructuring object, `forEach`, template literal (soal dan kunci di `05-bahan-guru.md`). | - |
| 09:45 sampai 09:52 | 7 | Mini-lesson **M3** dan **M4**: membuat daftar siswa dari array object, lalu pola "render, lalu pasang event". | - |
| 09:52 sampai 10:15 | 23 | **Praktik.** `formatRupiah` (5 menit), `buatKartu` (10), `renderKatalog` langkah A sampai C dan `mulai()` (8). | 2.1, 2.2, 2.3 |
| 10:15 sampai 10:20 | 5 | **Exit ticket**, simpan pekerjaan. | - |

**Hasil akhir pertemuan:** kartu buah tampil dari `data.js`. Harga berformat Rupiah. Produk dengan `stok: 0` tampil dengan stempel "Habis" dan tombol nonaktif.

**Checkpoint:** ubah `stok` sebuah produk menjadi 0 di `data.js`, muat ulang halaman, kartunya berubah menjadi "Habis" tanpa mengubah kode lain. Inilah bukti bahwa tampilan dibangun dari data.

**Jika waktu kurang:** guru menunjukkan satu baris contoh `buatKartu` (bagian `className` dengan ternary) di papan tulis. Bagian lain tetap dikerjakan siswa.

---

### Pertemuan 3: Nota belanja dengan Map

**Selasa 20 Oktober 2026, jam ke-6 dan 7, 12:30 sampai 13:40, PBTGM, 70 menit**

**Tujuan:** siswa dapat memakai `Map` dengan key object untuk menyimpan nota, dan menampilkan isinya.

| Waktu | Menit | Kegiatan | Langkah |
|---|---|---|---|
| 12:30 sampai 12:38 | 8 | **Rekap dan mini-lesson M5**: demo `real-case-map.js`, lalu 3 soal tebak (`has` dengan object baru, urutan `Map.forEach`). | - |
| 12:38 sampai 13:08 | 30 | **Praktik `keranjang.js`**: enam fungsi satu per satu, tiap selesai satu jalankan `node uji-logika.mjs`. **Pair programming**: bergantian peran pengetik dan pengamat tiap 2 fungsi. | 3.1 |
| 13:08 sampai 13:30 | 22 | **Praktik `main.js`**: `tambahKeNota`, `renderNota` bagian daftar item (a sampai e), lalu pasang event tombol "Tambah ke nota". | 3.2, 3.3 |
| 13:30 sampai 13:37 | 7 | **Uji manual** dengan skenario di panduan siswa (tambah 3 kali, lewat stok, kurangi sampai hilang, hapus). | 3.3 |
| 13:37 sampai 13:40 | 3 | **Exit ticket.** | - |

**Hasil akhir pertemuan:** klik "Tambah ke nota" memasukkan buah ke nota. Jumlah bisa ditambah, dikurangi, dan dihapus. Tidak bisa melebihi stok. Tes KERANJANG lulus semua.

**Jika waktu kurang:** utamakan `tambahItem`, `hitungSubtotal`, dan tampilan daftar. Fungsi `kurangiItem` dan tombol `-` boleh diselesaikan di awal Pertemuan 4.

---

### Pertemuan 4: Diskon, pembayaran, dan kupon

**Rabu 21 Oktober 2026, jam ke-6 dan 7, 12:30 sampai 13:40, PBTGM, 70 menit**

**Tujuan:** siswa dapat menerapkan operator, ternary, konversi tipe, dan function yang mengembalikan object untuk menghitung diskon, total, dan kembalian.

| Waktu | Menit | Kegiatan | Langkah |
|---|---|---|---|
| 12:30 sampai 12:35 | 5 | **Rekap.** Tebak output: `"100000" + 1`, `"100000" - 1`, `Number("")`. | - |
| 12:35 sampai 12:42 | 7 | Mini-lesson **M6**: `input.value` selalu string. Ulas ternary bersusun dengan `challange.js`. | - |
| 12:42 sampai 13:12 | 30 | **Praktik helper**: `hitungPersenDiskon`, `hitungDiskon`, `formatPotongan`, `hitungRingkasan`. Hitung 3 kasus dengan tangan dulu, baru menulis kode. | 4.1, 4.2 |
| 13:12 sampai 13:30 | 18 | **Praktik tampilan**: ringkasan di nota, `renderKembalian`, tombol Bayar. | 4.3, 4.4 |
| 13:30 sampai 13:37 | 7 | **Level 2 (kupon)**: guru memperagakan `buatKupon` memakai pola `multiplier` (M7). Siswa yang sudah selesai mengerjakan, yang lain lanjut di Pertemuan 5. | 4.5 |
| 13:37 sampai 13:40 | 3 | **Exit ticket.** | - |

**Hasil akhir pertemuan (target minimum seluruh kelas):** nota menampilkan subtotal, diskon, pembulatan, dan total yang benar. Pembayaran menghitung kembalian. Tes HELPER tingkat WAJIB lulus.

**Jika waktu kurang:** kupon (langkah 4.5) pindah ke Pertemuan 5. Kupon adalah Level 2, bukan syarat kelulusan.

---

### Pertemuan 5: Finishing, uji silang, wawancara kode

**Kamis 22 Oktober 2026, jam ke-4 dan 5, 10:20 sampai 11:40, PWEB, 80 menit**

**Tujuan:** siswa menuntaskan fitur wajib, menguji karya teman, dan menjelaskan kodenya sendiri.

| Waktu | Menit | Kegiatan | Langkah |
|---|---|---|---|
| 10:20 sampai 10:25 | 5 | **Pembuka**: tampilkan daftar fitur akhir dan aturan wawancara. | - |
| 10:25 sampai 10:45 | 20 | **Blok A (semua siswa)**: CSS responsif (3 media query), tombol tema gelap, sapaan, `renderPapanInfo`. | 5.1 |
| 10:45 sampai 11:00 | 15 | **Blok B (pilihan sesuai tingkat)**: kupon (Level 2), atau filter dan urutan, atau riwayat pesanan, atau ganti warna apel. Mini-lesson M7 dan M8 bagi yang memilihnya. **Wawancara bergulir dimulai**: guru memanggil siswa yang sudah menyelesaikan Blok A, satu per satu. | 4.5, 5.2, 5.4 |
| 11:00 sampai 11:10 | 10 | **Uji silang berpasangan** memakai checklist 12 skenario di lembar kerja. Catat bug teman, jangan memperbaikinya. | 5.3 |
| 11:10 sampai 11:35 | 25 | **Wawancara kode (lanjutan).** Guru melanjutkan memanggil siswa bergantian. Siswa lain memperbaiki bug dari uji silang dan mengisi refleksi. | 5.4 |
| 11:35 sampai 11:40 | 5 | **Exit ticket** (refleksi), kumpulkan folder proyek, penutup. | - |

**Hasil akhir pertemuan:** proyek lengkap, bug dari uji silang tertangani, wawancara kode selesai, nilai dapat diisi dari rubrik.

**Hitungan waktu wawancara:** setiap siswa sekitar 2 menit (3 fungsi, 1 pertanyaan konsep, 1 tugas ubah-langsung, dengan kartu pertanyaan sudah disiapkan). Untuk 20 sampai 24 siswa dibutuhkan 40 sampai 48 menit. Waktu itu tersebar sejak 10:45 sampai 11:35 karena wawancara berjalan bergulir saat siswa lain bekerja. Jika masih kurang, wawancarai 5 sampai 6 siswa yang paling cepat selesai sambil berkeliling pada Pertemuan 4. Catat semuanya pada tabel 5.3 di `03-rubrik-penilaian.md`.

**Tugas lanjutan (opsional, tanpa nilai):** menambahkan fitur kupon sekali pakai, atau menyimpan nota ke `localStorage` (materi baru, bisa jadi bahan pertemuan berikutnya).

---

## 8. Strategi agar siswa memahami, bukan menyalin

| Strategi | Cara kerjanya |
|---|---|
| **Tebak dulu** | Sebelum menjalankan kode, siswa menulis tebakan hasilnya di lembar kerja. Selisih antara tebakan dan hasil nyata adalah bahan belajar. |
| **Panduan memakai contoh lain** | `02-panduan-siswa.md` mengajarkan pola lewat kasus lain (daftar siswa, absen, ongkir), bukan kode proyek. Siswa harus menerjemahkan sendiri. |
| **Tes otomatis** | `node uji-logika.mjs` memberi umpan balik langsung ✅ atau ❌ beserta alasan, sehingga siswa tidak menunggu guru dan tidak bisa menebak-nebak. |
| **Tiga tanya dulu** | Urutan bertanya: baca pesan error, tanya teman sebangku, baru tanya guru. Guru membalas dengan pertanyaan balik ("baris mana yang error mengatakan?"). |
| **Pair programming** | Pengetik dan pengamat bergantian. Pengamat dilarang menyentuh keyboard. |
| **Bantuan bertingkat** | Siswa yang macet mendapat Petunjuk 1 (arah), Petunjuk 2 (kerangka), Petunjuk 3 (guru duduk bersama). Jangan langsung memberi jawaban. |
| **Exit ticket harian** | 3 soal singkat di akhir tiap pertemuan, terhubung dengan hasil hari itu. |
| **Wawancara kode dan ubah-langsung** | Di Pertemuan 5 siswa menjelaskan kodenya dan mengubah satu aturan dalam 2 menit (misalnya "ganti batas diskon jadi Rp100.000"). Siswa yang hanya menyalin tidak bisa menyelesaikannya. |
| **Kode jadi disimpan guru** | `contoh-jadi/` baru dibuka bersama di Kamis. |

---

## 9. Diferensiasi dan Jalur Kejar

| Jalur | Untuk siapa | Isi |
|---|---|---|
| **A: Wajib** | Seluruh siswa | Semua langkah bertanda Wajib |
| **B: Level 2 dan Bonus** | Siswa yang selesai lebih cepat | Kupon, filter dan urutan, riwayat, ganti warna. Boleh menambah fitur sendiri setelah dikonsultasikan |
| **Kejar** | Siswa yang tertinggal lebih dari satu langkah | Setelah ditandatangani guru, boleh menyalin satu berkas dari `contoh-jadi/` (misalnya `css/style.css` agar bisa fokus ke JavaScript). Skor aspek CSS menjadi tingkat 2 paling tinggi. Aspek JavaScript tetap dinilai dari kode yang ia tulis sendiri |

**Bantuan bertingkat untuk siswa yang macet:**

1. **Petunjuk 1** (arah): "Fungsi ini mengembalikan apa? Baca lagi komentar TODO-nya."
2. **Petunjuk 2** (kerangka): guru menulis kerangka tanpa isi, misalnya `const tambahItem = (item) => { /* cek stok */ /* set */ }`.
3. **Petunjuk 3** (duduk bersama): guru dan siswa menelusuri dengan `console.log` langkah demi langkah.

---

## 10. Penilaian

Ringkasan. Rincian, rubrik, dan lembar penilaian ada di `03-rubrik-penilaian.md`.

| Komponen | Bobot | Sumber data |
|---|---|---|
| A. Proses dan kemandirian | 15 | Checkpoint harian, exit ticket, kerja sama |
| B. Produk | 50 | Pemeriksaan proyek dan hasil `node uji-logika.mjs` |
| C. Pemahaman | 25 | Wawancara kode dan tugas ubah-langsung |
| D. Kualitas kode dan refleksi | 10 | Penamaan, komentar, refleksi tertulis |

KKM: 75 (angka yang sama dengan batas lulus pada latihan `hitungNilai` di `arrow-function.js`; sesuaikan dengan kebijakan sekolah). Predikat memakai skala yang sama dengan `tentukanPredikat` di `ESModule/config.mjs`: A (90 ke atas), B (80 sampai 89), C (70 sampai 79), D (60 sampai 69), E (di bawah 60).

**Pemisahan nilai dua mapel (opsional):**

| Mapel | Aspek |
|---|---|
| PBTGM | B2 sampai B5 (logika: operator dan konversi, function, array dan object, Map), ditambah C |
| PWEB | A, B1, B6 sampai B8 (fungsionalitas, DOM dan event, ES Module, CSS), ditambah D |

---

## 11. Risiko dan cadangan

| Risiko | Cadangan |
|---|---|
| Live Server tidak ada di sebagian laptop | Jalankan `python3 -m http.server 5500` (atau `py -m http.server 5500` di Windows) di folder proyek, buka `http://localhost:5500`. Atau `npx serve`. |
| Node.js tidak terpasang | Tes otomatis tidak bisa dijalankan. Gunakan Console browser (`console.log`) dan checklist uji manual di panduan siswa. |
| Laptop kurang | Berpasangan. Satu laptop, dua siswa, bergantian peran tiap 10 menit. |
| Pertemuan hilang (libur, kegiatan sekolah) | Potong berurutan: bonus, kupon, riwayat. Fitur Wajib tidak dipotong. |
| Banyak siswa tertinggal di Pertemuan 1 | Jalur Kejar untuk CSS. Pertemuan 2 tetap berjalan karena fokusnya JavaScript. |
| Siswa menyalin dari teman | Wawancara kode dan ubah-langsung di Pertemuan 5 menjadi penentu skor aspek Pemahaman. |
| Siswa memakai AI untuk menjawab | Aturan kelas: AI boleh dipakai untuk bertanya "apa arti error ini", bukan untuk membuat fungsi. Wawancara kode tetap berlaku. |
| Internet mati | Proyek tidak memakai CDN, font, atau library dari internet, sehingga berjalan offline. |
