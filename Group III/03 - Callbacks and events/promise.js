function getPromise(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value > 5) {
                resolve(value);
            } else {
                reject(value);
            }
        }, 1000 + Math.random() * 3000);
    });
}

function printPromise(promise) {
    promise
        .then(value => console.log(`Promise resolved with ${value}`))
        .catch(value => console.log(`Broken promise with ${value}`));
}

// let highPromise = getPromise(12);
// let lowPromise = getPromise(3);

// printPromise(highPromise);
// printPromise(lowPromise);

function runPromises() {
    let range = 20;
    let promise = getPromise(Math.floor(Math.random() * range));

    promise
        .then(value => {
            console.log(`Successfully resolved 1 with ${value}`);
            return getPromise(Math.floor(Math.random() * range));
        }).then(value => {
            console.log(`Successfully resolved 2 with ${value}`);
            return getPromise(Math.floor(Math.random() * range));
        }).then(value => {
            console.log(`Successfully resolved 3 with ${value}`);
            return getPromise(Math.floor(Math.random() * range));
        }).then(value => {
            console.log(`Successfully resolved 4 with ${value}`);
            return getPromise(Math.floor(Math.random() * range));
        }).then(value => {
            console.log(`Successfully resolved 5 with ${value}`);
            return getPromise(Math.floor(Math.random() * range));
        }).then(value => {
            console.log(`Successfully resolved 6 with ${value}`);
            return getPromise(Math.floor(Math.random() * range));
        }).then(value => {
            console.log(`Successfully resolved 7 with ${value}`);
            return getPromise(Math.floor(Math.random() * range));
        }).then(value => {
            console.log(`Successfully resolved 8 with ${value}`);
            return getPromise(Math.floor(Math.random() * range));
        }).then(value => {
            console.log(`Successfully resolved 9 with ${value}`);
            return getPromise(Math.floor(Math.random() * range));
        }).catch(value => console.log(`Promise reject with ${value}`));
}

// runPromises();

async function runPromisesAsync() {
    let range = 20;
    try {
        let value = await getPromise(Math.floor(Math.random() * range));
        console.log(`Successfully resolved 1 with ${value}`);
        value = await getPromise(Math.floor(Math.random() * range));
        console.log(`Successfully resolved 2 with ${value}`);
        value = await getPromise(Math.floor(Math.random() * range));
        console.log(`Successfully resolved 3 with ${value}`);
        value = await getPromise(Math.floor(Math.random() * range));
        console.log(`Successfully resolved 4 with ${value}`);
        value = await getPromise(Math.floor(Math.random() * range));
        console.log(`Successfully resolved 5 with ${value}`);
        value = await getPromise(Math.floor(Math.random() * range));
        console.log(`Successfully resolved 6 with ${value}`);
        value = await getPromise(Math.floor(Math.random() * range));
        console.log(`Successfully resolved 7 with ${value}`);
        value = await getPromise(Math.floor(Math.random() * range));
        console.log(`Successfully resolved 8 with ${value}`);
        value = await getPromise(Math.floor(Math.random() * range));
        console.log(`Successfully resolved 9 with ${value}`);
    } catch (error) {
        console.log(`Promise reject with ${error}`);
    }

}

//runPromisesAsync();


function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}


async function likeCSharp(){
    console.log("One");
    await delay(2000);
    console.log("Two");
    console.log("Three");     
}

likeCSharp();
