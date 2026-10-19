# Bahan Guru: Mini-lesson, Kunci Jawaban, Bank Soal, Troubleshooting

Dokumen untuk guru. Siswa tidak perlu memegang file ini.

Isi:

- **A.** Mini-lesson M1 sampai M8 (naskah ringkas, contoh kode, kunci)
- **B.** Pemanasan dan exit ticket per pertemuan (soal dan kunci)
- **C.** Wawancara kode: cara pelaksanaan, bank pertanyaan konsep, tugas ubah-langsung
- **D.** Kunci jawaban pertanyaan di panduan siswa
- **E.** Troubleshooting
- **F.** Peta kode `contoh-jadi/`

---

## A. Mini-lesson (materi jembatan)

Setiap mini-lesson dibuat singkat. Pola: **tebak, lihat hasilnya, jelaskan sebabnya**.

### M1. Server lokal dan `<script type="module">` (Pertemuan 1, 5 menit)

**Tujuan:** siswa tahu kenapa halaman harus dibuka lewat `http://`, bukan `file://`.

**Peragaan:**
1. Klik dua kali `index.html` starter. Alamat berawalan `file:///`. Buka Console (`F12`): muncul pesan merah `Access to script at 'file:///...' from origin 'null' has been blocked by CORS policy`.
2. Buka lewat Live Server. Alamat `http://127.0.0.1:5500/...`. Pesan error hilang.

**Penjelasan:**
- Browser menganggap halaman dari `file://` berasal dari "origin null" dan memblokir pemuatan module demi keamanan. Server lokal membuat halaman berasal dari origin `http://localhost`.
- Di folder `ESModule/` module jalan lewat Node karena tidak ada sandbox browser, jadi tidak butuh server.

| | `<script src="x.js">` | `<script type="module" src="x.js">` |
|---|---|---|
| `import` dan `export` | tidak bisa | bisa |
| Variabel di file | menjadi global | hanya milik file itu |
| Waktu berjalan | langsung saat dibaca | setelah HTML selesai dibaca (otomatis `defer`) |
| Strict mode | tidak otomatis | otomatis |
| Dibuka dengan klik dua kali | bisa | tidak bisa |

**Kunci tebak ("dibuka klik dua kali, jalan?"):** tidak. Tampilan HTML dan CSS muncul, tetapi JavaScript tidak jalan.

### M2. Variabel CSS, box model, flex dan grid (Pertemuan 1, 5 menit)

**Contoh:**

```css
:root { --utama: #1b6b3c; }          /* sekali definisi */
.tombol { background: var(--utama); } /* dipakai di banyak tempat */
body.gelap { --utama: #5fd18a; }      /* menimpa nilai: semua yang memakainya ikut berubah */
```

**Box model:** `content`, `padding`, `border`, `margin`. Tanpa `box-sizing: border-box`, lebar elemen = `width + padding + border`.

**Tebak:** elemen `width: 200px; padding: 20px; border: 2px solid`. Lebar totalnya?
- Tanpa `border-box`: 200 + 40 + 4 = **244 px**.
- Dengan `border-box`: **200 px** (padding dan border masuk ke dalam).

**Flex dan grid:**

| | Flex | Grid |
|---|---|---|
| Arah | satu sumbu (baris atau kolom) | dua sumbu (baris dan kolom) |
| Cocok untuk | susunan di dalam satu komponen (header, baris nota) | kerangka halaman, daftar kartu |
| Contoh di proyek | `.header-isi`, `.stepper` | `.tata-letak`, `.katalog` |

### M3. `innerHTML` dan template literal (Pertemuan 2, 4 menit)

**Contoh:**

```js
const siswa = { nama: "Dimas", nilai: 80 };
console.log("Halo " + siswa.nama + ", nilai " + siswa.nilai);   // cara lama
console.log(`Halo ${siswa.nama}, nilai ${siswa.nilai}`);       // template literal
console.log(`Status: ${siswa.nilai >= 75 ? "lulus" : "remedial"}`); // ekspresi apa pun boleh
```

**Peragaan `innerHTML` dan `textContent`:**

```js
div.innerHTML = "<b>tebal</b>";     // tampil: tebal  (HTML diproses)
div.textContent = "<b>tebal</b>";   // tampil: <b>tebal</b>  (apa adanya sebagai teks)
```

