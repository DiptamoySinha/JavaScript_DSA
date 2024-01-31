const { createLinkedList } = require("./01_linkedList");
const { traverse } = require("./02_traversal");

const head = createLinkedList(1,2,2,1);

const isPalindrom = function(head)
{
    let temp = head;
    console.log(traverse(temp))

    let temp1 = head;
    let prev = reverse(temp1);

    console.log(traverse(head))
    console.log(traverse(prev))

    while(prev != null && temp != null && prev.val == temp.val)
    {
        prev = prev.next;
        temp = temp.next;
    }

    if(prev != null)
    {
        return false;
    }

    return true;
}

const reverse = function(head)
{
    let prev = null;
    let curr = head;

    while(curr != null)
    {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
}


console.log(isPalindrom(head));