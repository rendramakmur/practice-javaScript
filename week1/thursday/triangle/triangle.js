let kata = 'xoxoxo';
let x = 0;
let o = 0;

for(var i = 0; i < kata.length; i++) {
    if(kata[i] === 'x') {
        x += 1;
    } else {
        o += 1;
    }
}

if(x === o) {
    console.log(true);
} else {
    console.log(false);
}