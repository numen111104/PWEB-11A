// main.js — urusan TAMPILAN (DOM) dan EVENT saja.
// Hitung-hitungan ada di helper.js dan keranjang.js, data ada di data.js.
//
// Alur kerja halaman ini selalu sama:
//   1. data berubah (tambah ke nota, ganti kategori, dst.)
//   2. panggil fungsi render...()  -> HTML dibangun ulang dari data
//   3. pasang addEventListener pada tombol yang baru dibuat

// ============================================================
// 1. IMPORT (ES Module)
// ============================================================
// MATERI: named import, default import, dan "import * as" (lihat modularisasi/main.mjs)
import { produk } from "./data.js";
import {
  formatRupiah,
  formatPotongan,
  sapaByWaktu,
  hitungPersenDiskon,
  hitungRingkasan,
  jamSekarang,
  daftarKupon,
  BATAS_DISKON_SEDANG,
  BATAS_DISKON_TINGGI,
} from "./helper.js";
import keranjang, {
  tambahItem,
  kurangiItem,
  hapusItem,
  kosongkanKeranjang,
  hitungSubtotal,
  hitungJumlahItem,
} from "./keranjang.js";
import * as riwayat from "./riwayat.js";

// ============================================================
// 2. MEMEGANG ELEMEN (DOM)
// ============================================================
// MATERI: querySelector / getElementById (dom/index.html)
const sapaan = document.querySelector("#sapaan");
const papanInfo = document.querySelector("#papan-info");
const tombolTema = document.querySelector("#tombol-tema");
const badgeNota = document.querySelector("#badge-nota");

const pilihKategori = document.querySelector("#pilih-kategori");
const pilihUrutan = document.querySelector("#pilih-urutan");
const jumlahHasil = document.querySelector("#jumlah-hasil");
const katalog = document.querySelector("#katalog");

const notaKosong = document.querySelector("#nota-kosong");
const daftarNota = document.querySelector("#daftar-nota");
const teksSubtotal = document.querySelector("#subtotal");
const labelDiskon = document.querySelector("#label-diskon");
const teksDiskon = document.querySelector("#diskon");
const teksPotonganKupon = document.querySelector("#potongan-kupon");
const teksPembulatan = document.querySelector("#pembulatan");
const teksTotal = document.querySelector("#total");

const inputKupon = document.querySelector("#input-kupon");
const tombolKupon = document.querySelector("#tombol-kupon");
const pesanKupon = document.querySelector("#pesan-kupon");
const inputBayar = document.querySelector("#input-bayar");
const teksKembalian = document.querySelector("#kembalian");
const tombolBayar = document.querySelector("#tombol-bayar");

const riwayatKosong = document.querySelector("#riwayat-kosong");
const daftarRiwayat = document.querySelector("#daftar-riwayat");
const tombolBatal = document.querySelector("#tombol-batal");

const toast = document.querySelector("#toast");

// ============================================================
// 3. STATE (data yang berubah selama halaman terbuka)
// ============================================================
let kategoriAktif = "Semua";
let urutanAktif = "asli";
let kodeKupon = ""; // "" artinya belum ada kupon yang dipakai
let nomorPesanan = 1;
let timerToast;

// ============================================================
// 4. FUNGSI KECIL PEMBANTU
// ============================================================

// MATERI: first-class function — setTimeout menerima FUNCTION sebagai parameter.
function tampilkanToast(pesan) {
  toast.textContent = pesan;
  toast.className = "toast tampil";
  clearTimeout(timerToast);
  timerToast = setTimeout(() => {
    toast.className = "toast";
  }, 2400);
}

function loncatkanBadge() {
  badgeNota.className = "badge loncat";
  setTimeout(() => {
    badgeNota.className = "badge";
  }, 350);
}

// Ringkasan dihitung ulang setiap dibutuhkan, tidak disimpan di variabel,
// supaya tidak pernah "basi" (berbeda dengan isi nota yang sebenarnya).
// daftarKupon.get("") -> undefined -> parameter default di hitungRingkasan yang dipakai.
const ambilRingkasan = () => hitungRingkasan(hitungSubtotal(), daftarKupon.get(kodeKupon));

