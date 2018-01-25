function getPromise(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value > 10) {
                resolve(value);
            } else {
                reject(value);
            }
        }, Math.floor(Math.random() * 3000));
    });
}

//let highPromise = getPromise(20)

// highPromise
//     .then(value => console.log(`Resolved with value ${value}`))
//     .catch(value => console.log(`Rejected with value ${value}`))

// let lowPromise = getPromise(5);

// lowPromise
//     .then(value => console.log(`Resolved with value ${value}`))
//     .catch(value => console.log(`Rejected with value ${value}`));


function runPromises() {
    let range = 50;
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
        }).catch(value => console.log(`Promise reject with ${value}`));
}

//runPromises();
console.log("NAJDOLU");

async function runPromisesAsync() {
    let range = 50;
    try {
        let value = await getPromise(Math.floor(Math.random() * range));;
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
    }
    catch (error) {
        console.log(`Promise reject with ${error}`);
    }

}

//runPromisesAsync();
console.log("PODOLU OD NAJDOLU");


function delay(ms){
    return new Promise((resolve, reject)=>setTimeout(() => resolve(), ms));
}

async function syncAsync(){
    console.log("one");
    await delay(1000);
    console.log("two");
}

syncAsync();

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