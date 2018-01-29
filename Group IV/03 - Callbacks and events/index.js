document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("create").addEventListener("click", () => {
        let counter = document.getElementById("counter").valueAsNumber;
        let result = document.getElementById("result");
        result.innerHTML = "";
        for (var index = 0; index < counter; index++) {
            let button = document.createElement("button");
            button.innerHTML = `Button #${index+1}`;
            button.addEventListener("click", () => {
                console.log(`Button #${index+1} was clicked`);
            })
            result.appendChild(button);
        }
    });
});

