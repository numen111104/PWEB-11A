# Lembar Kerja Siswa: Proyek "Lapak Buah 11-A"

Nama: ______________________  No. absen: ______  Kelas: 11-A

Isi lembar ini sambil mengerjakan `02-panduan-siswa.md`. Tulis jawaban dengan kata-katamu sendiri. **Bagian "Tebak" diisi SEBELUM menjalankan kode.**

---

## Pertemuan 1: Senin 19 Oktober 2026

### Tebakan pembuka

Dari demo guru, fitur mana yang menurutmu memakai materi apa?

| Fitur yang kamu lihat | Materi yang dipakai (tebakanmu) |
|---|---|
| 1. | |
| 2. | |
| 3. | |

### Langkah 1.1 sampai 1.2

**Tebak:** jika `index.html` dibuka dengan klik dua kali, apa yang terjadi?
______________________________________________________________

**Jawab:** kenapa halaman dengan `<script type="module">` harus dibuka lewat server?
______________________________________________________________
______________________________________________________________

**Peta ID** (minimal 8 baris):

| id | Jenis elemen | JavaScript akan melakukan apa padanya? |
|---|---|---|
| `#sapaan` | | |
| | | |
| | | |
| | | |
| | | |
| | | |
| | | |
| | | |

**Jawab:** apa yang terjadi di `main.js` jika id `#tombol-bayar` di HTML diganti `#tombol-bayar2`?
______________________________________________________________

### Langkah 1.3 sampai 1.5

**Tebak (1.3):** `justify-content` mengatur arah mendatar atau menurun? `align-items`?
______________________________________________________________

**Jawab (1.4):** apa beda `minmax(0, 1fr)` dan `1fr`?
______________________________________________________________
______________________________________________________________

**Tebak (1.5):** jumlah kolom `repeat(auto-fill, minmax(150px, 1fr))` (jarak 12 px) di layar 600 px: ______ kolom. Di layar 300 px: ______ kolom.

**Jawab (1.5):** kenapa `.kartu-foto` harus `position: relative`? Dari mana warna latar fotonya diambil?
______________________________________________________________
______________________________________________________________

### Langkah 1.6

**Tebak:** hasil `"18.000" * 2` adalah ____________ . (Cek di Console. Sesuai tebakanmu?)

**Jawab:** kenapa `id` setiap produk harus unik?
______________________________________________________________

### Checkpoint Pertemuan 1 (diisi guru)

- [ ] Halaman terbuka lewat `http://` dan Console tanpa error
- [ ] Header, papan, dan dua kolom tampil
- [ ] Kartu contoh rapi dan state "habis" bisa dicoba
- [ ] `node uji-logika.mjs`: bagian DATA 4 dari 4 ✅

Paraf guru: ________

### Exit ticket Pertemuan 1

1. Kenapa proyek ini harus dibuka lewat Live Server, bukan klik dua kali?
______________________________________________________________
2. Tulis satu object produk dengan key `name`, `price`, `category`, `stok`.
______________________________________________________________
3. Sebutkan dua keuntungan variabel CSS (`--aksi`) dibanding menulis warna langsung.
______________________________________________________________

---

## Pertemuan 2: Selasa 20 Oktober 2026 (Jam ke-3)

### Tebak dan jawab

**Tebak (2.1):** `(32000).toLocaleString("id-ID")` menghasilkan ____________ dengan tipe data ____________ .

**Jawab (2.1):** apa beda function expression dan function declaration saat dipanggil sebelum barisnya?
______________________________________________________________

**Tebak (2.2):** tipe data hasil `buatBarisSiswa(...)` (contoh di panduan): ____________

**Jawab (2.2):** kenapa `buatKartu` mengembalikan string dan tidak langsung mengisi halaman?
______________________________________________________________

**Tebak (2.3):** jika `let html;` (tanpa `= ""`), isi `html` di akhir diawali teks ____________

**Jawab (2.3):** apa yang terjadi bila event dipasang sebelum `katalog.innerHTML = html`? Tulis pesan errornya.
______________________________________________________________

### Checkpoint Pertemuan 2 (diisi guru)

- [ ] `formatRupiah` lulus tes
- [ ] Kartu tampil dari `data.js` (bukan dari HTML)
- [ ] Produk `stok: 0` otomatis "Habis" setelah halaman dimuat ulang

Paraf guru: ________

### Exit ticket Pertemuan 2

1. `buatKartu(item)` mengembalikan tipe data apa? ____________
2. Kenapa tombol di kartu tidak bisa diberi `addEventListener` sebelum `innerHTML` diisi?
______________________________________________________________
3. `formatRupiah()` tanpa argumen menghasilkan ____________ . Fitur apa yang membuatnya begitu? ____________

---

