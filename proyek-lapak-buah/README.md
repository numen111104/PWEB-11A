# Proyek "Lapak Buah 11-A"

Proyek website interaktif untuk kelas 11-A (Pemrograman Web dan PBTGM), dikerjakan selama satu minggu: **Senin 19 sampai Kamis 22 Oktober 2026**, 5 pertemuan, 10 JP.

Website berupa lapak buah dengan katalog, nota belanja, diskon bertingkat, kupon, dan pembayaran. Seluruhnya memakai **HTML, CSS native, dan JavaScript ES Module**, tanpa framework dan tanpa library.

## Isi folder

```
proyek-lapak-buah/
├── README.md              (file ini)
├── contoh-jadi/           Proyek selesai. KHUSUS GURU, jangan dibagikan sebelum Kamis
├── starter/               Kerangka untuk siswa (HTML jadi, CSS dan JS berisi TODO)
└── modul/
    ├── pdf/                          PDF siap cetak (lihat bagian "Modul PDF")
    ├── 01-modul-ajar.md              Guru. Tujuan, jadwal, kegiatan per pertemuan, strategi
    ├── 02-panduan-siswa.md           Siswa. Panduan bertahap
    ├── 03-rubrik-penilaian.md        Guru. Rubrik, lembar penilaian, rumus nilai
    ├── 04-lembar-kerja-siswa.md      Siswa. Lembar kerja, uji silang, refleksi
    ├── 05-bahan-guru.md              Guru. Mini-lesson, kunci, bank soal wawancara, troubleshooting
    ├── build-pdf.sh                  Membuat ulang PDF dari berkas .md
    └── cetak/                        Gaya cetak dan sampul untuk PDF
```

## Modul PDF

Folder `modul/pdf/` berisi dua PDF A4 yang siap dicetak atau dibagikan:

| Berkas | Isi | Untuk |
|---|---|---|
| `Modul-Lapak-Buah-11A-Lengkap-Guru.pdf` | Sampul, daftar isi, modul ajar, panduan siswa, rubrik, lembar kerja, bahan guru | Guru (61 halaman) |
| `Paket-Siswa-Lapak-Buah-11A.pdf` | Sampul, panduan siswa, lembar kerja | Dibagikan ke siswa (31 halaman) |

Jika isi modul (`.md`) diubah, buat ulang PDF-nya. Perlu `pandoc` dan Google Chrome (macOS):

```bash
bash proyek-lapak-buah/modul/build-pdf.sh
```

## Mulai dari mana (guru)

1. Baca `modul/01-modul-ajar.md`, terutama bagian 5 (persiapan) dan 7 (rencana per pertemuan).
2. Jalankan `contoh-jadi/` untuk melihat hasil akhirnya (cara di bawah).
3. Bagikan folder `starter/` dan `modul/pdf/Paket-Siswa-Lapak-Buah-11A.pdf` (atau berkas `.md` yang sama) ke siswa.

## Menjalankan proyek

Proyek memakai `<script type="module">`, sehingga **harus dibuka lewat server**, bukan klik dua kali pada `index.html`.

**Cara 1 (disarankan): Live Server di VS Code.** Klik kanan `index.html`, pilih *Open with Live Server*.

**Cara 2: server Python.** Dari dalam folder `contoh-jadi` atau `starter`:

```bash
python3 -m http.server 5500
```

Lalu buka `http://localhost:5500`. Di Windows gunakan `py -m http.server 5500`.

**Cara 3: Node.**

```bash
npx serve .
```

## Menjalankan pemeriksa otomatis

Logika program (tanpa tampilan) dapat diperiksa dari terminal. Perlu Node.js.

```bash
cd contoh-jadi
node uji-logika.mjs
```

Hasil yang benar untuk `contoh-jadi`: WAJIB 25 benar, LEVEL 2 5 benar, BONUS 5 benar. Pada `starter` hasil awalnya banyak ❌, dan menjadi ✅ satu per satu seiring siswa menulis kodenya.

## Ringkasan teknis

| Hal | Isi |
|---|---|
| Halaman | Satu `index.html`, semantik, dengan id untuk JavaScript dan class untuk CSS |
| CSS | Satu `style.css`: variabel CSS, grid, flexbox, media query, mode gelap, animasi kecil. Tanpa framework dan tanpa font atau CDN dari internet |
| JavaScript | 5 module: `data.js`, `helper.js`, `keranjang.js`, `riwayat.js`, `main.js`. Hanya `main.js` yang menyentuh DOM |
| Gambar | 7 ilustrasi SVG buatan sendiri di `assets/img/` (bebas hak cipta) |
| Offline | Seluruhnya berjalan tanpa internet |

## Hubungan dengan materi di repositori

Setiap bagian proyek mengulang contoh yang sudah diajarkan: `struktur-data/object.js` (data produk), `challange.js` (diskon bertingkat), `real-case-map.js` (nota dengan Map), `first-class-citizen.js` (kupon), `ESModule/` dan `modularisasi/` (pemecahan file), dan `dom/event.html` (interaksi). Peta lengkapnya ada di `modul/01-modul-ajar.md`, bagian 3.
