import {LinkedList} from "./lib/linked-list";

class Person {

    public name: string = '';
    public age: number = null;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

let linkedList = new LinkedList(),
    vlad = new Person("Vlad", 24),
    nastya = new Person("Nastya", 24),
    sasha = new Person("Sasha", 39),
    andrey = new Person("Andrey", 39),
    dima = new Person("Dima", 39),
    sam = new Person("Sam", 25);


linkedList.push(vlad);
linkedList.push(nastya);
linkedList.push(sasha);
linkedList.push(andrey);
linkedList.push(dima);

linkedList.forEach((person: Person) => console.log(person));

linkedList.insert(sam, 3);

linkedList.forEach((person: Person) => console.log(person));

linkedList.remove(1);
console.log("qkflkqbfjklqw");

linkedList.forEach((person: Person) => console.log(person));