**Catatan keamanan untuk guru:** `innerHTML` hanya aman untuk data yang kita kontrol (isi `data.js`). Teks yang diketik pengguna (misalnya kode kupon) selalu ditampilkan dengan `textContent`. Sampaikan satu kalimat saja: "teks dari pengguna jangan dimasukkan ke `innerHTML`, karena bisa berisi kode berbahaya."

### M4. Pola "render, lalu pasang event" (Pertemuan 2, 3 menit)

**Peragaan error `null`:**

```js
const tombol = document.querySelector("#btn-hapus");   // null, elemennya belum ada
tombol.addEventListener("click", () => {});           // TypeError: Cannot read properties of null
daftar.innerHTML = '<button id="btn-hapus">Hapus</button>';
```

**Penjelasan:** urutan yang benar: isi `innerHTML` dulu, baru `querySelector`, baru `addEventListener`. Karena setiap render membangun ulang elemen, event dari render sebelumnya hilang, jadi event dipasang ulang setiap kali render.

### M5. Map dengan key object (Pertemuan 3, 8 menit)

**Contoh (mirip `real-case-map.js`):**

```js
const sesi = new Map();
const userA = { id: 1, nama: "Rizky" };

sesi.set(userA, "Login");
console.log(sesi.has(userA));                        // true
console.log(sesi.has({ id: 1, nama: "Rizky" }));     // false: object baru, alamat memori berbeda
console.log(sesi.size);                              // 1

sesi.forEach((status, user) => console.log(user.nama, status));   // (value, key)
console.log(Array.from(sesi));                       // [[ {id:1,...}, "Login" ]]
```

**Poin penjelasan:**
1. Object dibandingkan berdasarkan **alamat**, bukan isi. Dua object dengan isi sama tetap dua object.
2. `Map.forEach` memberi `(value, key)`, kebalikan urutan "key dulu" yang biasa kita bayangkan, dan berbeda dari `Array.forEach (item, index)`.
3. `Array.from(map)` menghasilkan array berisi pasangan `[key, value]`. Dipakai di proyek untuk menyimpan isi nota ke pesanan.

**Kunci tebak:** `true`, `false`, `1`.

### M6. `input.value` selalu string (Pertemuan 4, 7 menit)

**Tebak dulu:**

```js
const input = "100000";       // seperti inputBayar.value
console.log(input + 1);           // ?
console.log(Number(input) + 1);   // ?
console.log(input - 1);           // ?
console.log(Number(""));          // ?
console.log(Number("12abc"));     // ?
```

**Kunci:** `"1000001"`, `100001`, `99999`, `0`, `NaN`.

**Penjelasan:**
- `+` bila salah satu operannya string: menggabungkan (`konversi-implisit.js`: `"40" + 40` menjadi `"4040"`).
- `-` selalu aritmetika, sehingga string diubah ke number secara implisit.
- `Number("")` bernilai 0: kolom bayar kosong dianggap Rp0, sehingga pemeriksaan "uang kurang" tetap benar.
- Ulas ternary bersusun dengan `challange.js`: `gaji >= 5000000 ? ... : gaji >= 3000000 ? ... : 0`.

### M7. Function yang mengembalikan function (Pertemuan 4, 5 menit; Level 2)

Hubungkan ke `multiplier` di `first-class-citizen.js`.

```js
const multiplier = (x) => (num) => x * num;     // bentuk arrow dari contoh di kelas
const double = multiplier(2);
double(10);                                      // 20

const buatPajak = (persen) => (harga) => (harga * persen) / 100;
const ppn11 = buatPajak(11);                     // ppn11 adalah function
ppn11(100000);                                   // 11000
```

**Poin:**
- `buatPajak(11)` menghasilkan function baru yang "mengingat" angka 11. Istilahnya closure.
- Sama dengan `double` yang mengingat angka 2.
- Dengan Map: `new Map([["PPN11", buatPajak(11)]])`, lalu `daftar.get("PPN11")(100000)`. Function bisa disimpan di Map seperti data lain.

**Kunci tebak ("di mana angka 11 disimpan?"):** di function yang dikembalikan, yang membawa variabel `persen` dari tempat ia dibuat.

### M8. `sort` dan `filter` menerima function (Pertemuan 5, 5 menit; Bonus)

