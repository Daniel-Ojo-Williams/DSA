function sum(...arr: number[]): number {
    if (arr.length === 0) {
        return 0
    }

    if (arr.length === 1) {
        return arr[0];
    }

    return arr[0] + sum(...arr.slice(1))
}

function itemsInAList(arr: number[]): number {
    if (arr.length === 0) {
        return 0
    }
    return 1 + itemsInAList(arr.slice(1))
}

function listMaxim(arr: number[], index = 0, max = arr[index]): number {
    if (index >= arr.length) return max;
    if (arr[index] > max) {
        max = arr[index]
    }
    return listMaxim(arr, index + 1, max);
}

function binarySearchWithRecursion(arr: number[], value: number, left = 0, right = arr.length - 1): number {
    if (arr.length === 0 || left > right) return -1

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === value) {
        return mid
    } else if (arr[mid] > value) {
        right = mid - 1
    } else {
        left = mid + 1
    }

    return binarySearchWithRecursion(arr, value, left, right);
}

console.log(binarySearchWithRecursion([1], 1))