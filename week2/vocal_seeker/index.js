function vocalSeeker (board) {
    let vocal = 'aiueoAIUEO';
    flag = false;
    jumlahVocal = 0;
    temp = '';

    for (let i = 0; i < board.length; i++) {
        // console.log('i ' + i)
        for (let j = 0; j < board[i].length; j++) {
            // console.log('j ' + board[i][j])
            for (let k = 0; k < vocal.length; k++) {
                if (board[i][j] === vocal[k]) {
                    flag = true;
                    jumlahVocal++
                    temp += vocal[k];
                }
                // console.log('k ' + flag)
                if (board[i][j] !== vocal[k]) {
                    flag = false;
                }
                // console.log('k ' + board[i][j] + ' ' + vocal[k] + ' ' + flag)

            }
        }
    }

    return `vokal ditemukan ${jumlahVocal} dan kumpulang vokal adalah ${temp}`;
}

let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b']
  ]
  
  console.log(vocalSeeker(board));