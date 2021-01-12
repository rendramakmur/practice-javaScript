// write your code here
let kata = 'hacktiv8';

for (let i = 0; i <= kata.length; i++) {
    let indexAkhir = kata.length - 1; // Ini didecrement
    let temp = '';
    for (let j = 0; j < kata.length; j++) {
        if (j >= kata.length - i) {
            if (i % 2 !== 0) {
                temp += kata[indexAkhir];
                indexAkhir--
            } else {
                temp += kata[j];
            }
        } else {
            temp += ' ';
        }
    }
    console.log(temp);
}