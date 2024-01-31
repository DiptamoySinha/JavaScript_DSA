// const str = "3322255"

const fun = (str) => {
    let res = ""
    let count = 1;
    for(let i=0;i<str.length;i++)
    {
        if(str[i] === str[i+1])
        {
            count++;
        }
        else{
            res = res + count + str[i];
            count = 1;
        }
    }

    return res;
}

var countAndSay = function(n) {
    if(n == 1) return "1"

    let str = "1";
    while(n>1)
    {
        str = fun(str);
        n--;
    }

    return str;
};

console.log(countAndSay(4))