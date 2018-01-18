// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("run").addEventListener("click", () => {
//         document.getElementById("container").innerHTML = "";
//         var count = document.getElementById("count").valueAsNumber;
//         for (var i = 0; i < count; i += 1) {
//             var button = document.createElement("button");
//             button.innerHTML = `Button #${i + 1}`;
//             button.addEventListener("click", (i => () => {
//                 document.getElementById("result").innerHTML += `Button #${i + 1} has been clicked`;
//             })(i));
//             document.getElementById("container").appendChild(button);
//             document.getElementById("container")
//                 .appendChild(document.createElement("br"));
//         }
//     })
// });

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("run").addEventListener("click", () => {
        document.getElementById("container").innerHTML = "";
        let count = document.getElementById("count").valueAsNumber;
        for (let i = 0; i < count; i += 1) {
            let button = document.createElement("button");
            button.innerHTML = `Button #${i + 1}`;
            button.addEventListener("click", (i => () => {
                document.getElementById("result").innerHTML += `Button #${i + 1} has been clicked`;
            })(i));
            document.getElementById("container").appendChild(button);
            document.getElementById("container")
                .appendChild(document.createElement("br"));
        }
    })
});

// ((x, y) => x+y)(3, 4)

// (function(x, y){
//     return x+y;
// })(3, 4)

