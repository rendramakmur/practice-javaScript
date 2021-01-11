/**
 * =================
 * WORDS GAME SOLVER
 * =================
 *
 * Words Game adalah permainan klasik mencari kata yang tersembunyi.
 * Tugas kamu adalah membuat program untuk mencari kata <word1> di dalam <letters> secara otomatis dan dinamis.
 * Tampilkan pada terminal index `Kata <word1> ditemukan pada index ke <nomorIndex>.`.
 * Atau tampilkan pada terminal `Kata <word1> tidak ditemukan.` jika kata yang dicari tidak ditemukan.
 *
 * Penjelasan:
 * word1 => adalah kata yang akan dicari.
 * letters => adalah string random yang bisa jadi mengandung <word1> atau tidak
 * nomorIndex => adalah index lokasi karakter pertama <word1> ditemukan.
 *
 * Contoh 1:
 * word1 = "BULAN"
 * letters = "AEYEKBUMIBULANXHY"
 *            ^^^^^^^^^|
 * index ==>  0123456789....dst
 *
 * Output:
 * Kata BULAN ditemukan pada index ke 9.
 *
 *
 * Contoh 2:
 * word1 = "JUPITER"
 * letters = "AEYEK7BUMIBULANXHY"
 *
 * Output:
 * Kata JUPITER tidak ditemukan.
 *
 *
 * Notes:
 * - Kamu bebas membuat variable variable baru sesuai kebutuhan
 *
 * RULES:
 * - Mengikuti aturan umum saat briefing
 * - Tidak boleh menggunakan build-in function apapun
 * - Tidak boleh menggunakan regex
 */

// let letters = "AEYEKTBULANXHY";
// let word1 = "BULAN";

// Your code here


// Jawaban pertama pas Live Code
// let temp = '';
// let kataPertama = word1[0];
// let index = 0;
// let flag = false;

// for (let i = 0; i < letters.length; i++) {
//     for(let j = 0; j < word1.length; j++) {
//         if (letters[i + 1] === kataPertama && flag === false) {
//             flag = true;
//             index++
//         } else if (letters[i] === kataPertama && flag === true) {
//             flag = false;
//         } else if (letters[i] === word1[word1.length - 1]) {
//             flag = false;
//         }

//     }
//     if (flag) {
//         temp += letters[i];
//     }
// }

// if (temp === word1) {
//     console.log(`Kata ${word1} ditemukan pada index ke ${index}`);
// } else {
//     console.log(`Kata ${word1} tidak ditemukan`);
// }

// console.log(temp);

let letters = "AEYEKTBULANXHY";
let word1 = "BULAN";
let flag = false;
let index = 0;

for (let i = 0; i < letters.length; i++) {
    // let temp = letters[i] + letters[i + 1] + letters[i + 2] + letters[i + 3] + letters[i + 4]; --- ini cara manual
    let temp = '';
    for (let j = 0; j < word1.length; j++) {
        temp += letters[i + j]
    }
    if (temp === word1) {
        index = i;
        flag = true;
    }
}




if (flag) {
    console.log(`Kata ${word1} ditemukan pada index ke ${index}`);
} else {
    console.log(`Kata ${word1} tidak ditemukan`);
}