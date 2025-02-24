function hitungTotalPengeluaran(bulanan, tahunan) {
    let totalPengeluaran = bulanan + tahunan;
    return totalPengeluaran;
}

function bandingkanPengeluaran(bulanan, tahunan) {
    if (bulanan > tahunan) {
        return "Pengeluaran bulanan lebih besar dari pengeluaran tahunan.";
    } else if (bulanan < tahunan) {
        return "Pengeluaran tahunan lebih besar dari pengeluaran bulanan.";
    } else {
        return "Pengeluaran bulanan dan tahunan sama.";
    }
}

function hitungRataRataPengeluaran(tahunan) {
    let rataRataBulanan = tahunan / 12;
    return rataRataBulanan;
}

function hitungPengeluaran() {
    let pengeluaranBulanan = parseFloat(document.getElementById("pengeluaranBulanan").value);
    let pengeluaranTahunan = parseFloat(document.getElementById("pengeluaranTahunan").value);

    let totalPengeluaran = hitungTotalPengeluaran(pengeluaranBulanan, pengeluaranTahunan);
    let pesanPerbandingan = bandingkanPengeluaran(pengeluaranBulanan, pengeluaranTahunan);
    let rataRataBulanan = hitungRataRataPengeluaran(pengeluaranTahunan);

    document.getElementById("hasilTotalPengeluaran").innerText = "Total Pengeluaran: " + totalPengeluaran;
    document.getElementById("hasilPerbandinganPengeluaran").innerText = pesanPerbandingan;
    document.getElementById("hasilRataRataPengeluaran").innerText = "Rata-rata pengeluaran bulanan: " + rataRataBulanan;
}