## Pertemuan 3: Selasa 20 Oktober 2026 (Jam ke-6 dan 7)

### Tebak dan jawab

**Tebak (3.1):**

```js
const a = { id: 1 };
const b = { id: 1 };
const peta = new Map();
peta.set(a, "x");
console.log(peta.has(a), peta.has(b), peta.size);
```

Hasil: ______ , ______ , ______

**Jawab:** kenapa `peta.has(b)` bernilai `false`?
______________________________________________________________

**Jawab:** apa urutan parameter callback `Map.forEach`? Apa bedanya dengan `Array.forEach`?
______________________________________________________________

**Jawab:** apa yang terjadi bila `tambahItem` tidak mengecek stok?
______________________________________________________________

**Jawab (3.2):** kenapa parameter `keranjang.forEach` ditulis `(jumlah, item)`?
______________________________________________________________

### Uji manual nota (Langkah 3.3)

| No | Skenario | Berhasil? |
|---|---|---|
| 1 | Tambah Apel 3 kali, jadi 3 kg, badge 3 | |
| 2 | Tombol `-` pada Apel, jadi 2 kg | |
| 3 | Tambah Mangga (stok 4) 5 kali, berhenti di 4 kg dan ada pesan | |
| 4 | `-` pada item 1 kg, item hilang | |
| 5 | "Hapus" pada item 3 kg, hilang sekaligus | |
| 6 | Produk stok 0, tombol nonaktif | |

### Checkpoint Pertemuan 3 (diisi guru)

- [ ] `node uji-logika.mjs`: bagian KERANJANG 9 dari 9 ✅
- [ ] Tombol "Tambah ke nota", `-`, `+`, "Hapus" berfungsi
- [ ] Jumlah tidak bisa melebihi stok

Paraf guru: ________

### Exit ticket Pertemuan 3

1. Kenapa `peta.has(objekBaruIsiSama)` bernilai `false`?
______________________________________________________________
2. Tulis urutan parameter callback `Map.forEach`: `(______, ______)`
3. Apa risikonya jika `tambahItem` tidak memeriksa stok?
______________________________________________________________

---

## Pertemuan 4: Rabu 21 Oktober 2026

### Tebak dan hitung dengan tangan (SEBELUM menulis kode)

**Tabel diskon (4.1):**

| Subtotal | Persen diskon | Diskon (Rp) |
|---|---|---|
| 60.000 | | |
| 74.999 | | |
| 75.000 | | |
| 150.000 | | |

**Tabel ringkasan (4.2):**

| Subtotal | Kupon | Diskon | Potongan kupon | Sebelum pembulatan | Pembulatan | Total |
|---|---|---|---|---|---|---|
| 100.000 | tidak ada | | | | | |
| 77.000 | tidak ada | | | | | |
| 80.000 | 10% (Level 2) | | | | | |

**Tebak (4.2):** `73150 % 100` = ______ . `((a, f = () => 0) => f(a))(5)` = ______

**Tebak (4.3):** jika `inputBayar.value` berisi `100000`:

| Ekspresi | Hasil tebakanmu | Hasil sebenarnya |
|---|---|---|
| `inputBayar.value + 1000` | | |
| `Number(inputBayar.value) + 1000` | | |
| `inputBayar.value - 1000` | | |
| `Number("")` | | |

**Jawab (4.1):** apa bedanya `3 * 5 / 100` dan `3 * (5 / 100)` di Console? Kenapa urutan pertama lebih aman untuk uang?
______________________________________________________________
______________________________________________________________

**Jawab (4.3):** apa beda `addEventListener("input", renderKembalian)` dengan `addEventListener("input", renderKembalian())`?
______________________________________________________________

**Jawab (4.4):** kenapa stok dikurangi setelah pembayaran, bukan saat item masuk nota?
______________________________________________________________

**Jawab (4.5, Level 2):** kenapa `daftarKupon.get("HEMAT10")(200000)` bisa langsung dipanggil seperti function?
______________________________________________________________

### Uji pembayaran (Langkah 4.4)

| Skenario | Berhasil? |
|---|---|
| Bayar saat nota kosong: pesan nota kosong | |
| Bayar kurang: pesan uang kurang, nota tetap | |
| Bayar cukup: kembalian benar, nota kosong, stok kartu berkurang | |
| Beli semua stok Mangga lalu bayar: kartu Mangga menjadi "Habis" | |

### Checkpoint Pertemuan 4 (diisi guru)

- [ ] `node uji-logika.mjs`: seluruh tes WAJIB ✅ (25 dari 25)
- [ ] Ringkasan nota (subtotal, diskon, pembulatan, total) benar
- [ ] Kembalian dan "uang kurang" benar

Paraf guru: ________

### Exit ticket Pertemuan 4