```js
const angka = [10, 9, 100, 1];
angka.sort();                      // [1, 10, 100, 9]  default: diurutkan sebagai STRING
angka.sort((a, b) => a - b);       // [1, 9, 10, 100]  dengan function pembanding

const produkMurah = produk.filter((item) => item.price < 25000);   // array baru
```

**Poin:**
- `sort()` tanpa argumen mengurutkan sebagai teks (`array-method.js`). Untuk angka dan object butuh function pembanding.
- Function pembanding menerima `(a, b)`. Hasil negatif: `a` di depan. Positif: `b` di depan.
- `sort` mengubah array aslinya, karena itu salin dulu dengan `Array.from`.
- `filter` tidak mengubah array asli, mengembalikan array baru.
- Untuk teks: `(a, b) => (a.name > b.name ? 1 : -1)`.

**Kunci tebak:** `[1, 10, 100, 9]`, lalu `[1, 9, 10, 100]`.

---

## B. Pemanasan dan exit ticket

Waktu exit ticket 3 sampai 5 menit, dijawab di lembar kerja. Periksa sambil berkeliling atau kumpulkan.

### Pemanasan Pertemuan 2

| Soal | Kunci |
|---|---|
| `const { nama, kelas } = { nama: "Rizky", kelas: 11, hobi: "bola" }; console.log(nama, kelas);` | `Rizky 11` |
| `["a", "b"].forEach((x, i) => console.log(i, x));` | `0 a` lalu `1 b` |
| `` const n = 3; console.log(`Total: ${n * 2} item`); `` | `Total: 6 item` |

### Exit ticket Pertemuan 1

| Soal | Kunci |
|---|---|
| 1. Kenapa proyek ini harus dibuka lewat Live Server, bukan klik dua kali? | Karena memakai `<script type="module">`. Browser memblokir module dari `file://`. |
| 2. Tulis satu object produk dengan key name, price, category, stok. | Contoh: `{ name: "Apel", price: 32000, category: "Impor", stok: 12 }`. Harga number tanpa titik. |
| 3. Sebutkan dua keuntungan variabel CSS (`--aksi`) dibanding menulis warna langsung. | Ubah di satu tempat berlaku di semua. Mode gelap cukup menimpa nilai. Konsisten. |

### Exit ticket Pertemuan 2

| Soal | Kunci |
|---|---|
| 1. `buatKartu(item)` mengembalikan tipe data apa? | String (HTML dalam template literal). |
| 2. Kenapa tombol di kartu tidak bisa diberi `addEventListener` sebelum `innerHTML` diisi? | Elemennya belum ada. `querySelector` mengembalikan `null`, sehingga muncul `TypeError`. |
| 3. `formatRupiah()` tanpa argumen menghasilkan apa, dan fitur apa yang menyebabkannya? | `"Rp0"`. Parameter default (`angka = 0`). |

### Exit ticket Pertemuan 3

| Soal | Kunci |
|---|---|
| 1. Kenapa `peta.has(objekBaruIsiSama)` bernilai `false`? | Object dibandingkan berdasarkan alamat (referensi), bukan isi. |
| 2. Tulis urutan parameter callback `Map.forEach`. Apa bedanya dengan `Array.forEach`? | `(value, key)`. `Array.forEach` memakai `(item, index)`. |
| 3. Apa risikonya bila `tambahItem` tidak memeriksa stok? | Pembeli bisa membeli lebih banyak dari stok yang ada. |

### Pemanasan Pertemuan 4

| Soal | Kunci |
|---|---|
| `"100000" + 1` | `"1000001"` |
| `"100000" - 1` | `99999` |
| `Number("")` | `0` |

### Exit ticket Pertemuan 4

| Soal | Kunci |
|---|---|
| 1. `inputBayar.value` bernilai `"100000"`. Hasil `inputBayar.value + 1000` dan `Number(inputBayar.value) + 1000`? | `"1000001000"` dan `101000`. |
| 2. Tulis ternary: diskon 10% jika subtotal >= 150.000, 5% jika >= 75.000, selain itu 0. | `subtotal >= 150000 ? 10 : subtotal >= 75000 ? 5 : 0` |
| 3. Berapa `73150 % 100`, dan untuk apa dipakai di nota? | `50`. Pembulatan total ke bawah kelipatan Rp100. |

### Exit ticket Pertemuan 5 (refleksi)

