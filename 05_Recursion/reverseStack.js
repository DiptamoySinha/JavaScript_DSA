function reverseStack(stack)
{
    if(stack.length === 1)
    {
        return;
    }

    let lastValue = stack.pop();

    reverseStack(stack);

    insertAtLast(stack, lastValue);
}

function insertAtLast(stack, value)
{
    if(stack.length < 1)
    {
        stack.push(value);
        return;
    }

    let last = stack.pop();

    insertAtLast(stack, value);

    stack.push(last);
}

let stack = [2,5,7,1,8]
reverseStack(stack);
console.log(stack);