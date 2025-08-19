class QueueNode<T> {
    value: T;
    next: QueueNode<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }
}

class Queue<T> {
    first: QueueNode<T> | null;
    last: QueueNode<T> | null;
    length: number;
    constructor(value: T) {
        this.first = new QueueNode(value);
        this.last = this.first;
        this.length = 1;
    }

    enqueue(value: T) {
        const node = new QueueNode(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        }

        this.last!.next = node;
        this.last = node;

        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0) {
            return this;
        }

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            const first = this.first;
            this.first = first!.next;
        }

        this.length--;
        return this;
    }
}

const queue = new Queue(1);
queue.enqueue(2).enqueue(3).enqueue(4).enqueue(5).dequeue().dequeue()
console.dir(queue, { depth: null });