// ============================================================
// 5. RENDER: papan info di bagian atas
// ============================================================
function renderPapanInfo() {
  const daftarKode = Array.from(daftarKupon.keys()).join(", ");

  papanInfo.innerHTML = `
    <li class="stiker">
      <strong>Diskon ${hitungPersenDiskon(BATAS_DISKON_SEDANG)}%</strong>
      <span>belanja mulai ${formatRupiah(BATAS_DISKON_SEDANG)}</span>
    </li>
    <li class="stiker">
      <strong>Diskon ${hitungPersenDiskon(BATAS_DISKON_TINGGI)}%</strong>
      <span>belanja mulai ${formatRupiah(BATAS_DISKON_TINGGI)}</span>
    </li>
    <li class="stiker">
      <strong>Kode kupon</strong>
      <span>${daftarKode}</span>
    </li>`;
}

// ============================================================
// 6. RENDER: katalog buah
// ============================================================

// MATERI: object destructuring, template literal, ternary, operator perbandingan.
const buatKartu = (item) => {
  const { id, name, price, category, stok, gambar, gambarAlt, warna } = item;
  const isAvailable = stok > 0;
  const labelStok = !isAvailable ? "Habis" : stok <= 5 ? `Tinggal ${stok} kg` : `Stok ${stok} kg`;
  const tombolGanti = gambarAlt
    ? `<button id="ganti-${id}" class="ganti-warna" type="button">Ganti warna</button>`
    : "";

  return `
    <article class="${isAvailable ? "kartu" : "kartu habis"}" style="--warna: ${warna}">
      <div class="kartu-foto">
        <img id="gambar-${id}" src="${gambar}" alt="${name}" width="200" height="200">
        ${tombolGanti}
        <span class="harga-tag">${formatRupiah(price)}<small>/kg</small></span>
      </div>
      <div class="kartu-isi">
        <h3>${name}</h3>
        <p class="kartu-info">
          <span>${category}</span>
          <span class="${stok <= 5 ? "stok-tipis" : ""}">${labelStok}</span>
        </p>
        <button id="tambah-${id}" class="tombol tombol-hijau tombol-lebar" type="button" ${isAvailable ? "" : "disabled"}>
          ${isAvailable ? "Tambah ke nota" : "Stok habis"}
        </button>
      </div>
    </article>`;
};