| Soal | Catatan penilaian |
|---|---|
| 1. Bagian proyek yang paling kamu pahami. Tulis satu potongan kode sebagai buktinya. | Bukti berupa kode konkret. |
| 2. Bagian yang masih membingungkan dan rencanamu. | Rencana konkret ("baca ulang `map.js` lalu ulangi langkah 3.1"). |
| 3. Jika ingin menambah fitur "kupon sekali pakai", file mana yang diubah dan kenapa? | `helper.js` (aturan kupon) dan `main.js` (tampilan dan pemanggilan), karena logika dan tampilan dipisah. |

---

## C. Wawancara kode (Pertemuan 5)

### Cara pelaksanaan (sekitar 2 menit per siswa)

1. Siswa membuka karyanya. Guru menyebut **3 fungsi** yang harus dijelaskan (pilih dari yang tersulit yang ia tulis: misalnya `tambahItem`, `hitungRingkasan`, `buatKartu`).
2. Guru mengajukan **1 pertanyaan konsep** dari bank di bawah.
3. Guru memberi **1 tugas ubah-langsung** (maksimal 2 menit).
4. Guru mengisi tabel 5.3 di `03-rubrik-penilaian.md`.

Tips: jangan menilai kefasihan berbahasa. Nilai ketepatan. Beri jeda berpikir 10 detik sebelum memberi petunjuk. Siswa yang menjelaskan dengan membaca baris per baris (`"ini const, ini kurung..."`) belum paham alurnya, mintalah: "ceritakan seolah-olah ke teman yang belum belajar."

Pola penjelasan yang diharapkan: *"Fungsi ini menerima ..., melakukan ..., mengembalikan ... . Dipakai di ... ."*

### Bank pertanyaan konsep dan kunci

| No | Topik | Pertanyaan | Kunci ringkas |
|---|---|---|---|
| Q1 | Variabel | Apa beda `const` dan `let`? Kenapa `produk` pakai `const` tetapi isinya bisa berubah (`item.stok -= jumlah`)? | `const` tidak bisa di-assign ulang. Isi object atau array tetap bisa diubah, karena yang dikunci adalah variabelnya, bukan isinya. |
| Q2 | Operator | Untuk apa operator `%` dipakai di proyek? | Sisa bagi, untuk pembulatan ke bawah kelipatan Rp100. |
| Q3 | Ternary | Ubah satu `if/else` di kodemu menjadi ternary. Kapan sebaiknya tidak memakai ternary? | Ternary untuk memilih satu nilai. Jika bercabang banyak atau punya banyak langkah, `if/else` lebih terbaca. |
| Q4 | Konversi | Kenapa memakai `Number(inputBayar.value)`? | `.value` selalu string. Tanpa konversi, `+` akan menggabungkan teks. |
| Q5 | Function | Beda function declaration dan function expression? | Declaration kena hoisting (bisa dipanggil sebelum barisnya). Expression disimpan di variabel dan tidak bisa dipanggil sebelum dibuat. |
| Q6 | Function | Kenapa `formatRupiah(angka = 0)` bisa dipanggil tanpa argumen? | Parameter default. |
| Q7 | Return | Kenapa helper memakai `return`, bukan `console.log`? | `return` memberi nilai yang bisa dipakai lagi (dihitung, ditampilkan, diuji). `console.log` hanya menampilkan. |
| Q8 | First-class | Sebutkan tiga tempat function dikirim sebagai argumen di proyekmu. | `forEach`, `addEventListener`, `setTimeout`, `sort`, `filter`. |
| Q9 | Closure | Jelaskan alur `daftarKupon.get("HEMAT10")(200000)`. | `get` mengambil function dari Map. Function itu (hasil `buatKupon(10)`) mengingat angka 10, lalu dipanggil dengan 200000 menghasilkan 20000. |
| Q10 | Array | Kenapa `produk` berupa array berisi object, bukan beberapa array terpisah? | Satu produk memiliki banyak atribut yang berkaitan, dan object menjaganya tetap satu paket. Array untuk daftar yang berurutan. |
| Q11 | Destructuring | Tulis ulang `const n = item.name; const h = item.price;` dengan destructuring. | `const { name: n, price: h } = item;` atau `const { name, price } = item;` |
| Q12 | Array | Kenapa `Array.from(produk)` sebelum `sort`? | `sort` mengubah array aslinya. Salinan menjaga urutan data asli. |
| Q13 | Map | Kenapa nota memakai `Map`, bukan object biasa? | Key `Map` boleh berupa object (produk). Key object biasa selalu diubah menjadi string. |
| Q14 | Map | Kenapa `keranjang.has(salinanProduk)` bisa `false`? | Object berbeda alamat walaupun isinya sama. |
| Q15 | DOM | Beda `textContent` dan `innerHTML`? | `textContent` menampilkan teks apa adanya. `innerHTML` memproses HTML, hanya untuk data tepercaya. |
| Q16 | Event | Kenapa event dipasang setelah render? | Elemennya baru ada setelah `innerHTML` diisi, dan elemen lama (beserta event-nya) hilang setiap render ulang. |
| Q17 | Event | Beda `addEventListener("input", renderKembalian)` dan `...renderKembalian()`? | Tanpa kurung: function dititipkan untuk dipanggil nanti. Dengan kurung: dipanggil sekarang dan hasilnya (undefined) yang dititipkan. |
| Q18 | Modul | Beda named export dan default export? Contoh di proyekmu? | Named: banyak per file, di-import dengan `{ }` dan nama sama. Default: satu per file, bebas diberi nama. Contoh default: `keranjang`. |
| Q19 | Modul | Kenapa `keranjang.js` tidak boleh menyentuh DOM? | Agar logikanya bisa diuji lewat Node dan dipakai ulang. Tampilan hanya urusan `main.js`. |
| Q20 | CSS | Kenapa mode gelap cukup menimpa variabel? | Semua warna memakai `var(--...)`, sehingga nilai baru otomatis berlaku di semua aturan. |
| Q21 | CSS | Kapan memakai flex dan kapan grid? | Flex untuk satu arah (baris atau kolom), grid untuk dua arah. |
| Q22 | CSS | Untuk apa `position: relative` pada `.kartu-foto`? | Menjadi patokan posisi `absolute` anaknya (label harga, tombol ganti warna). |

