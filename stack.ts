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
}

const stack = new Stack(1);
stack.push(2).push(3).push(4).pop().pop().pop().pop().pop()
console.dir(stack, { depth: null })