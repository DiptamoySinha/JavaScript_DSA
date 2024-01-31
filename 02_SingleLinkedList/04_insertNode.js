const { Node, createLinkedList, sizeOfLinkedList } = require("./01_linkedList")
const {traverse} = require("./02_traversal");

let head = createLinkedList(10,20,30,40);

const insertNode = (head, val, indx) => {

    let len = sizeOfLinkedList(head);

    if(indx > len){ 
        console.log(`linked list has only ${len} value. so it can't be inserted`)
        return head;
    }

    const newNode = new Node(val);
    let temp = head;

    if(indx == 1)
    {
        newNode.next = head;
        head = newNode;
    }
    else {
        let counter = 1;
        while(counter < indx - 1)
        {
            temp = temp.next;
            counter++;
        }

        let nextNode = temp.next;
        temp.next = newNode;
        newNode.next = nextNode;
    }

    return head;
}

console.log(`before insert: ${traverse(head)}`);

head = insertNode(head, 500, 10);

console.log(`after insert: ${traverse(head)}`);
