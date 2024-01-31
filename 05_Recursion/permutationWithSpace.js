function permutationWithSpace(ip, op, res, start)
{
    if(start === 0)
    {
        op += ip[start];
        permutationWithSpace(ip, op, res, start + 1);
        return;
    }

    if(start >= ip.length)
    {
        res.push(op);
        return;
    }

    newOp1 = op + ip[start]
    permutationWithSpace(ip, newOp1, res, start + 1);

    newOp2 = op + "_" + ip[start];
    permutationWithSpace(ip, newOp2, res, start + 1);
}

let ip = "ABC"
let res = []
permutationWithSpace(ip, "", res, 0);
console.log(res);