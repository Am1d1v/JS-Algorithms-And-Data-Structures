

function addUpTo(n){
    return n * (n + 1) / 2
}
let t1 = performance.now();
addUpTo(3000000);
let t2 = performance.now();

console.log(((t2 - t1)/1000).toFixed(5));