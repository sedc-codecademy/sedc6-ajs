function getArrayPart(array, predicate) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}

function applyOperation(array, operation) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        result.push(operation(element));
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
}, {
    author: "Boris Pasternak",
    title: "Doctor Zhivago"
}];


let authors = applyOperation(books, book => book.author);
console.log(authors);

let displayTitles = applyOperation(books, book => `<li>${book.title} by ${book.author}</li>`);

displayTitles.forEach(t => document.write(t));
console.log(displayTitles);

var numbers = [1, 3, 12, 5, 4, 2, 101];
let sortNumbers = (a, b) => b - a;
numbers.sort(sortNumbers);
console.log(numbers);

books.sort((a, b) => {
    console.log(`comparing ${a.title} with ${b.title}`);
    let authorCompare = a.author.localeCompare(b.author);

    if (authorCompare !== 0){
        return authorCompare;
    }

    let titleCompare = a.title.localeCompare(b.title);
    return titleCompare;
});

console.log(books);