function angkaPrima(angka) {
    // you can only write your code here!
    let isPrima = false;
    
    for (let i = 1; i < angka - 1; i++) {
        console.log(i, isPrima);
        if (angka % i === 0 && i !== 1) {
            isPrima = false;
            break;
        } else {
            isPrima = true;
        }
    }

    return isPrima;
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false