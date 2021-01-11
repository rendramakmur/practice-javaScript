/*
Hiking Mountain With Hacktiv8

Pada suatu hari Bambang, salah satu student Hacktiv8 Phase 0 ingin hiking untuk melepas penat setelah menyelesaikan phase 0 
(ceritanya phase 0 sudah mau berakhir). Namun itu hanya ide bambang sendiri, sehingga dia ingin mengajak kawan-kawan nya 
di phase 0 untuk hiking bersama.

Setelah Bambang browsing tentang destinasi hiking mana yang bagus, maka bambang memastikan terdapat 2 opsi untuk melakukan hiking, yaitu:
1. Gunung Semeru:
  - Ketinggian: 3676 mdpl
  - Harga Tiket: 
    - Senin - Jumat: 20000 
    - Sabtu - Minggu: 25000
  - Mendapatkan Diskon 10% dari harga total, jika jumlah anggota diatas 50
2. Gunung Rinjani: 
  - Ketinggian: 3726 mdpl
  - Harga Tiket:  
    - Senin - Jumat: 15000 
    - Sabtu - Minggu: 20000
  - Mendapatkan Diskon 20% dari harga total, jika jumlah anggota diatas 60

Buatlah program dimana bambang bisa men-generate total harga dari pemesanan tiket hiking dengan ketentuan di atas!

Opsi Destinasi Gunung = gunung semeru dan gunung rinjani
Opsi Waktu Hiking = senin, selasa, rabu, kamis, jumat, sabtu dan minggu

------------------------------------------------------------------------------------------------------------
Proses perhitungannya :

PERHITUNGAN HARGA NORMAL
Total harga tiket = jumlah anggota x harga tiket

PERHITUNGAN HARGA DISKON
Diskon di dapatkan JIKA jumlah anggota melebihi jumlah yang ditentukan oleh tiap gunung.
- Gunung semeru: 50 anggota
- Gunung rinjani: 60 anggota

Diskon jika destinasi ke gunung semeru adalah 10%:
Total harga tiket diskon = Total harga tiket - (total harga tiket x 10%)

Diskon jika destinasi ke gunung rinjani adalah 20%:
Total harga tiket diskon = Total harga tiket - (total harga tiket x 20%)
-------------------------------------------------------------------------------------------------------------

Output program diharapkan formatnya seperti di bawah :
Total harga pemesanan tiket [destinasiGunung] dengan ketinggian [tinggiGunung] mdpl sebanyak [totalAnggota] tiket adalah [totalHarga]

Contoh 1 :
let totalAnggota = 10;
let destinasiGunung = "gunung semeru";
let waktuHiking = "minggu";

output:
Total harga pemesanan tiket gunung semeru dengan ketinggian 3676 mdpl sebanyak 10 tiket adalah 250000

Contoh 2 : 
let totalAnggota = 70;
let destinasiGunung = "gunung semeru";
let waktuHiking = "senin";

output:
Total harga pemesanan tiket gunung semeru dengan ketinggian 3676 mdpl sebanyak 70 tiket adalah 1260000

Contoh 3 :
let totalAnggota = 10;
let destinasiGunung = "gunung rinjani";
let waktuHiking = "minggu";

output:
Total harga pemesanan tiket gunung rinjani dengan ketinggian 3726 mdpl sebanyak 10 tiket adalah 200000

=============================================
DILARANG MENGGUNAKAN BUILT-IN FUNCTION APAPUN
=============================================

*/

let totalAnggota = 10; 
let destinasiGunung = "gunung semeru"; 
let waktuHiking = "minggu"; 

// Your code here

/*
Semeru
Ketinggian: 3676 mdpl
- Senin - Jumat: 20000 
- Sabtu - Minggu: 25000
- Mendapatkan Diskon 10% dari harga total, jika jumlah anggota diatas 50
*/

/*
Rinjani
- Ketinggian: 3726 mdpl
- Senin - Jumat: 15000 
- Sabtu - Minggu: 20000
- Mendapatkan Diskon 20% dari harga total, jika jumlah anggota diatas 60
 */

// PERHITUNGAN HARGA NORMAL
// Total harga tiket = jumlah anggota x harga tiket

// PERHITUNGAN HARGA DISKON
// Diskon di dapatkan JIKA jumlah anggota melebihi jumlah yang ditentukan oleh tiap gunung.
// - Gunung semeru: 50 anggota
// - Gunung rinjani: 60 anggota

// Diskon jika destinasi ke gunung semeru adalah 10%:
// Total harga tiket diskon = Total harga tiket - (total harga tiket x 10%)

// Diskon jika destinasi ke gunung rinjani adalah 20%:
// Total harga tiket diskon = Total harga tiket - (total harga tiket x 20%)

// OUTPUT:
// Total harga pemesanan tiket gunung semeru dengan ketinggian ${3676 mdpl} sebanyak {10} tiket adalah {250000}

let totalHarga = 0;
let ketinggian = '';

if (destinasiGunung === "gunung semeru") {
  if (waktuHiking === "sabtu" || waktuHiking === "minggu") {
    totalHarga = 25000 * totalAnggota;
  } else {
    totalHarga = 20000 * totalAnggota;
  }
  
  if (totalAnggota > 50) {
    totalHarga = totalHarga - (totalHarga * 10/100)
  }

  ketinggian  = '3676 mdpl'
} else if (destinasiGunung === "gunung rinjani") {
  if (waktuHiking === "sabtu" || waktuHiking === "minggu") {
    totalHarga = 20000 * totalAnggota;
  } else {
    totalHarga = 15000 * totalAnggota;
  }
  
  if (totalAnggota > 60) {
    totalHarga = totalHarga - (totalHarga * 20/100)
  }

  ketinggian  = '3726 mdpl'
}

console.log(`Total harga pemesanan tiket ${destinasiGunung} dengan ketinggian ${ketinggian} sebanyak ${totalAnggota} tiket adalah ${totalHarga}`);
