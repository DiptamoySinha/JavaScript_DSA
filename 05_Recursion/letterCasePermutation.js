function letterCasePermutation(ip, op, res, start)
{
    if(start >= ip.length)
    {
        res.push(op);
        return;
    }

    let choice = ip[start];

    if(!isNaN(parseInt(choice)))
    {
        op += choice;
        letterCasePermutation(ip, op, res, start + 1);
        return;
    }

    let newOp1 = op;
    let newOp2 = op;

    newOp1 += choice.toLowerCase();
    newOp2 += choice.toUpperCase();

    letterCasePermutation(ip, newOp1, res, start + 1);
    letterCasePermutation(ip, newOp2, res, start + 1);
}

let ip = "a1B2";
let op = "";
let res = [];
let start = 0;

letterCasePermutation(ip, op, res, start);

console.log(res);