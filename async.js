
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function functionA() {
    console.log("a ya geldi");
    await timeout(1000);
    return 100;
}

async function functionB() {
    console.log("b ye geldi");
    await timeout(1500);
    console.log("b den gitti");
    return 20;
}

async function sum(a, b) {
    return a + b;

}

async function topla() {
    const a = await functionA();
    const b = await functionB();
    const obj = { a, b, toplam: sum(a, b) }

    return obj;
}


topla().then(q => { console.log(q) })

//functionA().then(res => { console.log(res) }).then(functionB).then(functionB)
