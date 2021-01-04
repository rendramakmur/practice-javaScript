// Memencet tombol untuk memulai gatcha

// Setelah memencet tombol, gatcha akan memulai random nomor 1-5

var gatcha = Math.floor(Math.random() * 5) + 1;

switch (gatcha) {
    case 1 :
        console.log('Coba lagi ya!');
    break;
    case 2 :
        console.log('Selamat kamu mendapatkan kupon sebanyak 5');
    break;
    case 3 :
        console.log('Selamat kamu mendapatkan kupon sebanyak 15');
    break;
    case 4 :
        console.log('Selamat kamu mendapatkan kupon sebanyak 50');
    break;
    case 5 :
        console.log('WOW, kamu menang jackpot! Selamat!!!');
}