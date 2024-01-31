function n_to_one(res, n)
{
    if(n==0) return;

    res.push(n);
    console.log(`now result is: ${res}`)
    n_to_one(res, n-1);
    console.log(`finished call for ${n}`);
}

function one_to_n(res, n)
{
    if(n == 0) return;

    one_to_n(res, n-1);

    // console.log(n);
    res.push(n);
}
console.log("------------one_to_n------------")
let res = [];
console.log(one_to_n(res, 5));
console.log(res);

console.log("------------n_to_one------------")
res = [];
console.log(n_to_one(res, 5))
console.log(res);