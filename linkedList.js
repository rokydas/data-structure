class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(value) {
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while(current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const humanBond = new LinkedList(head);
humanBond.add(27);
humanBond.add(28);
humanBond.add(274);
humanBond.add(23);
console.log(JSON.stringify(humanBond));