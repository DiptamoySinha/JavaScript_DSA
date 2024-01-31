const { Node, createLinkedList } = require("./01_linkedList")
const head = createLinkedList(10,20,30,40)

// traversal
const traverse = function(head)
{
    let list = []
    let temp = head;
    while(temp)
    {
        list.push(temp.value);
        temp = temp.next;
    }

    return list;
}

module.exports = {traverse};
