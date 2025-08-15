function selectionSort(...arr: number[]): number[] {
    const newArr: number[] = [];
    const cp = arr.slice(0,arr.length);

    for (let i = 0; i < arr.length; i++) {
        let smallest = cp[0];
        let smallestIndex = 0;
        for (let j = 0; j <= cp.length; j++) {
            if (cp[j] < smallest) {
                smallest = cp[j];
                smallestIndex = j;

                break;
            }
        }
        newArr.push(smallest);
        cp.splice(smallestIndex, 1)
    }
    return newArr;
}

console.log(selectionSort(1,3,2,4,6,7,0,9,11,10,15,12,5))