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