// n = 5
// k = 9

// 0
// 01
// 0110
// 01101001
// 0110100110010110

// ans: 5th row and 9th column => 1

function kthGrammer(n, k)
{
    if(n==1 && k==1)
    {
        return 0
    }
    let mid = Math.pow(2, n-1) / 2;
    if(k <= mid) {
        return kthGrammer(n-1 , k);
    }
    else{
        if( kthGrammer(n-1 , k-mid) == 1){
            return 0;
        }
        else{
            return 1;
        }
    }
}

console.log(kthGrammer(5, 9))