### Bank tugas ubah-langsung (maksimal 2 menit)

| No | Tugas | Lokasi perubahan | Catatan |
|---|---|---|---|
| U1 | Ganti batas diskon 5% menjadi Rp100.000 | `helper.js`, konstanta `BATAS_DISKON_SEDANG` | Papan info ikut berubah. Beberapa tes `hitungPersenDiskon` menjadi ❌, itu wajar karena aturan berubah. Minta siswa menjelaskan kenapa. |
| U2 | Tambah kupon `BUAH20` (20%) | `helper.js`, `daftarKupon`: `["BUAH20", buatKupon(20)]` | Satu baris. Tidak perlu mengubah `main.js`. |
| U3 | Batasi pembelian maksimal 5 kg per jenis | `keranjang.js`, `tambahItem`: tambah `\|\| jumlahSekarang >= 5` pada kondisi | Menunjukkan pemisahan logika. |
| U4 | Ubah warna utama tombol menjadi biru | `style.css`, variabel `--aksi` di `:root` (dan `body.gelap` bila perlu) | Cukup satu tempat. |
| U5 | Tambah produk "Semangka" | `data.js`, tambah object baru dengan id baru | Tampil otomatis. Boleh memakai gambar yang ada. |
| U6 | Ganti teks sapaan malam | `helper.js`, `sapaByWaktu` | |
| U7 | Tambah tingkat diskon 15% untuk subtotal >= Rp300.000 | `helper.js`, `hitungPersenDiskon` (tambah satu ternary dan konstanta) | |
| U8 | Ubah pembulatan menjadi kelipatan Rp500 | `helper.js`, `hitungRingkasan`: `% 500` | |
| U9 | Ubah batas riwayat menjadi 3 pesanan | `helper.js`, `MAKS_RIWAYAT` | Hanya jika siswa mengerjakan bonus riwayat. |
| U10 | Ubah warna label harga | `style.css`, variabel `--pisang` | |

---

## D. Kunci jawaban pertanyaan di panduan siswa

Hanya yang jawabannya tidak langsung terlihat dari panduan.

