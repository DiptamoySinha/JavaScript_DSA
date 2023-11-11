class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null
    }
}

const createLinkedList = function(...arr)
{
    const head = new Node(arr[0]);
    let temp = head;
    for(let i=1; i<arr.length;i++)
    {
        temp.next = new Node(arr[i]);
        temp = temp.next;
    } 

    return head;
}

const sizeOfLinkedList = (head) => {
    let len = 0;
    while(head)
    {
        head = head.next;
        len++;
    }

    return len;
}



module.exports = {Node, createLinkedList, sizeOfLinkedList};


