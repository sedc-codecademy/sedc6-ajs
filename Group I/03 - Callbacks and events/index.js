// console.log("One");

// setTimeout(function() {
//     console.log("Two")
// }, 1000);

// console.log("Three");

let numnames = ["zero", "one", "two", "three", "four", "five"];

let syncPrint = () => {
    for (let index = 0; index < numnames.length; index++) {
        const element = numnames[index];
        console.log(element);
    }
}

let asyncTimerPrint = () => {
    console.log("vo funkcija start");
    for (let index = 0; index < numnames.length; index++) {
        const element = numnames[index];
        const callback = () => console.log(element);
        setTimeout(callback, index * 1000);
    }
    console.log("vo funkcija kraj");
}
// console.log("pred funkcija");
// asyncTimerPrint();
// console.log("posle funkcija");

let asyncCallbackPrint = () => {
    setTimeout(() => {
        console.log("one");
        setTimeout(() => {
            console.log("two");
            setTimeout(() => {
                setTimeout(() => {
                    console.log("another four");
                    setTimeout(() => {
                        console.log("five");
                    }, 1000);
                    console.log("four");
                }, 1000)
                console.log("three");
            }, 1000);
            console.log("two again");
        }, 1000);
    }, 1000);
}
//asyncCallbackPrint();

// 1. let userData = login(userName, password); // Authentication
// 2. let isAllowed = canViewImage(userData, imageData); // Authorization;
// 3. setLike(userData, imageData);
// 4. Update UI

// login(userName, password, function(userData){
//     canViewImage(userData, imageData, function(isAllowed){
//         if (isAllowed){
//             setLike(userData, imageData, function(){
//                 updateUserInterface();
//             }, function(error){...})
//         }
//     });
// });


let clicker = function (event) {
    setTimeout(() => {
        document.getElementById("result").innerHTML = "Hello, SEDC";
    }, 1000);
}

let button = document.getElementById("clickMe");
button.addEventListener("click", clicker);

function iterateTimeouts(array) {
    let [head, ...tail] = array;
    console.log(head);
    if (tail.length) {
        setTimeout(() => iterateTimeouts(tail), 1000);
    }
}

iterateTimeouts(numnames);

