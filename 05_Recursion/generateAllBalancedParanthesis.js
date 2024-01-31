function generateAllBalancedParanthesis(ip, op, res)
{
    if(ip === 0)
    {
        if(isBalanced([...op]))
        {
            res.push(op.join(''));
        }
        return;
    }

    let newOp1 = [...op];
    let newOp2 = [...op];

    newOp1.push(')');
    newOp2.push('(');

    generateAllBalancedParanthesis(ip-1, newOp1, res);
    generateAllBalancedParanthesis(ip-1, newOp2, res);
}

function isBalanced(list)
{
    let stack = [];
    for(let i=0; i< list.length; i++)
    {

        let num = list[i];
        if(num === '(')
        {
            stack.push(num);
        }
        else{
            if(stack[stack.length - 1] === '(')
            {
                stack.pop();
            }
            else{
                return false;
            }
        }
    }

    if(stack.length > 0) return false;
    return true;
}

function BalancedParanthesis(open, close, op, res)
{
    if(open === 0 && close ===0)
    {
        res.push(op);
        return;
    }

    let newOp1 = op;
    let newOp2 = op;

    if(open !== 0)
    {
        newOp1 += '(';
        BalancedParanthesis(open-1, close, newOp1, res);
    }

    if(open < close)
    {
        newOp2 += ')';
        BalancedParanthesis(open, close-1, newOp2, res);
    }
}

{
let n = 3; 
let ip = n * 2;
let op = ['('];
let res = [];
let start = 0;

// generateAllBalancedParanthesis(ip-1, op, res);
// console.log(res);
}

{
    let n = 3;
    let open = n;
    let close = n;
    let op = "";
    let res = [];

    op += "(";
    open -= 1;

    BalancedParanthesis(open, close, op, res);
    console.log(res)
}

