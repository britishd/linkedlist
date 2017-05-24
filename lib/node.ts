export class Node<T> {

    private _data: T = null;
    private _next: Node<T> = null;

    constructor(data: T) {
        this._data = data;
    }

    get data(): T {
        return this._data;
    }

    set data(data: T) {
        this._data = data;
    }

    get next(): Node<T> {
        return this._next;
    }

    set next(next: Node<T>) {
        this._next = next;
    }


}