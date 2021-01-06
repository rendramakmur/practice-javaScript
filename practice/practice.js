// var nilai = undefined;

// Jika nilai falsy tampilkan "Masih salah gan"
// Jika nilai truthy tampilkan "Yeay aku dapet ferrari"


// 1.
// if(!nilai) {
//     console.log('Masih salah gan');
// } else {
//     console.log('Yeay aku dapet ferrari');
// }


// // 2.
// if(nilai) {
//     console.log('Yeay aku dapet ferrari')
// } else {
//     console.log('Masih salah gan')
// }


// const kalimat ='erby cinta mati dengan afifa';
// //eb it ai dna ff

// var tampung = '';

// for(var i = 0; i < kalimat.length;i++) {
//     if(i % 2 === 0) {
//         if(kalimat[i] !== ' ') {
//             tampung += kalimat[i];
//             console.log(tampung);
//         }
//     }
// }

var s = '';

for(var i = 5; i > 0; i--) {
    for(var j = 1; j <= i; j++) {
        s += '*'
    }
    s += '\n';
}

console.log(s);
