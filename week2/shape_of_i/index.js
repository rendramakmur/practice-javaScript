let num = 7;

for (let i = 1; i <= num; i++) {
    let temp = '';
    for (let k = 1; k <= num; k++) {
        if (i === 1 || i === num) {
            temp += '#';
        } else if (num % 2 === 0) {
            if (k === num/2 || k === ((num/2) + 1)) {
                temp += '|';
            } else {
                temp += ' ';
            }
        } else {
            if (k === Math.round(num/2)) {
                temp += '|';
            } else {
                temp += ' ';
            }
        }
    }
    console.log(temp);
}