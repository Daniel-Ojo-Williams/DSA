class MyArray<T> {
    private length: number;
    private data: Record<number, T>;
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item: T) {
        this.data[this.length] = item;
        this.length++
    }

    get(index: number) {
        return this.data[index];
    }

    pop() {
        delete this.data[this.length - 1]
        this.length--;
    }

    shift() {
        delete this.data[0];
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1]
        this.length > 0 && this.length--;
    }

    deleteByIndex(index: number) {
        delete this.data[index];
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]
        this.length > 0 && this.length--;
    }
}

const myArr = new MyArray<string>();
myArr.push("apple")
myArr.push("pawpaw")
myArr.push("orange")
myArr.push("guava")
// console.log(myArr)
myArr.pop();
// console.log(myArr)
myArr.shift();
// console.log(myArr);
myArr.deleteByIndex(0);
// console.log(myArr);
myArr.deleteByIndex(0);
// console.log(myArr);
myArr.deleteByIndex(0);
// console.log(myArr);

function reverseString(str: string): string {
    const strArr = str.split("");
    const c: string[] = [];
    for (let i = 0; i < strArr.length; i++) {
        c[i] = strArr[strArr.length - 1 - i]
    }
    return c.join("");
}

// console.log(reverseString("apple"));
// console.log(reverseString("hello"));

const isPalindrome = (str: string) => reverseString(str) === str;

// console.log(isPalindrome("race car"))

function reverseInt(int: number): number {
    const intStr = String(int);
    return parseInt(reverseString(intStr)) * Math.sign(int);
}

// console.log(reverseInt(-12341))\

function sentenceCap(sentence: string): string {
    const sentenceArr = sentence.toLowerCase().split(" ");
    for (let i = 0; i < sentenceArr.length; i++) {
        sentenceArr[i] = sentenceArr[i][0].toUpperCase() + sentenceArr[i].slice(1);
    }
    return sentenceArr.join(" ")
}

// console.log(sentenceCap("wale ajayi seunjejE"))

function fizzBuzz(n: number) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
}
// fizzBuzz(30);

function arrayChunk<T>(arr: T[], chunk: number) {
    const newArr: T[][] = [];
    const totalChunks = Math.ceil(arr.length / chunk);
    for (let i = 0; i < totalChunks; i++) {
        newArr[i] = arr.splice(0,chunk)
    }
    return newArr;
}

function arrayChunk2<T>(arr: T[], chunk: number) {
    const newArr: T[][] = [];
    for (let i = 0; i < arr.length; i+= chunk) {
        newArr.push(arr.slice(i, i + chunk))
    }
    return newArr;
}

// console.log(arrayChunk([1,2,3,4,5,6,7,8,9], 1));
// console.log(arrayChunk2([1,2,3,4,5,6,7,8,9], 1));

function twoSum(arr: number[], sum: number) {
    const indexes: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j === i) continue;
            if (arr[i] + arr[j] === sum) {
                indexes.push(i,j)
                return indexes;
            }
        }
    }
}

console.log(twoSum([1,3,6,5,2,7,6], 9))