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
// // }

// var s = '';

// for(var i = 5; i > 0; i--) {
//     for(var j = 1; j <= i; j++) {
//         s += '*'
//     }
//     s += '\n';
// }

// console.log(s);


// Latihan for loop asterisks
//
//    *
//   **
//  ***
// ****
//***** 
//


// for (var i = 1; i <= num; i++) {
//     var temp = '';
//     for(var j = 0; j < num; j++) {
//         if(j >= (num - i)) {
//             temp += '*';
//         } else {
//             temp += ' ';
//         }
//     }
//     console.log(temp);
// }


/**
 *
 *
 * var num = 9;
 * (minimal 7 dan angka harus ganjil)
 *
 * *********
 * **     **
 * * *   * *
 * *  * *  *
 * *   *   *
 * *  * *  *
 * * *   * *
 * **     **
 * *********
 */


// let num = 9;

// for (var i = 1; i <= num; i++) {
//     var temp = '';
//     for (var j = 1; j <= num; j++) {
//         if(i === 1 || i === num) {
//             temp += '*';
//         } else {
//             if (j === 1 || j === num) {
//                 temp += '*';
//             } else if (j === i || j === (num - i + 1)) {
//                 temp += '*';
//             } else {
//                 temp += ' ';
//             }
//         }
//     }
//     console.log(temp);
// }


/* 
 *
 * *******
 * *  *  *
 * *  *  *
 * *******
 * *  *  *
 * *  *  *
 * *******
 * 
 */

let num = 11;

for (var i = 1; i <= num; i++) {
    var temp = '';
    for (var j = 1; j <= num; j++) {
        if(i === 1 || i === num || i === Math.round(num/2)) {
            temp += '*';
        } else {
            if (j === 1 || j === num) {
                temp += '*';
            } else if (j === Math.round(num/2)) {
                temp += '*';
            } else {
                temp += ' ';
            }
        }
    }
    console.log(temp);
}



/*

Buat segitiga seperti

  x
 xox
xoxox

*/

// Cara 1
// let tampung = '';

// for(var i = 1; i <= num * 2; i++) {
//     var tampung = '';
//     for(var j = i; j <= num * 2 - 2; j += 2) {
//         tampung += ' ';
//     }
//     if(i % 2 !== 0) {
//         for(var j = 1; j <= i; j++) {
//             if(j % 2 !== 0) {
//                 tampung += 'x';
//             } else {
//                 tampung += 'o';
//             }
        
//         }
//         console.log(tampung);
//     }
// }



// Cara 2
// for(var i = 1; i <= num * 2; i++) {
//     if(i % 2 !== 0) {
//         for(var j = 1; j <= (num * 2 - i - 1); j += 2) {
//             tampung += ' ';
//         }
//         for(var k = 1; k <= i; k++) {
//             if(k % 2 !== 0) {
//                 tampung += 'x';
//             } else {
//                 tampung += 'o';
//             }
//         }
//     tampung += '\n'
//     }
// }

// console.log(tampung);


// Interisting Shape of I
/*

let num 5

#####
  |
  |
  |
#####

let num 6

######
  ||
  ||
  ||
  ||
######


*/



let num = 5;

for (let i = 1; i <= num; i++) {
    let temp = '';
    // Ini kalau spasinya manual
    // if (i !== 1 && i !== num) {
    //     if (num % 2 === 0) {
    //         for (let j = 1; j <= (num/2) - 1; j++) {
    //             temp += ' ';
    //         }
    //     } else {
    //         for (let j = 1; j <= Math.floor(num/2); j++) {
    //             temp += ' ';
    //         }
    //     }
    // }

    for (let k = 1; k <= num; k++) {
        if (i === 1 || i === num) {
            temp += '#';
        } else if (num % 2 === 0) {
            if (k === num/2 || k === (num / 2 + 1)) {
                temp += '|';
            } else {
                temp += ' '; // ini otomatis
            }
        } else {
            if (k === Math.round(num/2)) {
                temp += '|';
            } else {
                temp += ' '; //ini otomatis
            }
        }
    }
    console.log(temp);
}