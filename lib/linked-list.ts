import {Node} from './node';

export class LinkedList<T> {

    private _head: Node<T> = null;
    private _tail: Node<T> = null;
    private _count: number = 0;

    constructor() {
    }

    get first(): T {
        return this._head.data;
    }

    get last(): T {
        return this._tail.data;
    }

    get length(): number {
        return this._count;
    }

    /**
     * Work as Javascript`s Array.push() method;
     */
    public push(data: T): void {
        let node: Node<T> = new Node(data);

        if (this._head === null) {
            this._head = node;
        } else {
            this._tail.next = node;
        }

        this._tail = node;
        this._count++;
    }

    /**
     * Work as Javascript`s Array.unshift() method;
     */
    public unshift(data: T): void {
        let node: Node<T> = new Node(data);

        node.next = this._head;
        this._head = node;
        if (this._count === 0) {
            this._tail = this._head;
        }

        this._count++;
    }

    /**
     * Work as Javascript`s Array.shift() method;
     * @returns {T}
     */
    public shift(): T {
        if (this._head === null) return null;

        let previous: Node<T> = this._head;
        this._head = this._head.next;
        this._count--;
        return previous.data;
    }

    /**
     * Work as Javascript`s Array.pop() method;
     * @returns {T}
     */
    public pop(): T {
        if (this._head === null) return null;

        let beforeTail: Node<T> = this.getLastButOne(),
            last: T = null;

        if (beforeTail === null) {
            last = this._head.data;
            this._head = null;
        } else {
            last = this._tail.data;
            beforeTail.next = null;
            this._tail = beforeTail;
        }


        this._count--;
        return last
    }

    public insert(data: T, index: number): void {

        if (index === 0) {
            this.unshift(data);
            return;
        }

        if (index >= this._count) {
            this.push(data);
            return;
        }

        let
            node: Node<T> = new Node(data),
            curr: Node<T> = this._head,
            prev: Node<T> = this._head,
            counter: number = 0;

        while (counter < index) {
            prev = curr;
            curr = curr.next;
            counter++;
        }

        node.next = prev.next;
        prev.next = node;
        this._count++;
    }

    /**
     * Remove Node by input data.
     * Compares data with all Nodes until found same and then removes it from list
     * @param index : number
     * @returns {boolean}
     */
    public remove(index: number): void {

        if (index === 0) {
            this.shift();
            return;
        }

        if (index > this._count) {
            this.pop();
            return;
        }

        let current: Node<T> = this._head,
            previous: Node<T> = null,
            counter: number = 0;

        while (counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }

        previous.next = current.next;
        this._count--;
    }

    /**
     * Get data by input index
     *
     * @param index
     * @returns { data : T}
     *
     */
    public getByIndex(index: number): T {
        if (typeof index !== "number") throw new TypeError("Index should be a number");
        if (index > this._count || index < 0) return null;
        return this.findNodeByIndex(index).data;
    }

    /**
     * Loop through whole list and call callback.
     * @param callback
     *
     * Example:
     *
     * let list = new LinkedList()
     * list.forEach((data : T) => console.log(data))
     *
     */
    public forEach(callback: (T) => void): void {

        if (this._count <= 0) return null;

        let current: Node<T> = this._head;

        while (current !== null) {
            callback(current.data);
            current = current.next;
        }
    }

    /*
     * Generator of LinkedList. Can iterate by values
     *
     * Example:
     *
     * let list = new LinkedList()
     * let generator = linkedList.iterator();
     *
     * for (let person of generator) {
     *   console.log(person)
     * }
     *
     * */
    public *generator(): IterableIterator<any> {
        let current: Node<T> = this._head;

        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }


    /**
     * Helper.
     *
     * Loop through all item until found item by index
     *
     * @param index : number
     * @returns {Node<T>}
     */
    private findNodeByIndex(index: number): Node<T> {
        let counter = 0,
            current: Node<T> = this._head;

        while (counter < index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    /**
     * Take node in front of tail
     * @returns {Node<T>}
     */
    private getLastButOne(): Node<T> {
        let node: Node<T> = this._head;

        if (node === null || node.next === null) {
            return null;
        }

        while (node.next.next) {
            node = node.next;
        }

        return node;
    }


}