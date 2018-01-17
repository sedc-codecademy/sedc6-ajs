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
    author: "Vernon Vinge",
    title: "Marooned in realtime"
}, {
    author: "Arthur Clarke",
    title: "Randezvous with Rama",
}, {
    author: "Isaac Asimov",
    title: "The gods themselves",
}, {
    author: "Margaret Atwood",
    title: "The handmaid's tale",
}, {
    author: "Vernon Vinge",
    title: "Fire in the deep"
}, {
    author: "Andy Weir",
    title: "The martian",
}, {
    author: "Andy Weir",
    title: "Artemis",
}, {
    author: "Vernon Vinge",
    title: "A deepness in the sky"
}]

function getAuthors(bookArray) {
    return bookArray.map(book => book.author);
    //return makeArray(bookArray, book => book.author);
}

console.log(getAuthors(books));
console.log(books.map(b => b.title));

var collection = [1, 2, 3, 5, 6, 12, 4];
collection.sort((a, b) => a - b);
console.log(collection);

books.sort((a, b) => {
    let authorCompare = a.author.localeCompare(b.author);
    if (authorCompare !== 0)
        return authorCompare;

    return a.title.localeCompare(b.title);
});
console.log(books);



