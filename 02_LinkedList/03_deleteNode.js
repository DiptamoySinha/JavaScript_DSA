const { Node, createLinkedList } = require("./01_linkedList")
const {traverse} = require("./02_traversal");

// delete Node from Linked list by passing the value of the node
const deleteNode = function(head, val)
{
    while(head?.value === val)
    {
        head = head.next;
    }

    let prev = head;
    let curr = head?.next;

    while(curr)
    {
        if(curr.value === val){
            prev.next = curr.next;
        }
        else
        {
            prev = prev.next;
        }
        curr = curr.next;
    }

    return head;
}

// delete Node from Linked list by passing the index
const deleteNodeByIndex = function(head, indx)
{
    let temp = head;
    if(indx == 0)
    {
        temp = temp.next;
        return temp;
    }

    let counter = 0;
    while(counter < indx-1)
    {
        temp = temp.next;
        counter++;
    }

    let nextNode = temp.next.next;
    temp.next = nextNode;

    return head;
}

let head = createLinkedList(10,20,30,40)

console.log(`before delete: ${traverse(head)} `)

// head = deleteNode(head, 20);
head = deleteNodeByIndex(head, 0);

console.log(`after delete: ${traverse(head)} `)
