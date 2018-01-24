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
// lowPromise
//     .then(value => console.log(`Successfully resolved with ${value}`))
//     .catch(value => console.log(`Promise reject with ${value}`));

// let highPromise = getPromise(range);
// highPromise
//     .then(value => console.log(`Successfully resolved with ${value}`))
//     .catch(value => console.log(`Promise reject with ${value}`));


function runPromises() {
    let range = 30;
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
    let range = 30;
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
        value = await getPromise(Math.floor(Math.random() * range));
    }
    catch (value) {
        console.log(`Promise reject with ${value}`);
    }
}

//runPromisesAsync();


function delay(ms){
    return new Promise((resolve, reject)=>setTimeout(() => resolve(), ms));
}

async function syncAsync(){
    console.log("one");
    await delay(1000);
    console.log("two");
}
//syncAsync();

async function syncAsync2(){
    let numnames = [
        "zero", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten"
    ];

    for (let index = 0; index < numnames.length; index++) {
        const element = numnames[index];
        console.log(element);
        await delay(1000);
    }
};

syncAsync2();






