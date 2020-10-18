const numbers = [23, 54, 87, 5, 45, 96, 77, 123, 65, 10];

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i+1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        const temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return array;
}

const sorted = selectionSort(numbers);
console.log(sorted);