/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const N = process.env.n;

function wait(n) {
    
    // returns a promise
    return new Promise((res, rej) => {

        setTimeout(res, n*(1000));
    })
}

let p = wait(N);
p.then(() => {
    console.log(`${N} seconds have passed !`);
})

module.exports = wait;
