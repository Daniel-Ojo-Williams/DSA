function binarySearch(arr: number[], n: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];

        if (guess === n) {
            return mid
        } else if (guess > n) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7, 8], 0))
