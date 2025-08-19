class ListNode<T> {
    value: T;
    next: ListNode<T> | null;
    constructor(value: T, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList<T> {
    private head: ListNode<T> | null;
    private tail: ListNode<T> | null;
    private length: number;
    constructor(value: T) {
        this.head = new ListNode(value)
        this.tail = this.head;
        this.length = 1;
    }

    push(value: T) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
            return;
        }
        this.tail!.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            return;
        }

        let temp = this.head;
        let prev = this.head;

        while (temp.next !== null) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length--;
    }

    toString() {
        return "4"
    }

    unshift(value: T) {
        const newNode = new ListNode(value);
        if (this.head) {
            newNode.next = this.head;
            this.length++
        } else {
            this.length = 1
        }
        this.head = newNode;
        return this;
    }

    shift() {
        if (!this.head) {
            return this;
        }
        const temp = this.head;
        this.head = this.head.next
        temp.next = null;
        this.length--;
        return this;
    }

    get(index: number) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode) {
            if (index === currentIndex) {
                return currentNode;
            }

            currentNode = currentNode!.next
            currentIndex++
        }

        return null;
    }

    set(index: number, value: T) {
        const node = this.get(index);
        if (!node) return null;
        node.value = value;
        return node;
    }

    insert(index: number, value: T) {
        if (index > this.length) throw RangeError("Index out of bound")

        if (index === 0) {
            return this.unshift(value);
        }

        if (index === this.length) {
            return this.push(value);
        }

        const newNode = new ListNode(value);
        const prevNode = this.get(index - 1)
        if (prevNode) {
            if (prevNode.next) newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++
        }
    }

    size(){
        return this.length;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


}

const li = new LinkedList(5);
li.pop();
li.push(42)
li.push(41)
li.push(43)
li.unshift(3).unshift(2).shift().pop()
// console.dir(li, { depth: null })
li.insert(3,12)
li.insert(3,13)

console.dir(li, { depth: null })
li.clear()
console.dir(li, { depth: null })

