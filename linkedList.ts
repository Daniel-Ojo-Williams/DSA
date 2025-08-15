class ListNode<T> {
    next: ListNode<T> | null;
    value: T;
    constructor(value: T, next = null) {
        this.next = next;
        this.value = value;
    }
}

class LinkedList<T> {
    private head: ListNode<T>;
    private tail: ListNode<T>;
    private length: number;
    constructor(value: T) {
        this.head = new ListNode(value)
        this.tail = this.head;
        this.length = 1;
    }

    push(value: T) {
        const newNode = new ListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
}