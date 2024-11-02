

function first(){
    return 'First';
}

function second(){
    let second = third();
    return `Second: ${second}`;
}

function third(){
    let items = ['1st', '2nd', '3rd'];
    return items[Math.floor(Math.random() * items.length)];
}

function log(){
    first();
    second();
    console.log('Log');
}
log();