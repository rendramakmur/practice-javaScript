// 1. Create object

// function groupByAge(arr) {
//     let tahunSekarang = 2021;
//     let output = {};

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = tahunSekarang - arr[i];
//         if (!output[arr[i]]) {
//             output[arr[i]] = 1;
//         } else {
//             output[arr[i]] += 1;
//         }
//     }
    
//     return output;
// }
  
//   console.log(groupByAge([2003, 1991, 1821, 2003, 1821, 1995, 1995]))
  
//   /**
//    * {
//    *  17: 2,
//    *  29 : 1,
//    *  199: 2,
//    *  25: 2
//    * }
//    */

// 2. Suspects
/**
 * Kalian ditugaskan untuk membuat sebuah program yang akan dipakai Bandara Internasional Soekarno-Hatta untuk memeriksa apakah seseorang merupakan suspect dari suatu penyakit berbahaya yang baru saja mewabah akhir-akhir ini.
 * Program akan menerima input berupa object yang merepresentasikan penumpang dengan format seperti berikut:
{
    name: (string),
    id: (Number),
    temperature: (Number),
    travelHistory: [] (Array of Strings),
}
 * Program ini akan mengevaluasi apakah orang ini merupakan suspect dari penyakit ini atau tidak, dan mengeluarkan output berupa string. 
 * Berikut ini adalah kondisi-kondisi yang akan di handle program ini:
 * - Jika suhu tubuhnya diatas 35 derajat dan dia pernah mengunjungi salah satu dari 4 negara berikut: 'China', 'Japan', 'Korea', dan 'Singapore' pada travel historynya, maka dia dinyatakan sebagai "Suspect".
 * - Jika suhu tubunya tidak diatas 35 derajat, maka dia tidak apa-apa dan dinyatakan "Healthy".
 *      - Namun, jika suhunya tidak diatas 35 derajat tetapi dia pernah berkunjung ke 4 negara diatas, maka dia dinyatakan sebagai seorang "Potential Carrier".
 * - Jika suhu tubuhnya tinggi tetapi dia tidak pernah berkunjung ke 4 negara tersebut maka dia hanya sakit, dan dinyatakan "Sick".
 * 
 * Output yang dikeluarkan program ini memiliki format sebagai berikut:
 * "Passenger [id] [name] [status]"
 * 
 * dimana status bisa berupa:
 * [status] : Suspect, Healthy, Potential Carrier, Sick 
 * 
 * 
 * RULES
 * - Dilarang menggunakan built-in function kecuali .push()
 *
 */

// ============================ CARA 1 =============================
// function evaluatePassenger(passenger) {
//     let suspectCountry = ['China', 'Japan', 'Korea', 'Singapore'];
//     let status = '';

//     for (let i = 0; i < passenger.travelHistory.length; i++) {
//         for (let j = 0; j < suspectCountry.length; j++) {
//             if (suspectCountry[j] === passenger.travelHistory[i] && passenger.temperature > 35) {
//                 status = 'Suspect';
//                 break;
//             } else if (suspectCountry[j] === passenger.travelHistory[i] && passenger.temperature < 35) {
//                 status = 'Potential Carrier'
//                 break;
//             } else if (suspectCountry[j] !== passenger.travelHistory[i] && passenger.temperature > 35) {
//                 status = 'Sick';
//             } else {
//                 status = 'Healthy';
//             }
//         }
//     }

//     return `Passenger ${passenger.id} ${passenger.name} ${status}`


// }

// ============================ CARA 2 =============================

// function evaluatePassenger(passenger) {

// }


// console.log(evaluatePassenger({name: 'Budi', id: 50, temperature: 40, travelHistory: ['Russia', 'Japan']})) //Passenger 50 Budi Suspect
// console.log(evaluatePassenger({name: 'Tono', id: 10, temperature: 40, travelHistory: ['Morocco', 'France', 'Burma']})) //Passenger 10 Tono Sick



// 3. Battle Stats
/*
===
Battle Stats
===
Diberikan array 2 dimensi yang merupakan rangkuman hasil dari pertempuran 2 kelompok pasukan. Di tiap pasukan, terdapat pasukan-pasukan kecil yang dipimpin oleh Jendralnya masing-masing.

Jika angka Jendral positif, maka di sebuah pertempuran, pasukan Jendral tersebut menang sebanyak angka tersebut
Jika angka Jendral negatif, maka di sebuah pertempuran, pasukan Jendral tersebut kalah sebanyak angka tersebut

Tugas kamu untuk mengeluarkan statistik hasil pertempuran seperti contoh

Contoh :
let battle = [
  ["Hwang Shi Mok", -1],
  ["Savants", 1],
  ["Hwang Shi Mok", 2],
  ["Hwang Shi Mok", 1],
  ["Savants", 5],
  ["Legolas", 10],
  ["Legolas", -20],
  ["Legolas", -10],
]

console.log(battleStats(battle))

Output :
{
  "Hwang Shi Mok": {
    "Kalah": 1,
    "Menang": 3
  },
  "Savants": {
    "Kalah": 0,
    "Menang": 6
  },
  "Legolas": {
    "Kalah": 30,
    "Menang": 10
  },
}

*/