| Langkah | Pertanyaan | Kunci |
|---|---|---|
| 1.1 | Kenapa module harus lewat server? | Lihat M1. |
| 1.2 | Jika id `#tombol-bayar` diganti? | `querySelector` mengembalikan `null`. Saat `addEventListener` dipanggil muncul `TypeError`, sehingga seluruh `main.js` berhenti di baris itu. |
| 1.3 | Beda `justify-content` dan `align-items`? | `justify-content` mengatur sumbu utama (mendatar pada baris), `align-items` mengatur sumbu silang (menurun pada baris). Tanpa `sticky`, header ikut tergulung hilang. |
| 1.4 | Kenapa `minmax(0, 1fr)`? | `1fr` punya batas minimum otomatis sebesar isi terpanjang, sehingga isi lebar bisa mendorong kolom keluar layar. `minmax(0, 1fr)` membolehkan kolom menyusut. |
| 1.5 | `repeat(auto-fill, minmax(150px, 1fr))` dengan `gap: 12px` di layar 600 px dan 300 px? | 600 px: 3 kolom (4 kolom butuh 4 x 150 + 3 x 12 = 636 px). 300 px: 1 kolom (2 kolom butuh 312 px). Jumlah kolom menyesuaikan lebar layar otomatis. |
| 1.5 | Kenapa `.kartu-foto` `position: relative`? Dari mana warna latar? | Sebagai patokan elemen `absolute` di dalamnya (label harga). Warna dari variabel `--warna` pada atribut `style` kartu. |
| 1.6 | `"18.000" * 2`? | `36`. JavaScript membaca `"18.000"` sebagai 18 (titik = desimal). Harga salah 1000 kali lipat tanpa ada error. Karena itu harga ditulis `18000`. |
| 1.6 | Kenapa `id` unik? | Dipakai untuk id elemen (`tambah-3`), sehingga `querySelector` menemukan tombol yang tepat. |
| 2.1 | `(32000).toLocaleString("id-ID")` dan `typeof`? | `"32.000"`, `"string"`. |
| 2.1 | Function expression vs declaration saat dipanggil sebelum barisnya? | Declaration bisa (hoisting). Expression: error karena variabel belum diisi. |
| 2.3 | Jika `let html;` tanpa nilai awal? | Hasilnya diawali teks `undefined`, karena `undefined + "<article..."` menjadi string. |
| 3.1 | `peta.has(a), peta.has(b), peta.size` | `true`, `false`, `1`. |
| 3.2 | Kenapa `(jumlah, item)`? | `Map.forEach` memberi `(value, key)`. Value-nya jumlah, key-nya object produk. |
| 4.1 | `3 * 5 / 100` dan `3 * (5 / 100)`? Kenapa kali dulu lebih aman? | `0.15` dan `0.15000000000000002`. Komputer menyimpan pecahan seperti `0.05` secara tidak tepat (biner). Dengan mengalikan dulu, hasil antara berupa bilangan bulat sehingga pembulatan galat berkurang. Pada harga kelipatan seribu di proyek ini kedua cara kebetulan sama, tetapi kebiasaan ini lebih aman untuk uang. |
| 4.2 | `73150 % 100`; `((a, f = () => 0) => f(a))(5)` | `50`; `0`. |
| 4.3 | Kenapa `.value` string walaupun `type="number"`? | `.value` pada elemen input selalu mengembalikan string. |
| 4.3 | `"input", renderKembalian` vs `renderKembalian()` | Lihat Q17. |
| 4.4 | Kenapa stok dikurangi setelah bayar? | Nota hanyalah rencana belanja. Stok baru berubah saat transaksi selesai. Jika dikurangi di nota, pembeli lain tidak bisa membeli meski belum dibayar, dan stok salah bila nota dihapus. |
| 4.5 | Kenapa `daftarKupon.get(...)(200000)` bisa dipanggil? | Value Map-nya adalah function. |
| 5.1 | Kenapa mode gelap cukup menimpa variabel? | Lihat Q20. |
| 5.2 B1 | `angka.sort()` dan `angka.sort((a, b) => a - b)` | `[1, 10, 100, 9]` dan `[1, 9, 10, 100]`. |

---

## E. Troubleshooting

