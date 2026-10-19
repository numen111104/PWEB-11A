# Rubrik dan Lembar Penilaian: Proyek "Lapak Buah 11-A"

Dokumen untuk guru. Tujuan penilaian bukan sekadar "websitenya jalan", tetapi **apakah siswa memahami materi yang dipakai**. Karena itu seperempat nilai berasal dari wawancara kode dan tugas ubah-langsung.

---

## 1. Komponen dan bobot

| Komponen | Aspek | Bobot |
|---|---|---|
| **A. Proses dan kemandirian (15)** | A1 Checkpoint harian | 5 |
| | A2 Exit ticket | 5 |
| | A3 Kemandirian, kerja sama, kejujuran akademik | 5 |
| **B. Produk (50)** | B1 Fungsionalitas fitur wajib | 10 |
| | B2 Variabel, operator, konversi tipe | 5 |
| | B3 Function dan function sebagai nilai | 8 |
| | B4 Array dan object | 5 |
| | B5 Map | 4 |
| | B6 DOM dan event | 6 |
| | B7 ES Module | 4 |
| | B8 CSS native dan responsif | 8 |
| **C. Pemahaman (25)** | C1 Menjelaskan kode sendiri | 10 |
| | C2 Pertanyaan konsep | 5 |
| | C3 Ubah-langsung | 10 |
| **D. Kualitas dan refleksi (10)** | D1 Kerapian kode | 5 |
| | D2 Refleksi tertulis | 5 |
| | **Total** | **100** |

## 2. Skala dan cara menghitung

| Level | Nama | Persentase bobot |
|---|---|---|
| 4 | Sangat baik | 100% |
| 3 | Baik | 75% |
| 2 | Cukup | 50% |
| 1 | Perlu bimbingan | 25% |
| 0 | Belum ada | 0% |

**Skor aspek = bobot x level / 4.** Skor akhir adalah jumlah seluruh skor aspek (maksimum 100).

Contoh: seorang siswa mendapat level 3 di semua aspek. Skor akhirnya 100 x 3 / 4 = **75**, tepat di KKM. Artinya, level 3 ("baik") berarti memenuhi kriteria, dan nilai di atas KKM membutuhkan sebagian aspek di level 4.

**Konversi nilai.** Memakai skala yang sama dengan `tentukanPredikat` di `ESModule/config.mjs`.

| Skor | Predikat | Keterangan |
|---|---|---|
| 90 sampai 100 | A | Sangat baik |
| 80 sampai 89 | B | Baik |
| 70 sampai 79 | C | Cukup |
| 60 sampai 69 | D | Kurang |
| di bawah 60 | E | Perlu perbaikan |

**KKM 75** (sama dengan batas lulus pada latihan `hitungNilai` di `arrow-function.js`). Ubah sesuai kebijakan sekolah.

---

## 3. Rubrik rinci

### A. Proses dan kemandirian

| Aspek | 4 Sangat baik | 3 Baik | 2 Cukup | 1 Perlu bimbingan |
|---|---|---|---|---|
| **A1 Checkpoint harian** (5 checkpoint, tabel di bagian 5) | 5 dari 5 tercapai tepat waktu | 4 dari 5 | 3 dari 5 | 2 atau kurang |
| **A2 Exit ticket** (5 kali) | Rata-rata benar 85% atau lebih | 70 sampai 84% | 50 sampai 69% | di bawah 50% atau tidak dikumpulkan |
| **A3 Kemandirian dan kejujuran** | Menulis kode sendiri, bertanya dengan urutan "baca error, teman, guru", membantu teman tanpa menyalin | Menulis sendiri, sesekali langsung bertanya guru | Sering meminta jawaban, kode sebagian mirip teman tanpa bisa menjelaskan | Menyalin kode yang tidak bisa dijelaskan |

### B. Produk

Bukti utama: hasil `node uji-logika.mjs` (tes otomatis), pemeriksaan halaman di browser, dan membaca kode.

