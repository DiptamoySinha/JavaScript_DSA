function printNbitBinary(n,one, zero, op, res)
{
    if(n === 0)
    {
        if(one >= zero)
        {
            res.push(op);
        }
        return;
    }

    let newOp1 = op;
    let newOp2 = op;

    newOp1 += '1';
    printNbitBinary(n-1,one+1, zero, newOp1, res);

    if(one > zero)
    {
        newOp2 += '0';    
        printNbitBinary(n-1,one, zero+1, newOp2, res);
    }
}

let n = 3;
let one = 0;
let zero = 0;
let op = "";
let res = [];

printNbitBinary(n,one, zero, op, res)
console.log(res)