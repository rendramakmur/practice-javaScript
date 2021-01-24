function foodAndDrink(foods) {
    let output = {}

    for (let i = 0; i < foods.length; i++) {
        if (output[foods[i].type] === undefined) {
            output[foods[i].type] = [];
        }

        for (const key in output) {
            // console.log(output[foods[i].type]);
            if (key === foods[i].type) {
                output[foods[i].type].push(foods[i].name);
            }
        }
    }

    return output;
}

let items = [
    {
        name: 'Coca Cola',
        type: 'drink'
    },
    {
        name: 'Nasi Padang',
        type: 'food'
    },
    {
        name: 'Aqua',
        type: 'drink'
    },
    {
        name: 'Karedok',
        type: 'food'
    },
    {
        name: 'Ayam bakar',
        type: 'food'
    },
    {
        name: 'Pocari Sweat',
        type: 'drink'
    }
]

console.log(foodAndDrink(items))
/**
 * {
 *  food: ['Nasi Padang', 'Ayam bakar', 'Karedok'],
 *  drink: ['Coca Cola', 'Aqua', 'Pocari Sweat']
 * }
 */