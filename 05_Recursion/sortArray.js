
function sort(arr)
{
    // base case
    if(arr.length == 1)
    {
        return;
    }

    // hypothesis

    let last = arr[arr.length-1];
    arr.splice(arr.length-1, 1);
    sort(arr);

    // induction
    console.log(`now last is : ${last}`);
    console.log(`current arr: ${arr}`);
    console.log(`current arr length: ${arr.length}`);
    insert(arr, last, arr.length);
    console.log(`after insert arr: ${arr}`);
}

function insert(arr, num, n)
{
    let last = arr[n-1];
    // console.log(n)

    if(isEmpty(arr) || last<num)
    {
        arr.push(num);
        return;
    }
    // hypothesis
    arr.splice(n-1, 1);
    insert(arr, num, n-1);

    // induction
    arr.push(last);
    // console.log(`called for ${last} arr ${arr}`);
}

function isEmpty(arr)
{
    return arr.length < 1;
}


let arr = [1,5,0,2];
sort(arr);
console.log(arr);

