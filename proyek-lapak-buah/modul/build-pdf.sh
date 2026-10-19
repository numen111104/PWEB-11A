#!/usr/bin/env bash
# build-pdf.sh: membuat PDF modul dari berkas markdown di folder ini.
#
# Kebutuhan : pandoc dan Google Chrome (macOS). Jalankan dari mana saja:
#     bash proyek-lapak-buah/modul/build-pdf.sh
# Hasil     : modul/pdf/Modul-Lapak-Buah-11A-Lengkap-Guru.pdf
#             modul/pdf/Paket-Siswa-Lapak-Buah-11A.pdf
# Ubah isi modul di berkas .md, lalu jalankan skrip ini lagi.

set -euo pipefail

cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
KERJA="$(mktemp -d)"
trap 'rm -rf "$KERJA"' EXIT

command -v pandoc >/dev/null || { echo "pandoc tidak ditemukan"; exit 1; }
[ -x "$CHROME" ] || { echo "Chrome tidak ditemukan di: $CHROME (atur variabel CHROME)"; exit 1; }

mkdir -p pdf

# Tabel lebar di rubrik (bagian 5) dicetak di halaman lanskap.
awk '
  /^## 5\. Lembar penilaian kelas/ { print "<div class=\"lanskap\">\n" }
  /^## 6\. Tindak lanjut hasil/    { print "</div>\n" }
  { print }
' 03-rubrik-penilaian.md > "$KERJA/03.md"

buat_pdf() {
  local nama="$1" sampul="$2" variasi="$3" toc="$4"
  shift 4
  local html="$KERJA/$nama.html"
  local opsi_toc=()
  if [ "$toc" = "ya" ]; then
    opsi_toc=(--toc --toc-depth=2 -V toc-title="Daftar isi")
  fi

  pandoc "$@" \
    --from gfm --to html5 --standalone --embed-resources \
    --wrap=none --columns=10000 \
    --metadata pagetitle="$nama" -V lang=id -M document-css=false \
    --syntax-highlighting=pygments \
    --css cetak/cetak.css --css "cetak/$variasi" \
    --include-before-body "cetak/$sampul" \
    ${opsi_toc[@]+"${opsi_toc[@]}"} \
    -o "$html"

  # Ganti kotak centang bawaan dengan kotak gambar sendiri (lihat cetak.css).
  perl -pi -e 's#<input type="checkbox"\s*/?>#<span class="kotak"></span>#g' "$html"

  "$CHROME" --headless=new --disable-gpu --no-sandbox \
    --user-data-dir="$KERJA/chrome-$nama" \
    --no-pdf-header-footer --generate-pdf-document-outline \
    --print-to-pdf="pdf/$nama.pdf" "file://$html" >/dev/null 2>&1

  echo "dibuat: modul/pdf/$nama.pdf"
}

buat_pdf "Modul-Lapak-Buah-11A-Lengkap-Guru" sampul-guru.html variasi-guru.css ya \
  01-modul-ajar.md 02-panduan-siswa.md "$KERJA/03.md" 04-lembar-kerja-siswa.md 05-bahan-guru.md

buat_pdf "Paket-Siswa-Lapak-Buah-11A" sampul-siswa.html variasi-siswa.css tidak \
  02-panduan-siswa.md 04-lembar-kerja-siswa.md