| Gejala | Penyebab umum | Perbaikan |
|---|---|---|
| Halaman polos, Console: `blocked by CORS policy` | Dibuka dengan klik dua kali | Buka lewat Live Server atau `python3 -m http.server 5500` |
| `Uncaught SyntaxError: ... does not provide an export named 'x'` | Salah ketik nama, lupa `export`, atau default dan named tertukar (`import x` vs `import { x }`) | Samakan nama di `export` dan `import`. Default tanpa kurung kurawal |
| `Cannot read properties of null (reading 'addEventListener')` | Id salah, atau elemen belum dirender | Periksa ejaan id. Pastikan `innerHTML` diisi sebelum `querySelector` |
| Tombol tidak bereaksi | Event dipasang sebelum render atau id tidak cocok (`tambah-1` vs `tambah1`) | `console.log` di handler untuk memastikan terpanggil. Cocokkan id di template dan di `querySelector` |
| Teks `undefined` di halaman | Function lupa `return` atau `let html;` tanpa `""` | Periksa baris `return` dan nilai awal |
| `NaN` | Operasi dengan string atau `undefined` | `console.log(typeof nilai)`. Pakai `Number()` |
| Total tidak sama dengan contoh | Data `data.js` berbeda dari data yang direkomendasikan | Cocokkan data, atau hitung ulang dengan data siswa |
| `node uji-logika.mjs`: `Cannot use import statement outside a module` | `package.json` hilang atau terminal tidak berada di folder proyek | `cd` ke folder proyek. Pastikan `"type": "module"` ada di `package.json` |
| `ERR_MODULE_NOT_FOUND` | Path import salah atau file belum dibuat | Periksa nama file dan `./` di depan path |
| Perubahan CSS tidak terlihat | Cache | `Ctrl + Shift + R` |
| CSS tidak berlaku pada elemen tertentu | Salah nama class, atau aturan lain lebih spesifik | DevTools, panel Styles: lihat aturan yang dicoret |
| Gambar tidak muncul | Path salah. Path relatif terhadap `index.html` | `assets/img/nama.svg` |
| Tombol Bayar tampak tak terjangkau di layar pendek | Nota lebih tinggi dari layar | Wajar. Gulir halaman. (Nota hanya menempel di layar tinggi) |
| Live Server tidak memuat ulang | Ekstensi tidak aktif | Klik "Go Live" di bilah bawah VS Code, atau muat ulang manual |

---

## F. Peta kode `contoh-jadi/`

Untuk guru yang ingin menunjukkan bagian tertentu saat mengajar.

| File | Isi | Materi |
|---|---|---|
| `js/data.js` | `produk`: 6 object | Array of object, named export |
| `js/helper.js` | `sapaByWaktu` (declaration), `formatRupiah` (expression + default), `hitungPersenDiskon` dan `hitungDiskon` (arrow + ternary), `buatKupon` (closure), `daftarKupon` (Map berisi function), `hitungRingkasan` (default function, return object, `%`) | Function, first-class, Map |
| `js/keranjang.js` | `keranjang` (Map, default export), `tambahItem`, `kurangiItem`, `hapusItem`, `kosongkanKeranjang`, `hitungSubtotal`, `hitungJumlahItem` | Map dengan key object, `Map.forEach (value, key)` |
| `js/riwayat.js` | `riwayat` (array, default export), `catatPesanan` (push dan shift), `batalkanPesananTerakhir` (pop), `ambilRiwayatTerbaruDulu` (Array.from dan reverse) | Method array |
| `js/main.js` | Bagian 1 import (named, default, `import * as`). Bagian 2 `querySelector`. Bagian 4 `tampilkanToast` (`setTimeout` dengan callback). Bagian 6 `buatKartu`, `renderKatalog`. Bagian 7 `renderNota`, `renderKembalian`. Bagian 8 `renderRiwayat`. Bagian 9 event. | DOM, event, destructuring, template literal |
| `css/style.css` | Bagian 1 token (variabel, mode gelap). Bagian 5 grid katalog, kartu, label harga (`clip-path`). Bagian 6 nota (`conic-gradient`, `drop-shadow`, `grid-template-areas`). Bagian 8 media query | CSS native |
| `uji-logika.mjs` | 35 tes: 25 WAJIB, 5 LEVEL 2, 5 BONUS | First-class function di dalam alat uji |

**Hal yang sengaja tidak dipakai:** `for` loop, `map` dan `reduce` dalam kode siswa, `localStorage`, `fetch`, framework apa pun. Looping memakai `forEach` (sudah terlihat di `ESModule/index.mjs`). `filter` dan `sort` hanya muncul di fitur Bonus dan dibahas di M8.
