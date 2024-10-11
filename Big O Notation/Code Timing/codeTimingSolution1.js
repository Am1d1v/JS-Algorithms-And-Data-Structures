
function addUpTo(n){
    let initNumber = 0;

    for(let i = 1; i <= n; i++){
        initNumber += i;
    }

    return initNumber;
}

let t1 = performance.now();
addUpTo(3000000);
let t2 = performance.now();


console.log(((t2 - t1)/1000).toFixed(5));