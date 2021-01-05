// 1. Melakukan looping dengan for

console.log('LOOPING FOR PERTAMA');
for(var i = 0; i < 20; i++) {
    console.log((i + 1) + ' - I love coding.');
}

console.log('LOOPING FOR KEDUA');
for(var i = 19; i >= 0; i--) {
    console.log((i + 1) + ' - I will become fullstack developer');
}

console.log('\n')

// 2. Melakukan looping dengan while
console.log('LOOPING WHILE PERTAMA');
var ulang1 = 1
while(ulang1 <= 20) {
    if(ulang1 % 2 === 0) {
        console.log(ulang1 + ' - I love coding');
    }
ulang1++;
}

console.log('LOOPING WHILE KEDUA');
var ulang1 = 20
while(ulang1 >= 1) {
    if(ulang1 % 2 === 0) {
        console.log(ulang1 + ' - I will become fullstack developer');
    }
ulang1--;
}