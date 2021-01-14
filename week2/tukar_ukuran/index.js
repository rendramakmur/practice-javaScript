function tukarBesarKecil(kalimat) {
    let kamusKecil = 'abcdefghijklmnopqrstuvwxyz'
    let kamusBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let temp = '';

    for (let i = 0; i < kalimat.length; i++) {
        for (let j = 0; j <= kamusKecil.length; j++) {
            if (kalimat[i] === kamusBesar[j]) {
                temp += kamusKecil[j];
                break;
            } else if (kalimat[i] === kamusKecil[j]) {
                temp += kamusBesar[j];
                break;
            } else if (kamusKecil[j] === undefined) {
                temp += kalimat[i];
            }
        }
    }

    console.log(temp);

}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"