function renderKatalog() {
  // 1. Salin array. JANGAN sort/filter array aslinya (Array.from, struktur-data/array.js).
  let daftar = Array.from(produk);

  // 2. Saring berdasarkan kategori.
  //    filter() menerima FUNCTION yang mengembalikan true/false untuk tiap elemen.
  if (kategoriAktif !== "Semua") {
    daftar = daftar.filter((item) => item.category === kategoriAktif);
  }

  // 3. Urutkan. sort() menerima FUNCTION pembanding (a, b):
  //    hasil negatif -> a di depan, positif -> b di depan.
  if (urutanAktif === "murah") {
    daftar.sort((a, b) => a.price - b.price);
  } else if (urutanAktif === "mahal") {
    daftar.sort((a, b) => b.price - a.price);
  } else if (urutanAktif === "nama") {
    daftar.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  // 4. Bangun HTML dengan forEach lalu tulis ke halaman.
  let html = "";
  daftar.forEach((item) => {
    html += buatKartu(item);
  });
  katalog.innerHTML = html;
  jumlahHasil.textContent = `${daftar.length} jenis buah ditampilkan`;

  // 5. Tombol-tombol baru sudah ada di halaman, sekarang baru bisa dipasangi event.
  daftar.forEach((item) => {
    document.querySelector(`#tambah-${item.id}`).addEventListener("click", () => {
      tambahKeNota(item);
    });

    if (item.gambarAlt) {
      document.querySelector(`#ganti-${item.id}`).addEventListener("click", () => {
        // Tukar dua nilai sekaligus dengan array destructuring.
        [item.gambar, item.gambarAlt] = [item.gambarAlt, item.gambar];
        document.querySelector(`#gambar-${item.id}`).src = item.gambar;
        renderNota(); // gambar kecil di nota ikut berubah
      });
    }
  });
}

// ============================================================
// 7. RENDER: nota belanja (keranjang)
// ============================================================
function tambahKeNota(item) {
  const berhasil = tambahItem(item);

  if (berhasil) {
    tampilkanToast(`${item.name} ditambahkan ke nota.`);
    loncatkanBadge();
  } else {
    tampilkanToast(`Stok ${item.name} tinggal ${item.stok} kg, tidak bisa ditambah lagi.`);
  }

  renderNota();
}

function renderNota() {
  badgeNota.textContent = hitungJumlahItem();
  notaKosong.className = keranjang.size === 0 ? "nota-kosong" : "nota-kosong sembunyi";

  // --- daftar item. Perhatikan urutan parameter Map.forEach: (value, key) ---
  let html = "";
  keranjang.forEach((jumlah, item) => {
    html += `
      <li class="baris-nota">
        <img src="${item.gambar}" alt="" width="44" height="44">
        <div class="baris-info">
          <strong>${item.name}</strong>
          <span>${formatRupiah(item.price)} x ${jumlah} kg</span>
        </div>
        <div class="stepper" role="group" aria-label="Jumlah ${item.name}">
          <button id="kurang-${item.id}" type="button" aria-label="Kurangi ${item.name}">-</button>
          <output>${jumlah}</output>
          <button id="tambah-nota-${item.id}" type="button" aria-label="Tambah ${item.name}" ${jumlah >= item.stok ? "disabled" : ""}>+</button>
        </div>
        <span class="baris-harga">${formatRupiah(item.price * jumlah)}</span>
        <button id="hapus-${item.id}" class="hapus" type="button" aria-label="Hapus ${item.name} dari nota">Hapus</button>
      </li>`;
  });
  daftarNota.innerHTML = html;

  keranjang.forEach((jumlah, item) => {
    document.querySelector(`#kurang-${item.id}`).addEventListener("click", () => {
      kurangiItem(item);
      renderNota();
    });
    document.querySelector(`#tambah-nota-${item.id}`).addEventListener("click", () => {
      tambahKeNota(item);
    });
    document.querySelector(`#hapus-${item.id}`).addEventListener("click", () => {
      hapusItem(item);
      renderNota();
    });
  });

  // --- ringkasan harga ---
  // MATERI: object destructuring dari object hasil return function.
  const { subtotal, persenDiskon, diskon, potonganKupon, pembulatan, total } = ambilRingkasan();

  teksSubtotal.textContent = formatRupiah(subtotal);
  labelDiskon.textContent = persenDiskon > 0 ? `Diskon ${persenDiskon}%` : "Diskon";
  teksDiskon.textContent = formatPotongan(diskon);
  teksPotonganKupon.textContent = formatPotongan(potonganKupon);
  teksPembulatan.textContent = formatPotongan(pembulatan);
  teksTotal.textContent = formatRupiah(total);

  renderKembalian();
}

function renderKembalian() {
  const { total } = ambilRingkasan();

  if (keranjang.size === 0 || inputBayar.value === "") {
    teksKembalian.textContent = "";
    teksKembalian.className = "pesan";
    return;
  }

  // MATERI: konversi eksplisit. Nilai input SELALU string, bahkan untuk type="number".
  // Tanpa Number(), "100000" + 1 menghasilkan "1000001" (konversi implisit, konversi-implisit.js).
  const bayar = Number(inputBayar.value);

  if (bayar >= total) {
    teksKembalian.textContent = `Kembalian ${formatRupiah(bayar - total)}`;
    teksKembalian.className = "pesan ok";
  } else {
    teksKembalian.textContent = `Uang kurang ${formatRupiah(total - bayar)}`;
    teksKembalian.className = "pesan salah";
  }
}

// ============================================================
// 8. RENDER: riwayat pesanan [BONUS]
// ============================================================
function renderRiwayat() {
  const daftar = riwayat.ambilRiwayatTerbaruDulu();

  riwayatKosong.className = daftar.length === 0 ? "redam" : "redam sembunyi";
  tombolBatal.disabled = daftar.length === 0;

  let html = "";
  daftar.forEach((pesanan) => {
    const { nomor, jam, items, ringkasan } = pesanan;

    let totalKg = 0;
    items.forEach(([item, jumlah]) => {
      totalKg += jumlah;
    });

    html += `
      <li class="riwayat-baris">
        <span class="riwayat-nomor">#${nomor}</span>
        <span class="riwayat-info">${items.length} jenis, ${totalKg} kg, pukul ${jam}</span>
        <strong>${formatRupiah(ringkasan.total)}</strong>
      </li>`;
  });
  daftarRiwayat.innerHTML = html;
}

// ============================================================
// 9. EVENT: kontrol di luar kartu dan nota
// ============================================================
pilihKategori.addEventListener("change", () => {
  kategoriAktif = pilihKategori.value;
  renderKatalog();
});

pilihUrutan.addEventListener("change", () => {
  urutanAktif = pilihUrutan.value;
  renderKatalog();
});

// MATERI: dom/event.html — mengganti className dan textContent saat klik.
tombolTema.addEventListener("click", () => {
  const sedangGelap = document.body.className === "gelap";
  document.body.className = sedangGelap ? "" : "gelap";
  tombolTema.textContent = sedangGelap ? "Mode gelap" : "Mode terang";
});

tombolKupon.addEventListener("click", () => {
  const kode = inputKupon.value.trim().toUpperCase();

  // MATERI: Map.has()
  if (daftarKupon.has(kode)) {
    kodeKupon = kode;
    pesanKupon.textContent = `Kupon ${kode} dipakai.`;
    pesanKupon.className = "pesan ok";
  } else {
    kodeKupon = "";
    pesanKupon.textContent = "Kode kupon tidak dikenal. Periksa lagi kodenya.";
    pesanKupon.className = "pesan salah";
  }

  renderNota();
});

// renderKembalian dikirim TANPA tanda kurung: kita menitipkan function-nya,
// bukan memanggilnya sekarang (first-class function).
inputBayar.addEventListener("input", renderKembalian);

tombolBayar.addEventListener("click", () => {
  if (keranjang.size === 0) {
    tampilkanToast("Nota masih kosong. Tambahkan buah dulu.");
    return;
  }

  const ringkasan = ambilRingkasan();
  const bayar = Number(inputBayar.value);

  if (bayar < ringkasan.total) {
    tampilkanToast(`Uang kurang ${formatRupiah(ringkasan.total - bayar)}.`);
    return;
  }

  // MATERI: object literal. items berisi pasangan [produk, jumlah] hasil Array.from(Map).
  const pesanan = {
    nomor: nomorPesanan,
    jam: jamSekarang(),
    items: Array.from(keranjang),
    ringkasan,
    bayar,
  };

  // Stok berkurang sebanyak yang dibeli (mengubah value property object).
  keranjang.forEach((jumlah, item) => {
    item.stok -= jumlah;
  });

  riwayat.catatPesanan(pesanan);
  nomorPesanan++;

  // Reset nota dan semua isian.
  kosongkanKeranjang();
  kodeKupon = "";
  inputKupon.value = "";
  pesanKupon.textContent = "";
  inputBayar.value = "";

  renderKatalog();
  renderNota();
  renderRiwayat();
  tampilkanToast(`Pesanan #${pesanan.nomor} dibayar. Kembalian ${formatRupiah(bayar - ringkasan.total)}.`);
});

tombolBatal.addEventListener("click", () => {
  const pesanan = riwayat.batalkanPesananTerakhir();

  if (pesanan === undefined) {
    tampilkanToast("Belum ada pesanan yang bisa dibatalkan.");
    return;
  }

  // MATERI: array destructuring di parameter — tiap elemen items adalah [produk, jumlah].
  pesanan.items.forEach(([item, jumlah]) => {
    item.stok += jumlah;
  });

  renderKatalog();
  renderRiwayat();
  tampilkanToast(`Pesanan #${pesanan.nomor} dibatalkan. Stok dikembalikan.`);
});

// ============================================================
// 10. MULAI
// ============================================================
function mulai() {
  sapaan.textContent = sapaByWaktu(new Date().getHours()) + "!";
  renderPapanInfo();
  renderKatalog();
  renderNota();
  renderRiwayat();
}

mulai();
