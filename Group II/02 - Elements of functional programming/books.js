function makeArray(array, operation) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(operation(element));
    }
    return result;
}

function getArray(array, predicate) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}

let books = [{
    author: "Arthur Clarke",
    title: "Randezvous with Rama",
}, {
    author: "Isaac Asimov",
    title: "The gods themselves",
}, {
    author: "Arthur Clarke",
    title: "The city and the Stars",
}, {
    author: "Vernon Vinge",
    title: "Fire in the deep"
}, {
    author: "Isaac Asimov",
    title: "Caves of steel",
}]

function getAuthors(bookArray){
    return bookArray.map(book => book.author);
    //return makeArray(bookArray, book => book.author);
}

function getTitles(bookArray){
    // ...
}

console.log(getAuthors(books));