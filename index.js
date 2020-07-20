const func1 = async() => {
    setTimeout(()=>{console.log('func 1...')}, 1000);
}

const func2 = async() => {
    setTimeout(()=>{console.log('func 2...')}, 1000);

}

const sleep = ms => {
    console.log(`Sleeping for ${ms/1000} seconds`);
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

const main = async() => {
    try {
    await func1();
    // Sleeping for a long long time
    console.log('Before Sleep');
    await sleep(2000000);
    console.log('After Sleep')
    await func2();
    return 'success';
    } catch(err) {
        console.log(err);
        return 'error'
    }
}

module.exports = main;