1. `inputBayar.value` bernilai `"100000"`. Hasil `inputBayar.value + 1000` adalah ____________ dan `Number(inputBayar.value) + 1000` adalah ____________
2. Tulis ternary: diskon 10% jika subtotal >= 150.000, 5% jika >= 75.000, selain itu 0.
______________________________________________________________
3. `73150 % 100` = ______ . Dipakai untuk apa di nota?
______________________________________________________________

---

## Pertemuan 5: Kamis 22 Oktober 2026

### Uji silang (Langkah 5.3)

Teman yang kamu uji: ______________________

Pilih Berhasil (✔) atau Gagal (✘). Jika gagal, tulis apa yang terjadi di kolom catatan. **Jangan memperbaiki karya temanmu.**

| No | Skenario | Hasil yang benar | ✔/✘ | Catatan |
|---|---|---|---|---|
| 1 | Buka lewat server, lihat Console | Tidak ada error merah | | |
| 2 | Lihat katalog | Minimal 6 kartu. Produk stok 0 berlabel "Habis", tombolnya nonaktif | | |
| 3 | Tambah Apel 2 kali | Nota: Apel 2 kg. Badge Nota menjadi 2 | | |
| 4 | Klik `-` dua kali pada Apel | 2 menjadi 1, lalu Apel hilang dari nota | | |
| 5 | Tambah Mangga (stok 4) 5 kali | Berhenti di 4 kg, ada pesan stok | | |
| 6 | Apel 3 kg, Anggur 1 kg | Subtotal Rp156.000, diskon 10%, total Rp140.400 | | |
| 7 | Apel 1 kg, Pisang 1 kg, Mangga 1 kg | Subtotal Rp75.000, diskon Rp3.750, pembulatan Rp50, total Rp71.200 | | |
| 8 | Kupon `hemat10` (huruf kecil) lalu kupon `ngawur` (Level 2) | Kupon pertama diterima, kedua menampilkan pesan merah | | |
| 9 | Bayar kurang, lalu bayar lebih | Pesan "uang kurang", lalu kembalian benar | | |
| 10 | Setelah bayar | Nota kosong, stok di kartu berkurang | | |
| 11 | Klik "Mode gelap" dua kali | Gelap, lalu kembali terang. Teks tombol ikut berubah | | |
| 12 | Lebar layar 375 px (DevTools, `Ctrl + Shift + M`) | Tanpa scroll mendatar. Nota di bawah katalog | | |

(Angka skenario 6 dan 7 berlaku jika data produk sama dengan tabel di langkah 1.6.)

### Bug dari uji silang yang harus kuperbaiki

| No skenario | Apa yang terjadi | Sudah diperbaiki? |
|---|---|---|
| | | |
| | | |

### Persiapan wawancara kode

Pilih tiga fungsi yang kamu tulis sendiri. Isi dengan kata-katamu:

| Fungsi (nama dan file) | Menerima | Melakukan | Mengembalikan | Dipakai di |
|---|---|---|---|---|
| 1. | | | | |
| 2. | | | | |
| 3. | | | | |

### Centang fitur yang sudah kamu selesaikan

**Wajib**
- [ ] Katalog dari `data.js` (minimal 6 produk)
- [ ] Tambah ke nota dengan `Map`, ubah jumlah, hapus
- [ ] Subtotal, diskon bertingkat, pembulatan, total
- [ ] Bayar dan kembalian (`Number()`)
- [ ] Kode terpecah ke module ES
- [ ] CSS responsif dan mode gelap
- [ ] Sapaan dan papan info

**Level 2**
- [ ] Kupon (`Map` berisi function, `buatKupon`)

**Bonus**
- [ ] Filter dan urutan katalog
- [ ] Riwayat pesanan
- [ ] Ganti warna apel

### Jelaskan 3 aturan CSS di bagian nota (yang disediakan guru)

| Aturan | Menurutku fungsinya |
|---|---|
| `filter: drop-shadow(...)` pada `.nota` | |
| `conic-gradient(...)` pada `.nota::after` | |
| `grid-template-areas` pada `.baris-nota` | |

### Refleksi (3 sampai 5 kalimat)

1. Bagian proyek yang paling kupahami, dan buktinya (tulis satu potongan kode):
______________________________________________________________
______________________________________________________________
2. Bagian yang masih membingungkan:
______________________________________________________________
3. Rencanaku mempelajarinya:
______________________________________________________________

### Exit ticket Pertemuan 5

Jika aku ingin menambah fitur "kupon sekali pakai", file mana yang kuubah dan kenapa?
______________________________________________________________
______________________________________________________________

### Checkpoint Pertemuan 5 (diisi guru)

- [ ] Fitur wajib lengkap
- [ ] Uji silang selesai dan bug ditangani
- [ ] Wawancara kode selesai

Paraf guru: ________
