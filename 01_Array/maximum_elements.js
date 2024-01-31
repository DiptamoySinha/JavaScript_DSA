function maximumElements(arr)
{
    const map = new Map();

    let maxCount = 0;
    for(let n of arr)
    {
        if(map.has(n))
        {
            map.set(n, map.get(n) + 1);
        }
        else{
            map.set(n, 1)
        }
        if(map.get(n) > maxCount) maxCount = map.get(n);
    }

    for(let m of map.keys())
    {
        if(map.get(m) == maxCount) return m;
    }
}

console.log(maximumElements([3,1,2,4,3,2,1,3]));
console.log();