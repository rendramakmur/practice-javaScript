// BETWEEN SLASH
// ===
// Diberikan sebuah string yang merupakan kode produksi sebuah barang. Dalam string tersebut, 
// kode pengiriman dipisahkan oleh karakter '/'. Jika karakter '/' lebih atau kurang dari 2, maka 
// kode produksi dianggap INVALID. Buatlah kode untuk bisa mendapatkan kode pengiriman tersebut

//Important Point: 
// 1. Dalam string tersebut, kode pengiriman dipisahkan oleh karakter '/';
// 2. lebih atau kurang dari 2, maka  kode produksi dianggap INVALID;
// 3. Buatlah kode untuk bisa mendapatkan kode pengiriman tersebut

// Contoh :
// kode produksi : HD73/TIKI009/JMP55
// maka outputnya adalah 'TIKI009'

// kode produksi : KJI7736/NINJ1881/JU
// maka outputnya adalah 'NINJ1881'

// kode produksi : YU676/HJL2398HJH
// maka outputnya adalah 'INVALID'

// let kodeProduksi = 'HD73/TIKI009/JMP55';
// let jumlahSlash = 0;
// let flag = false;
// let kodePengiriman = '';

// for (let i = 0; i < kodeProduksi.length; i++) {
//     if (kodeProduksi[i] === '/' && !flag) {
//         flag = true;
//         jumlahSlash++;
//     } else if (kodeProduksi[i] === '/' && flag) {
//         flag = false;
//         jumlahSlash++
//     }

//     if (flag && kodeProduksi[i] !== '/') {
//         kodePengiriman += kodeProduksi[i];
//     }
// }

// if (jumlahSlash > 2 || jumlahSlash < 2) {
//     console.log('Invalid');
// } else {
//     console.log(kodePengiriman);
// }


// Cek huruf vokal pada variabel kalimat.



var kalimat = 'kalian coder jago tapi terkadang sampah';
var kamusVokal = 'aiueo';

var result = 0;

for (let i = 0; i < kalimat.length; i++) {
    var flag = false;
    for (let j = 0; j < kamusVokal.length; j++) {
        if (kalimat[i] === kamusVokal[j]) {
            flag = true;
        }
    }
    if (flag) {
        result++;
    }
}

console.log(result);