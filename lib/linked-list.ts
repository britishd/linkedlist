import {Node} from './node';
import {compareData} from "./compare";

export class LinkedList<T> {

    private head: Node<T> = null;
    private tail: Node<T> = null;
    private count: number = 0;

    constructor() {
    }

    public add(data: T) {
        let node: Node<T> = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.count++;
    }


    public addAsFirst(data: T) {
        let node: Node<T> = new Node(data);

        node.next = this.head;
        this.head = node;
        if (this.count === 0) {
            this.tail = this.head;
        }

        this.count++;

    }

    public remove(data: T) {
        let current: Node<T> = this.head;
        let previous: Node<T> = null;

        while (current !== null) {

            if (compareData(current.data, data)) {

                if (previous === null) {
                    this.head = this.head.next;

                    if (this.head === null) {
                        this.tail = null;
                    }

                } else {
                    previous.next = current.next;

                    if (current.next === null) {
                        this.tail = previous;
                    }

                }

                this.count--;
                return true;
            }

            previous = current;
            current = current.next;
        }

        return false;
    }

    public contains(data: T) {
        let current: Node<T> = this.head;

        while (current !== null) {
            if (compareData(current.data, data)) {
                return true;
            }

            current = current.next;
        }
        return false;
    }

    public forEach() {
        let current: Node<T> = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    public getHead() {
        return this.head;
    }

}