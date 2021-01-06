// let num = 3;
// let triangle = '';

// for(var i = 1; i <= num; i++) {    
//     for(var j = 1; j <= (num - i); j++) {
//         triangle += ' ';
//     }
//     for(var k = 1; k <= i; k++) {
//         if(k % 2 !== 0) {
//             triangle += 'x';
//         } else {
//             triangle += 'o';
//         }
//     }
//     for(var l = 2; l <= i; l++) {
//         if(l % 2 !== 0) {
//             triangle += 'x';
//         } else {
//             triangle += 'o';
//         }
//     }

//     triangle += '\n'
// }

// for(var i = 1; i <= num; i++) {
//     if(i % 2 !== 0) {
//         triangle += 'x';
//     }

//     triangle += '\n'
// }

let num = 3;
let triangle = '';


for(var i = 1; i <= num*2; i++) {
    if(i % 2 !== 0) {
        for(var j = 1; j <= (num*2 - i); j += 2) {
            triangle += ' ';
        }
        for(var j = 1; j <= i; j++) {
            if(j % 2 !== 0) {
                triangle += 'x';
            } else {
                triangle += 'o';
            }
        }
        triangle += '\n';
    }
}

console.log(triangle);
