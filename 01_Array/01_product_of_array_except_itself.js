const productOfArrayExceptSelf = (arr) => {
    let n = arr.length;
    let res = [];
    for(let i=0;i<n;i++)
    {
        res.push(1);
    }

    let currProduct = 1;
    for(let i=1;i<n;i++)
    {
        currProduct = arr[i-1] * currProduct;
        res[i] = currProduct * res[i];
    }

    currProduct = 1;
    for(let i=n-2;i>=0;i--)
    {
        currProduct = arr[i+1] * currProduct;
        res[i] = currProduct * res[i];
    }

    return res;

}

console.log(productOfArrayExceptSelf([1,2,3,4]))