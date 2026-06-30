function fibonacci(n=2, prev=0, curr=1, arr=[0,1]){
    if (arr.length === n) {
        return arr;
    }

    const next = prev + curr;
    arr.push(next);
    return fibonacci(n, curr, next, arr);
}

module.exports = fibonacci;