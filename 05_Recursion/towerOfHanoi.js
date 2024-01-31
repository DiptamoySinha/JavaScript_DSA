function towerOfHanoi(n, from, to, helper, count)
{
    count[0] = count[0] + 1;

    if(n === 1)
    {
        console.log(`move 1 plate from ${from} -> ${to}`);
        return;
    }

    towerOfHanoi(n-1, from, helper, to, count);
    console.log(`move ${n} plate from ${from} -> ${to}`);
    towerOfHanoi(n-1, helper, to, from, count);
}

let count = [0]
towerOfHanoi(64, 'A', 'B', 'C', count)
console.log(count[0])