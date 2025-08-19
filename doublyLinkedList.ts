class DoublyListNode<T> {
    value: T;
    prevNode: DoublyListNode<T> | null;
    nextNode: DoublyListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.nextNode = null;
        this.prevNode = null;
    }
}

class DoublyLinkedList<T> {
    head: DoublyListNode<T> | null;
    tail: DoublyListNode<T> | null;
    length: number;
    constructor(value: T) {
        this.head = new DoublyListNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value: T) {
        const newNode = new DoublyListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.nextNode = newNode;
            newNode.prevNode = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        };
        const lastNode = this.tail;
        // console.log("LASTNODE:", lastNode)
        if (!lastNode) {
            this.head = null
            this.tail = null
        } else {
            this.tail = lastNode.prevNode!;
            this.tail.nextNode = null
            this.length--;
        }        

        return this;
    }

    unshift(value: T) {
        const newNode = new DoublyListNode(value);
        const head = this.head;
        if (!head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head!.prevNode = newNode;
            newNode.nextNode = this.head;
            this.head = newNode;
        };
        
        this.length++;
        return this;
    }

    printForward() {
        let current = this.head;
        const list: T[] = [];
        
        while(current) {
            list.push(current.value);
            current = current.nextNode;
        };

        console.log(list.join(" <-> "));
    }

    printBackward() {
        let current = this.tail;
        const list: T[] = [];
        
        while(current) {
            list.push(current.value);
            current = current.prevNode;
        };

        console.log(list.join(" <-> "));
    }

    shift() {
        if (!this.head) {
            return this;
        }
        const nextNode = this.head.nextNode;
        if (!nextNode) {
            this.head = null;
            this.tail = null;
        } else {
            nextNode!.prevNode = null;
            this.head = nextNode;
        }

        this.length--;
        return this;
    }
}

const l = new DoublyLinkedList(6);
l.push(25);
l.push(10)
l.unshift(50).unshift(32)
// l.pop()
l.pop()
l.shift().shift().shift().pop().pop().shift().push(32).unshift(35)
l.printForward();
l.printBackward()
console.dir(l, { dpeth: Infinity });