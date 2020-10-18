const binarySearch = (numbers, target) => {
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (numbers[mid] == target) {
            return mid;
        }
        else if (numbers[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}

const numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

const target = 370;

const index = binarySearch(numbers, target);
console.log(index);