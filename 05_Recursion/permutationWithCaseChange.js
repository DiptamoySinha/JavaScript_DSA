function permutationWithCaseChange(ip, op, res, start)
{
    if(start >= ip.length)
    {
        res.push(op);
        return;
    }

    let choice = ip[start];

    // let newop1 = op + first.toUpperCase();
    let temp = choice.toUpperCase();
    let newop1 = op + temp;
    let newop2 = op + choice;

    permutationWithCaseChange(ip, newop2, res, start+1);
    permutationWithCaseChange(ip, newop1, res, start+1);

}

let ip = "ab";
let res = [];
let op = "";

permutationWithCaseChange(ip, op, res, 0);
console.log(res);