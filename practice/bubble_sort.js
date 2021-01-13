let arr = [10, 9, 5, 3, 23, 92, 100, 4, 2, 1, 4, 50];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[j] > arr[j + 1]) {
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);