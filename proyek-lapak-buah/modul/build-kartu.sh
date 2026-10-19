#!/usr/bin/env bash
# build-kartu.sh: membuat kartu mengajar ringkas (1 halaman per pertemuan) dari kartu/p1.md sampai p5.md.
#
# Kebutuhan : pandoc dan Google Chrome (macOS).
#     bash proyek-lapak-buah/modul/build-kartu.sh
# Hasil     : modul/pdf/kartu/Kartu-P1-....pdf sampai P5, dan Kartu-Mengajar-5-Pertemuan.pdf

set -euo pipefail

cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
KERJA="$(mktemp -d)"
trap 'rm -rf "$KERJA"' EXIT

command -v pandoc >/dev/null || { echo "pandoc tidak ditemukan"; exit 1; }
[ -x "$CHROME" ] || { echo "Chrome tidak ditemukan di: $CHROME (atur variabel CHROME)"; exit 1; }

mkdir -p pdf/kartu

# buat_kartu <nama-file> <teks-footer> <berkas.md...>
buat_kartu() {
  local nama="$1" footer="$2"
  shift 2
  local html="$KERJA/$nama.html"

  printf '@page { @bottom-left { content: "%s"; } }\n' "$footer" > "$KERJA/$nama.css"

  pandoc "$@" \
    --from gfm --to html5 --standalone --embed-resources \
    --wrap=none --columns=10000 \
    --metadata pagetitle="$nama" -V lang=id -M document-css=false \
    --syntax-highlighting=pygments \
    --css cetak/cetak.css --css kartu/kartu.css --css "$KERJA/$nama.css" \
    -o "$html"

  perl -pi -e 's#<input type="checkbox"\s*/?>#<span class="kotak"></span>#g' "$html"

  "$CHROME" --headless=new --disable-gpu --no-sandbox \
    --user-data-dir="$KERJA/chrome-$nama" \
    --no-pdf-header-footer --generate-pdf-document-outline \
    --print-to-pdf="pdf/kartu/$nama.pdf" "file://$html" >/dev/null 2>&1

  echo "dibuat: modul/pdf/kartu/$nama.pdf"
}

buat_kartu "Kartu-P1-Senin-19-Okt"           "Lapak Buah 11-A  |  Kartu Mengajar Pertemuan 1" kartu/p1.md
buat_kartu "Kartu-P2-Selasa-20-Okt-Jam-3"    "Lapak Buah 11-A  |  Kartu Mengajar Pertemuan 2" kartu/p2.md
buat_kartu "Kartu-P3-Selasa-20-Okt-Jam-6-7"  "Lapak Buah 11-A  |  Kartu Mengajar Pertemuan 3" kartu/p3.md
buat_kartu "Kartu-P4-Rabu-21-Okt"            "Lapak Buah 11-A  |  Kartu Mengajar Pertemuan 4" kartu/p4.md
buat_kartu "Kartu-P5-Kamis-22-Okt"           "Lapak Buah 11-A  |  Kartu Mengajar Pertemuan 5" kartu/p5.md
buat_kartu "Kartu-Mengajar-5-Pertemuan"      "Lapak Buah 11-A  |  Kartu Mengajar 19 sampai 22 Oktober 2026" \
  kartu/p1.md kartu/p2.md kartu/p3.md kartu/p4.md kartu/p5.md
