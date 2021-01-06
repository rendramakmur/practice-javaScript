// 1.
let row1 = 5;
let asterisks1 = '';

for(var i = 1; i <= row1; i++) {
    asterisks1 += '*';
    asterisks1 += '\n';
}

console.log(asterisks1);

// 2.
let row2 = 5;
let asterisks2 = '';

for(var i = 1; i <= row2; i++) {
    for(var j = 1; j <= row2; j++) {
        asterisks2 += '*';
    }
    asterisks2 += '\n';
}

console.log(asterisks2);

// 3.
let row3 = 5;
let asterisks3 = '';

for(var i = 1; i <= row3; i++) {
    for(var j = 1; j <= i; j++) {
        asterisks3 += '*';
    }
    asterisks3 += '\n';
}

console.log(asterisks3);

// 4.
let row4 = 5;
let asterisks4 = '';

for(var i = 5; i > 0; i--) {
    for(var j = 0; j < i; j++) {
        asterisks4 += '*';
    }
    asterisks4 += '\n';
}

console.log(asterisks4);