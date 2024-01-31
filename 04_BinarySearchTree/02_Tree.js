const Node = require("./01_Node");

class Tree{

    constructor(arr)
    {
        this.arr = arr;
        this.root = null;
    }

    makeTree()
    {
        for(let val of this.arr)
        {
            let newNode = new Node(val);
            if(this.root == null) 
            {
                this.root = newNode;
            }
            else{
                this.construcTree(this.root, newNode);
            }
        }
    }

    construcTree(temp, node)
    {
        if(temp === null)
        {
            return node;
        }
        if(temp.val < node.val)
        {
            // if(temp.right === null) {
            //     temp.right = node
            // }
            // else{
            //     this.construcTree(temp.right, node);
            // }
            temp.right = this.construcTree(temp.right, node);
        }
        else
        {
            // if(temp.left === null) {
            //     temp.left = node
            // }
            // else{
            //     this.construcTree(temp.left, node);
            // }
            temp.left = this.construcTree(temp.left, node);
        }

        return temp;
        
    }
}


const t = new Tree([10,5,15,20]);
t.makeTree();
console.log(JSON.stringify(t.root))