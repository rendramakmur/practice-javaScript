function groupAnimals(animals) {
    // you can only write your code here!
    let abjad = 'abcdefghijklmnopqrstuvwxyz';

    let output = [];

    for (let i = 0; i < abjad.length; i++) {
        let temp = [];
        for (let j = 0; j < animals.length; j++) {
            if (animals[j][0] === abjad[i]) {
                temp.push(animals[j]);
            }
        }
        if (temp.length !== 0) {
            output.push(temp);
        }
    }

    return output;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]