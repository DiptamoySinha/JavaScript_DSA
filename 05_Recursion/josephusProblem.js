function josephus(n, k, array, currIndex)
{
    if(n === 1)
    {
        return array[0];
    }

    let kill = (currIndex + k)%n;

    array.splice(kill, 1);

    return josephus(n-1, k, array, kill);
}

 let n = 40;
let k = 7;
let currIndex = 0;
k -= 1;
let array = new Array(40);
for(let i = 0; i< n; i++)
{
    array[i] = i+1;
}

console.log(josephus(n, k, array, currIndex))
