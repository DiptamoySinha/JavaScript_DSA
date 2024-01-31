const { Node, createLinkedList, sizeOfLinkedList } = require("./01_linkedList")
const {traverse} = require("./02_traversal");

const head = createLinkedList(10,20,30,40,50,60,70,80,90);

const searchNode = (head, val) => {
    let temp = head;
    let indx = 1;
    while(temp)
    {
        if(temp.value == val) 
        {
            console.log(`node present at ${indx} location`);
        } 
        temp = temp.next;
        indx++;
    }
}

console.log(traverse(head));

searchNode(head, 50);