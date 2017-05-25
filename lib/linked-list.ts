import {Node} from './node';
import {compareData} from "./compare";

export class LinkedList<T> {

    private _head: Node<T> = null;
    private _tail: Node<T> = null;
    private _count: number = 0;

    constructor() {
    }

    get first(): Node<T> {
        return this._head;
    }

    get last(): Node<T> {
        return this._tail;
    }

    get length(): number {
        return this._count;
    }

    public push(data: T) {
        let node: Node<T> = new Node(data);

        if (this._head === null) {
            this._head = node;
        } else {
            this._tail.next = node;
        }

        this._tail = node;
        this._count++;
    }


    public pushAsFirst(data: T) {
        let node: Node<T> = new Node(data);

        node.next = this._head;
        this._head = node;
        if (this._count === 0) {
            this._tail = this._head;
        }

        this._count++;
    }

    public remove(data: T) {
        let current: Node<T> = this._head;
        let previous: Node<T> = null;

        while (current !== null) {

            if (compareData(current.data, data)) {

                if (previous === null) {
                    this._head = this._head.next;

                    if (this._head === null) {
                        this._tail = null;
                    }

                } else {
                    previous.next = current.next;

                    if (current.next === null) {
                        this._tail = previous;
                    }

                }

                this._count--;
                return true;
            }

            previous = current;
            current = current.next;
        }

        return false;
    }

    public contains(data: T) {
        let current: Node<T> = this._head;

        while (current !== null) {
            if (compareData(current.data, data)) {
                return true;
            }

            current = current.next;
        }
        return false;
    }

    public getByIndex(index: number) {
        if (typeof index !== "number") throw new TypeError("Index should be a number");
        if (index > this._count || index < 0) return null;

        let counter = 0;
        let current: Node<T> = this._head;

        while (counter < index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    public forEach(callback: (T) => void): void {
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


}