// let ip = "abc"
let ip = [1,2,2]

function allSubsets(ip, op, res, start, set)
{
    // base
    if(start >= ip.length)
    {        
        if(!set.has([...op].sort().toString()))
        {
            set.add([...op].sort().toString());
            res.push(op);
        }
        return;
    }

    // hypothesis
    let choice = ip[start]

    allSubsets(ip, op, res, start+1, set);

    newOp2 = [...op]
    newOp2.push(choice)

    allSubsets(ip, newOp2, res, start+1, set)
}

let res = []
// let set = new Set();
// allSubsets(ip, [], res, 0, set);
// console.log(res)
// console.log(set)


let list = [[1], [1], [1, 2], [2,1]]
let set = new Set();

let newList = list.filter( e => {
    let newA = [...e].sort();
    console.log(newA)
    let isUnique = !set.has(newA.toString());
    console.log(isUnique)
    if(isUnique)
    {
        set.add(newA.toString());
    }

    return isUnique
})

console.log(newList)
// let arr = [2,1,4];
// let arr1 = [...arr].sort();
// console.log(arr1)