class StackNode<T> {
    value: T;
    next: StackNode<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }
}

class Stack<T> {
    top: StackNode<T> | null;
    length: number;
    constructor(value: T) {
        this.top = new StackNode(value);
        this.length = 1;
    }

    push(value: T) {
        const newStack = new StackNode(value);
        if (this.top) {
            newStack.next = this.top
        } 
        this.top = newStack;

        this.length++
        return this;
    }

    pop() {
        if (!this.top) {
            return this;
        }

        const top = this.top;
        this.top = top.next;

        this.length--;
        return this;
    }

    min() {
        if (this.length === 0) {
            return undefined;
        }

        let min = this.top!.value;
        let curr = this.top?.next;
        while(curr) {
            if (curr.value < min) {
                min = curr.value
            }
            curr = curr.next
        }

        return min;
    }
}

const stack = new Stack(22);
stack.push(2).push(3).push(4).push(21)
console.log(stack.min())