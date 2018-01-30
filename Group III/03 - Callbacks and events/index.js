document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("create");
    let result = document.getElementById("result");

    button.addEventListener("click", () => {
        let counter = document.getElementById("counter").valueAsNumber;
        result.innerHTML = "";
        for (let index = 0; index < counter; index++) {
            let dugme = document.createElement("button");
            dugme.innerHTML = `Button #${index+1}`;
            dugme.addEventListener("click", () => {
                console.log(`I'm button #${index+1} and I have been clicked`);
            });

            // dugme.addEventListener("click", ((index)=> () => {
            //     console.log(`I'm button #${index+1} and I have been clicked`);
            // })(index));
            result.appendChild(dugme);
        }
    });
});


/**
 * 1. Send user/ pass,  recieve userData // Authentication
 * 2. Send userData, imageData, recieve permission // Authorization
 * 3. Send userData, imageData, write to log // Auditing
 * 4. Send userData, imageData, timestamp, display a blue thumb
 */

let userData = login(username, password);
let isAllowed = getPermission(userData, imageData);
if (isAllowed) {
    writeLog(userData, imageData, timestamp);
    setLike(userData, imageData, timestamp);
    // update ui
} else {
    writeFailLog(userData, imageData, timestamp);
    // show error;
}


login(username, password, function (userData) {
    getPermission(userData, imageData, function (isAllowed) {
        if (isAllowed) {
            writeLog(userData, imageData, timestamp, function () {
                setLike(userData, imageData, timestamp, function () {
                    // update ui
                });
            });
        } else {
            writeFailLog(userData, imageData, timestamp, function () {
                // show error;
            });
        }
    });
}, function (error) {
    // ... 
});


login(username, password)
    .then(userData => getPermission(userData, imageData))
    .then(isAllowed => {
        if (isAllowed) {
            return writeLog(userData, imageData, timestamp);
        } else {
            return writeFailLog(userData, imageData, timestamp);
        }
    })
    .then(() => setLike(userData, imageData, timestamp))
    .then(() => /*update ui*/)
    .catch((error) => /* show error*/)
