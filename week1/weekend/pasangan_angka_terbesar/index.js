// Kalau membandingkan angka terkecil / terbesar, jangan mulai var pembanding dari 0, tapi dari string pertama

let angka = 12783456;

angka = angka.toString();
let pembanding = angka[0] + angka[1];

for (let i = 0; i < angka.length - 2; i++) {
    let banding = angka[i + 1] + angka[i + 2];
    if (banding > pembanding) {
        pembanding = banding;
    }
}

console.log(pembanding);
