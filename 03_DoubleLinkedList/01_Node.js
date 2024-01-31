class Node{

    constructor(value)
    {
        this.value = value;
        this.prev = null;
        this.next = null;
    }

    toString()
    {
        return this.value;
    }
}

class DoubleLinkedList
{
    head = null;
    tail = null;

    add(value) {
        let newNode = new Node(value);
        let temp = this.head;
        if(temp == null)
        {
            this.head = newNode;
            return;
        }
        while(temp.next)
        {
            temp = temp.next;
        }

        temp.next = newNode;
        newNode.prev = temp;
        this.tail = newNode;
    }

    addFirst(value)
    {
        let newNode = new Node(value);
        newNode.next = this.head;
        newNode.prev = null;
        if(this.head != null) this.head.prev = newNode;
        this.head = newNode;
    }

    addIndex(value, indx)
    {
        let temp = this.head;
        let newNode = new Node(value);
        let counter = 1
        while(counter < indx-1)
        {
            temp = temp.next;
            counter++;
        }

        let nextNode = temp.next;
        temp.next = newNode;
        newNode.prev = temp;
        newNode.next = nextNode;
        nextNode.prev = newNode;
    }

    display()
    {
        let arr = [];
        let temp = this.head;
        while(temp)
        {
            arr.push(temp.value);
            temp = temp.next;
        }
        console.log(arr);
    }

    displayReverse()
    {
        let arr = [];
        let temp = this.tail;
        while(temp)
        {
            arr.push(temp.value);
            temp = temp.prev;
        }
        console.log(arr);
    }
}

const dll = new DoubleLinkedList();
dll.add(10);
dll.add(20);
dll.add(30);
dll.addFirst(5);
dll.addIndex(15, 3)

dll.display();
dll.displayReverse();
console.log(`head : ${dll.head}`);
console.log(`head : ${dll.tail}`);