| Aspek | 4 Sangat baik | 3 Baik | 2 Cukup | 1 Perlu bimbingan |
|---|---|---|---|---|
| **B1 Fungsionalitas fitur wajib** (bobot 10) | Tes **WAJIB** lulus semua (25 dari 25), seluruh fitur wajib berjalan, Console tanpa error | Tes WAJIB 21 sampai 24 lulus, fitur wajib berjalan dengan 1 sampai 2 bug kecil | Tes WAJIB 13 sampai 20 lulus. Katalog dan nota berjalan, diskon atau pembayaran belum benar | Tes WAJIB kurang dari 13. Hanya katalog yang tampil |
| **B2 Variabel, operator, konversi** (5) | `const` dan `let` tepat. `Number()` untuk input. `%`, `++`, `-=`, ternary dipakai benar. Angka aturan memakai konstanta | Benar, tetapi masih ada 1 sampai 2 angka aturan ditulis langsung (magic number) | `Number()` dipakai, namun operator banyak yang keliru atau konstanta tidak dipakai | Hasil sering `NaN` atau string karena konversi tidak dilakukan |
| **B3 Function dan function sebagai nilai** (8) | Function declaration, expression, dan arrow dipakai sesuai tujuan. Parameter default. `return` konsisten. Kupon (Level 2) berjalan dengan closure dan Map berisi function | Ketiga bentuk dipakai dan `return` konsisten. Kupon belum dikerjakan | Function ada, sebagian hasilnya lewat `console.log` atau langsung ke DOM bukan `return` | Sebagian besar logika ditulis di luar function |
| **B4 Array dan object** (5) | `data.js` valid (tes DATA 4 dari 4). Destructuring di 2 tempat atau lebih. `Array.from` sebelum `sort` atau `reverse`. Method array tepat | Data valid. Destructuring di 1 tempat | Data valid, tetapi mengubah array asli tanpa sadar atau tidak memakai destructuring | Data tidak valid (tes DATA gagal) |
| **B5 Map** (4) | `Map` dengan key object. `has`, `get`, `set`, `delete` tepat. Tes KERANJANG 9 dari 9 | Tes KERANJANG 7 sampai 8 | `Map` dipakai tetapi key berupa string atau logika banyak yang menyimpang | Tidak memakai `Map` |
| **B6 DOM dan event** (6) | Katalog dan nota dirender dari data. Event `click`, `input`, `change` benar. Pola "render lalu pasang event" konsisten. `textContent`, `className` dipakai sesuai tujuan. Tidak ada error `null` | Berfungsi, tetapi ada duplikasi kode atau elemen yang tidak perlu dibuat ulang | Sebagian elemen ditulis tetap di HTML dan tidak mengikuti data | Halaman tidak interaktif |
| **B7 ES Module** (4) | 4 file module atau lebih. Named export, default export, dan `import * as` dipakai. Tidak ada variabel global. Berjalan lewat server | 4 file module atau lebih, dua jenis export/import | 2 sampai 3 file module | Semua kode dalam satu file |
| **B8 CSS native dan responsif** (8) | Variabel CSS, grid dan flex, 3 media query, state `.habis`, mode gelap. Tampil benar di 375 px dan 1366 px | Tampil benar di kedua lebar, kekurangan satu teknik (misalnya mode gelap) | Tampilan jadi tetapi tidak responsif (scroll mendatar di HP) | Banyak blok TODO CSS masih kosong |

Catatan Jalur Kejar: siswa yang menyalin `css/style.css` dari `contoh-jadi/` dengan izin guru mendapat **maksimal level 2** pada B8. Aspek lain tetap dinilai dari kode yang ditulisnya sendiri.

### C. Pemahaman (wawancara kode)

Dilakukan di Pertemuan 5, sekitar 2 menit per siswa. Panduan pelaksanaan dan kartu pertanyaan ada di `05-bahan-guru.md`, bagian C.

| Aspek | 4 Sangat baik | 3 Baik | 2 Cukup | 1 Perlu bimbingan |
|---|---|---|---|---|
| **C1 Menjelaskan kode sendiri** (10) | Menjelaskan 3 fungsi pilihan guru (masukan, proses, keluaran, tempat dipakai) dengan benar tanpa membaca kode baris per baris | Menjelaskan 2 fungsi dengan benar | Menjelaskan dengan membaca baris per baris, benar sebagian | Tidak dapat menjelaskan |
| **C2 Pertanyaan konsep** (5) | Menjawab benar dan memberi contoh sendiri | Menjawab benar | Menjawab sebagian | Menjawab salah atau tidak menjawab |
| **C3 Ubah-langsung** (10) | Perubahan benar dalam 2 menit, langsung tahu file dan baris yang diubah | Benar dengan 1 petunjuk | Menemukan lokasi yang tepat tetapi perubahannya belum benar | Tidak dapat menemukan lokasinya |

### D. Kualitas kode dan refleksi

| Aspek | 4 Sangat baik | 3 Baik | 2 Cukup | 1 Perlu bimbingan |
|---|---|---|---|---|
| **D1 Kerapian kode** (5) | Nama camelCase yang bermakna (sesuai kesepakatan kelas), indentasi konsisten, komentar menjelaskan alasan (bukan mengulang kode), tidak ada kode mati atau `console.log` sisa | Rapi, ada 1 sampai 2 sisa `console.log` atau komentar kurang bermakna | Penamaan tidak konsisten atau indentasi berantakan | Sulit dibaca |
| **D2 Refleksi tertulis** (5) | Menyebut bagian yang dipahami disertai bukti (satu potongan kode), bagian yang membingungkan, dan rencana belajar yang konkret | Memuat dua dari tiga unsur | Umum dan tanpa bukti ("saya paham semua") | Tidak mengumpulkan |

