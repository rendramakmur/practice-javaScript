/**
 * Buatlah PSEUDOCODE untuk kasus berikut:
 * 
 * Terdapat 2 variabel dalam sebuah hubungan.
 * perasaanKamu & perasaanDia yang dapat berisi tulisan "suka" atau "tidak suka".
 * Kamu ingin memastikan apakah kalian selaras atau tidak.
 * 
 * Ada tiga kemungkinan:
 *   - Jika kedua variabel berisi value "tidak suka", tampilkanlah pesan "Putus aja!"
 *   - Jika hanya salah satu yang berisi "suka", maka pesan yang muncul "Cinta bertepuk sebelah tangan."
 *   - Jika kedua variabel berisi "suka", maju ke tahap selanjutnya...
 * 
 * Lalu kalian bersiap-siap menemui orangtua untuk mendapat restu orangtua.
 * restuAyah & restuIbu adalah variabel yang bisa berisi "restu" atau "tidak restu"
 * 
 * Ada tiga kemungkinan:
 *   - Jika kedua variabel berisi "restu", tampilkanlah pesan "Siap!"
 *   - Jika hanya salah satu yang berisi "restu", tampilkanlah pesan "Masih harus berusaha."
 *   - Jika kedua variabel berisi "tidak restu", tampilkanlah pesan "Ortu tidak restu..."
 * 
 * 
 * Tampilkan pesan sesuai dengan kondisi tersebut!
 * 
**/

// TULIS PSEUDOCODE KAMU DI SINI! //

/*
STORE perasaanKamu WITH STRING "suka" OR "tidak suka"
STORE perasaanDia WITH STRING "suka" OR "tidak suka"
STORE restuAyah WITH STRING "restu" OR "tidak restu"
STORE restuIbu WITH STRING "restu" OR "tidak restu"

IF perasaanKamu EQUAL WITH "tidak suka" AND perasaanDia EQUAL WITH "tidak suka"
    DISPLAY "Putus aja!"
ELSE IF perasaanKamu EQUAL WITH "suka" AND perasaanDia EQUAL WITH "suka"
    IF restuAyah EQUAL WITH "tidak restu" AND restuIbu EQUAL WITH "tidak restu"
        DISPLAY "Ortu tidak restu..."
    ELSE IF restuAyah EQUAL WITH "restu" AND restuIbu EQUAL WITH "restu"
        DISPLAY "Siap!"
    ELSE
        DISPLAY "Masih harus berusaha."
    END IF
ELSE 
    DISPLAY "Cinta bertepuk sebelah tangan."
END IF


*/