let ipStr = "abc"

function giveSubset(arr,op, ipStr, start)
{
    if(start>=ipStr.length){
        arr.push(op);
        return arr;
    }

    // decision 1 => I will not include the choice(ipStr[choice]) to op(output)
    arr = giveSubset(arr,op, ipStr, start+1);

    // decision 2 => I will include the choice(ipStr[choice]) to op(output)
    op = op + ipStr[start];
    arr = giveSubset(arr,op, ipStr, start+1);

    return arr;
}


console.log(giveSubset([],"",ipStr, 0));