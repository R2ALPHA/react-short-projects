// console.log("beginning of class");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode; // The current tail next is poiniting to new Node
        this.tail = newNode;  // Now the current tail is update to new Node
    }

    [Symbol.iterator]() {
        let node = this.head;
        return {
            next: () => {
                if (!node) return { done: true };
                const value = node.data;
                node = node.next;
                return {
                    done: false,
                    value
                };
            }
        }
    }
}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');

for (l of list) {
    console.log(l);
}
