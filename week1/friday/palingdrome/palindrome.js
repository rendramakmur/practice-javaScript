let kata = 'rendra';
let reverse = '';

for (var i = (kata.length - 1); i >= 0; i--) {
    reverse += kata[i];
}

if (kata === reverse) {
    console.log(true);
} else {
    console.log(false);
}