// function battleStatistic(battle) {
//     let output = {};

//     for (let i = 0; i < battle.length; i++) {
//         if (!output[battle[i][0]]) {
//             if (battle[i][1] < 0) {
//                 output[battle[i][0]] = battle[i][1];
//             } else {
//                 output[battle[i][0]] += battle[i][1];
//             }
//         }
//     }
//     return output;
// }

// console.log(battleStatistic([
//     ["Hwang Shi Mok", -1],
//     ["Savants", 1],
//     ["Hwang Shi Mok", 2],
//     ["Hwang Shi Mok", 1],
//     ["Savants", 5],
//     ["Legolas", 10],
//     ["Legolas", -20],
//     ["Legolas", -10],
//   ]));

// // Output :
// // {
// //   "Hwang Shi Mok": {
// //     "Kalah": 1,
// //     "Menang": 3
// //   },
// //   "Savants": {
// //     "Kalah": 0,
// //     "Menang": 6
// //   },
// //   "Legolas": {
// //     "Kalah": 30,
// //     "Menang": 10
// //   },
// // }


// 4. Company Match
/**
 * =============
 * Company Match
 * =============
 *
 * Company match adalah sebuah fungsi yang akan mencocokan requirement dari sebuah perusahaan dengan skill yang dimiliki oleh seseorang.
 *
 * fungsi ini akan menerima dua parameter yang berupa sebuah object.
 *
 * Parameter pertama adalah sebuah object perusahaan dengan beberapa data seperti: nama perusahaan, job yang ditawarkan, dan requirement yang dibutuhkan untuk memdapatkan pekerjaan
 * Parameter kedua adalah sebuah object pelamar dengan beberapa data seperti: nama pelamar, skill pelamar, dan job yang dinginkan oleh pelamar tersebut.
 *
 * Fungsi ini akan menghitung persentase berapa cocok perusahaan dan pelamar yang dikirimkan dengan beberapa syarat.
 * 1. Jika job yang ditawarkan oleh perusahaan tidak sesuai dengan job yang diinginkan maka persentase mereka adalah 0%
 * 2. Jika seluruh requirement yang diminta oleh perusahaan dipenuhi oleh pelamar maka persentase mereka adalah 100%.
 * 3. Jika ada beberapa requirement yang tidak dipenuhi pelamar maka persentase akan dihitung dengan rumus [ jumlah requirement yang dipenuhi] / [ requirement yang diminta]
 *    contoh: Terdapat 3 requirement pada perusahan tetapi pelamar hanya memenuhi 2 requirement oleh karena itu persentase pelamar tersebut adalah 66% ( dibulatkan ke bawah)
 *
 * Jika seseorang mendapatkan persentase diatas 60% maka tampilkanlah pesan `Selamat [nama pelamar] anda cocok dengan perusahaan [ nama perusahaan] dengan persentase kecocokan [ persentas]
 * Jika tidak maka tampilkan pesan `Mohon maaf [nama pelamar] anda belum cocok dengan perusaahan [nama perusaahn] anda hanya mendapatkan persentase kecocokan [ persentase]
 */

function companyMatch(company, user) {
    
}

const company1 = {
    name: 'Pesbok',
    job: 'Frontend Developer',
    requirement: ['HTML', 'CSS', 'JS']
}

const john = {
    name: 'John',
    applyAs: 'Frontend Developer',
    skills: ['HTML', 'CSS', 'JS']
}

const kosasih = {
    name: 'Kosasih',
    applyAs: 'Backend Developer',
    skills: ['Express', 'Node', 'PHP']
}

const marry = {
    name: 'Marry',
    applyAs: 'Frontend Developer',
    skills: ['HTML', 'CSS']
}

const marry2 = {
    name: 'Marry',
    applyAs: 'Frontend Developer',
    skills: ['Express', 'Node', 'PHP']
}

console.log(companyMatch(company1, john)) // Selamat John anda cocok dengan perusahaan Pesbok dengan persentase kecocokan 100%
console.log(companyMatch(company1, kosasih)) // Mohon maaf Kosasih anda belum cocok dengan perusaahan Pesbok anda hanya mendapatkan persentase kecocokan 0%
console.log(companyMatch(company1, marry)) // Selamat Marry anda cocok dengan perusahaan Pesbok dengan persentase kecocokan 66%
console.log(companyMatch(company1, marry2)) // Mohon maaf Mary anda belum cocok dengan perusaahan Pesbok anda hanya mendapatkan persentase kecocokan 0%
console.log(companyMatch({}, marry)) // company tidak terdaftar
console.log(companyMatch(company1)) // tidak ada pelamar