---

## 4. Contoh pemeriksaan cepat B1 (5 menit per siswa)

1. Buka folder siswa lewat Live Server. Console tanpa error merah?
2. Jalankan `node uji-logika.mjs`. Catat angka WAJIB, LEVEL 2, BONUS.
3. Jalankan skenario cepat:
   - Apel 3 kg, Anggur 1 kg: subtotal Rp156.000, diskon 10% Rp15.600, total Rp140.400
   - Apel 1 kg, Pisang 1 kg, Mangga 1 kg: subtotal Rp75.000, diskon Rp3.750, pembulatan Rp50, total Rp71.200
   - Bayar Rp100.000 untuk total Rp140.400: "Uang kurang Rp40.400"
4. Resize ke lebar 375 px: tidak ada scroll mendatar.

(Angka di atas berlaku jika siswa memakai data yang direkomendasikan di langkah 1.6 panduan siswa.)

---

## 5. Lembar penilaian kelas

### 5.1 Tabel checkpoint harian (A1)

Centang jika tercapai pada hari itu.

| Nama | P1: tes DATA 4/4 dan halaman tertata | P2: kartu tampil dari data, "Habis" otomatis | P3: tes KERANJANG 9/9, tombol Tambah berfungsi | P4: total dan kembalian benar | P5: fitur wajib lengkap dan uji silang selesai | Jumlah |
|---|---|---|---|---|---|---|
| | | | | | | |

### 5.2 Tabel skor akhir

Isi level (0 sampai 4) pada setiap kolom. Baris "Bobot" dibiarkan tetap.

| Nama | A1 | A2 | A3 | B1 | B2 | B3 | B4 | B5 | B6 | B7 | B8 | C1 | C2 | C3 | D1 | D2 | Skor | Predikat |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Bobot** | 5 | 5 | 5 | 10 | 5 | 8 | 5 | 4 | 6 | 4 | 8 | 10 | 5 | 10 | 5 | 5 | 100 | |
| | | | | | | | | | | | | | | | | | | |

**Rumus spreadsheet.** Misal baris Bobot di baris 2 (kolom B sampai Q) dan level siswa di baris 3 (kolom B sampai Q):

```
=SUMPRODUCT(B3:Q3; B$2:Q$2) / 4
```

Gunakan titik koma atau koma sesuai pengaturan spreadsheet.

**Versi JavaScript (opsional, gaya yang sama dengan `ESModule/config.mjs`).**

```js
const bobot = [5, 5, 5, 10, 5, 8, 5, 4, 6, 4, 8, 10, 5, 10, 5, 5];

const hitungSkor = (level) => {
  const total = level.reduce((jumlah, nilai, index) => jumlah + (nilai * bobot[index]) / 4, 0);
  return total;
};

const tentukanPredikat = (nilai) => {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
};

console.log(hitungSkor([3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3])); // 77.5
```

### 5.3 Lembar wawancara kode (C1 sampai C3)

| Nama | Fungsi yang diminta (3) | C1 | Pertanyaan konsep (nomor di bank soal) | C2 | Tugas ubah-langsung (nomor) | C3 | Catatan |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

### 5.4 Lembar observasi harian (opsional)

| Tanggal | Pertemuan | Kondisi kelas | Siswa yang perlu perhatian | Tindak lanjut |
|---|---|---|---|---|
| | | | | |

---

## 6. Tindak lanjut hasil

| Hasil | Tindak lanjut |
|---|---|
| Skor 75 ke atas | Pengayaan: kupon sekali pakai, simpan nota ke `localStorage` (materi baru), atau membantu teman (tutor sebaya). |
| Skor 60 sampai 74 | Perbaikan: memperbaiki aspek yang kurang (daftar dari rubrik), lalu wawancara ulang 3 menit. |
| Skor di bawah 60 | Remedial terbimbing: mengerjakan ulang langkah 3.1 dan 4.1 sampai tes WAJIB lulus, lalu wawancara ulang. |

## 7. Kejujuran akademik

- Panduan sengaja memakai contoh dari kasus lain agar siswa menerjemahkan sendiri. Wawancara dan ubah-langsung adalah penentu skor aspek C.
- Kode yang mirip belum tentu menyalin, karena langkahnya memang sama. Yang dinilai: apakah siswa bisa menjelaskan dan mengubahnya.
- Siswa yang memakai bantuan AI atau teman untuk menulis fungsi, tetapi tidak dapat menjelaskannya, mendapat C1 dan C3 pada level 1, dan A3 diturunkan. Ini bukan hukuman, melainkan cerminan pemahaman yang sebenarnya.
