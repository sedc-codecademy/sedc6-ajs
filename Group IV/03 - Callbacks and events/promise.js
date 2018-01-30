function getPromise(value) {
    let promised = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (value > 5) {
                resolve(value);
            } else {
                reject(value);
            }
        }, 1000 + Math.random() * 3000);
    });
    return promised;
};

// let lowPromise = getPromise(3);
// let highPromise = getPromise(10);

// function resolvePromise(promise) {
//     promise
//         .then(value => console.log(`Promise fulfilled with value ${value}`))
//         .catch(value => console.log(`Broken promise with value ${value}`))
// }

// resolvePromise(lowPromise);
// resolvePromise(highPromise);

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

//runPromises();


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


async function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

async function oneTwo() {
    console.log("one");
    await delay(1000);
    console.log("two");
    console.log("three");
}

oneTwo();
console.log("LASTEST");
