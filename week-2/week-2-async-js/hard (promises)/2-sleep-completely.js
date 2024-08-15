/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

ms = process.env.ms || 1000; // 1000 ms by default.

const customBusyWait = (res, ms) => {

    const startTime = Date.now();
    while(1){

        const currTime = Date.now();
        if(currTime - startTime > ms){
            break;
        }
    }

    res(); // execute res after busy waiting.
}

function sleep(milliseconds) {

    return new Promise((res, rej) => {

        customBusyWait(res, milliseconds);
    })
}

// call the promise 
// sleep(ms).then(() => {
//     console.log("busy wait completed !");
// })

module.exports = sleep;
