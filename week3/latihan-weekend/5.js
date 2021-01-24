var items = [
    {
        name: 'SanSilk',
        category: 'sampo',
        price: 12000
    },
    {
        name: 'LiveBoy',
        category: 'sabun',
        price: 3000
    },
    {
        name: 'Getol',
        category: 'sabun',
        price: 7000
    },
    {
        name: 'Novu',
        category: 'sabun',
        price: 2000
    },
    {
        name: 'Pantin',
        category: 'sampo',
        price: 30000
    }
]

/*
Buatlah grouping item advanced sesuai dengan categorynya !
output: {
  sampo: {
    avg: 'nilaiRata2Sampo',
    totalHarga: 'totalHargaSampo',
    daftar: ['SanSilk', 'Pantin']
  },
  sabun: {
    avg: 'nilaiRata2Sabun',
    totalHarga: 'totalhargaSabun',
    daftar: ['LiveBoy', 'Getol', 'Novu']
  }
}
*/

function groupingAdvance(list) {
    // code here
    let output = {};

    for (let i = 0; i < list.length; i++) {
        if (output[list[i].category] === undefined) {
            output[list[i].category] = {
                avg: 0,
                totalHarga: 0,
                daftar: [],
            }
        }

        for (const key in output) {
            if (key === list[i].category) {
                output[key].totalHarga += list[i].price;
                // console.log(output[key].avg);
                output[key].daftar.push(list[i].name);
                output[key].avg = output[key].totalHarga/output[key].daftar.length;
            }
        }
    }

    return output;

}
console.log(groupingAdvance(items))