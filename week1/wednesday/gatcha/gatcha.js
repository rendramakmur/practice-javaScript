// Memencet tombol untuk memulai gatcha

// Setelah memencet tombol, gatcha akan memulai random nomor 1-5

/**
 * Pseudocode:
 * STORE gatcha WITH RANDOM NUMBER BETWEEN 1 - 5
 * SWITCH gatcha
 *      CASE 1
 *          DISPLAY "Coba lagi ya!"
 *      CASE 2
 *          DISPLAY "Selamat kamu mendapatkan kupon sebanyak 5"
 *      CASE 3
 *          DISPLAY "Selamat kamu mendapatkan kupon sebanyak 15"
 *      CASE 4
 *          DISPLAY "Selamat kamu mendapatkan kupon sebanyak 50"
 *      CASE 5
 *          DISPLAY "WOW, kamu menang jackpot! Selamat!!!"
 * END SWITCH
 * 
 * 
 * 
 */

var gatcha = Math.ceil(Math.random() * 5);

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