function Node(val)
{
    this.val = val;
    this.left = null;
    this.right = null;

    toString()
    {
        return {left: this.left, val: this.val, right: this.right};
    }
}

module.exports = Node;