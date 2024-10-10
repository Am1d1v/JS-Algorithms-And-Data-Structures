
let t1 = performance.now();
function addUpTo(n){
    let initNumber = 0;

    for(let i = 1; i <= n; i++){
        initNumber += i;
    }

    return initNumber;
}
let t2 = performance.now();

console.log(addUpTo(3000000), t2 - t1);