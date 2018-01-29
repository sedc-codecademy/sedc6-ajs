document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("create").addEventListener("click", () => {
        let counter = document.getElementById("counter").valueAsNumber;
        let result = document.getElementById("result");
        result.innerHTML = "";
        for (let index = 0; index < counter; index++) {
            let button = document.createElement("button");
            button.innerHTML = `Button #${index+1}`;
            button.addEventListener("click", () => {
                console.log(`Button #${index+1} was clicked`);
            })
            result.appendChild(button);
        }
    });
});


/**
 * 1. Send user/ pass,  recieve userData // Authentication
 * 2. Send userData, imageData, recieve permission // Authorization
 * 3. Send userData, imageData, write to log // Auditing
 * 4. Send userData, imageData, timestamp, display a blue thumb
 */

let userData = login(user, pass);
let isAllowed = getPermission(userData, imageData);
if (isAllowed) {
    audit(userData, imageData, timestamp);
    setLike(userData, imageData, timestamp);
}