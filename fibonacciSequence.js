// Iterative Fibonacci
function interativeFib(index){
    let sequence = [0,1,1];
    if(index < 3) return 1;
    for(let i = 2; i < index; i++){
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence[index]
}

console.log(interativeFib(21))

//Recursive Fibonacci
function recursiveFib(index = 1){
    if(index < 3) return 1;
    return recursiveFib(index - 1) + recursiveFib(index - 2);
}

console.log(recursiveFib());

//Memoized Recursive Fibonacci

function memoizedFib(index = 1, cache = [0,1,1]){
    if(cache[index]) return cache[index];
    if(index < 3) return 1;
    return memoizedFib(index - 1, cache) + memoizedFib(index - 2, cache);
}

console.log(memoizedFib())