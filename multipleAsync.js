async function functionA() {
    setTimeout(() => {
        return 10;
    }, 1000)

}

async function functionB() {
    return 20;
}

async function sum(a, b) {
    return a + b;
}


async function executeAsyncTask() {
    const valueA = await functionA()
    console.log(valueA);
    const valueB = await functionB()
    console.log(valueB);
}

executeAsyncTask();

//module.exports = { functionA, functionB }