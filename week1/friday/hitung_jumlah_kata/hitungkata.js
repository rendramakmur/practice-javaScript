// Diberikan sebuah variabel kalimat bertipe string. Buatlah program yang menghitung jumlah kata yang terdapat didalam kalimat tersebut (dilarang menggunakan built in function split)

let kalimat = '';
let kata = 0;

if (!kalimat || kalimat === ' ') {
    kata = 0;
} else {
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === ' ' && kalimat [i + 1] === undefined) {
            kata;
        } else if (kalimat[i] === ' ' && kalimat [i - 1] === undefined) {
            kata;
        } else if (kalimat === ' ') {
            kata -= 1;
        } else if (kalimat[i] === ' ') {
            kata += 1;
        }
    }
    kata++;
}

console.log(kata);