let detik = 88;
let menit = 0;

// if(detik >= 60) {
//     menit += 1;
// }

if(detik >= 60) {
    menit += Math.floor(detik/60);
    detik %= 60;
}

// console.log(menit +':'+(detik - menit * 60));

console.log(menit+':'+detik);