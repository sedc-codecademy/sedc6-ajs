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


