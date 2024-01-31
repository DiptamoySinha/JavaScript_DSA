function deleteMiddleElementOfStack(stack, l)
{
    if(stack.length-1 == Math.floor(l/2))
    {
        stack.pop();
        return;
    }

    
    let lst = stack.pop();

    deleteMiddleElementOfStack(stack, l);

    stack.push(lst);
}

let stack = [1,2,5,6,7,8]

deleteMiddleElementOfStack(stack, stack.length)

console.log(stack)