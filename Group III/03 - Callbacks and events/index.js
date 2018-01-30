let clickHandler = (event) => {
    console.log(event);
};

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("create");
    let counter = document.getElementById("counter").valueAsNumber;

    button.addEventListener("click", clickHandler);
})


