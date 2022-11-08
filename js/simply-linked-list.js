class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  insert(index, value) {
    this.checkIndex(index);

    if ((index) => this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
    return this;
  }

  checkIndex(index) {
    if (index > this.length) {
      console.error(`Indice ${inidice} en lista con ${this.length} elementos`);
    }
  }

  getIndex(index) {
    let counter = 1;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    const firstPointer = this.getIndex(index - 1);
    const secondPointer = this.getIndex(index + 1);
    firstPointer.next = secondPointer;
    this.length--;
    return this;
  }
}

let list = new MySinglyLinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(6);
list.append(7);
list.prepend(0);
list.insert(5, 5);
list.remove(4);

console.log(list);