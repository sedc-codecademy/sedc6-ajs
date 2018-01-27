let books = [{
    authorFirst: "Vernon",
    authorLast: "Vinge",
    title: "Marooned in realtime"
}, {
    authorFirst: "Arthur",
    authorLast: "Clarke",
    title: "Randezvous with Rama",
}, {
    authorFirst: "Isaac",
    authorLast: "Asimov",
    title: "The gods themselves",
}, {
    authorFirst: "Margaret",
    authorLast: "Atwood",
    title: "The handmaid's tale",
}, {
    authorFirst: "Vernon",
    authorLast: "Vinge",
    title: "Fire in the deep"
}, {
    authorFirst: "Andy",
    authorLast: "Weir",
    title: "The martian",
}, {
    authorFirst: "Andy",
    authorLast: "Weir",
    title: "Artemis",
}, {
    authorFirst: "Vernon",
    authorLast: "Vinge",
    title: "A deepness in the sky"
}, {
    authorFirst: "Arthur",
    authorLast: "Miller",
    title: "Death of a Salesman"
}];


let result = books
    .filter(book => book.authorFirst.length === book.authorLast.length)
    .map(book => `${book.authorFirst} ${book.authorLast}`);

console.log(result);

let array = [1, 5, 12, 4, 3, 22, 3];

let numberComparer = (a, b) => {
    console.log(` Comparing ${a} and ${b}`)
    return b - a;
};

array.slice().sort((a, b) => {
    console.log(` Comparing ${a} and ${b}`)
    return a - b;
});
console.log(array);

array.slice().sort((a, b) => {
    console.log(` Comparing ${a} and ${b}`)
    return b - a;
});
console.log(array);


books.sort((a, b) => {
    let nameCompare = a.authorFirst.localeCompare(b.authorFirst);
    if (nameCompare !==0){
        return nameCompare;
    }
    let lastCompare = a.authorLast.localeCompare(b.authorLast);
    if (lastCompare !== 0){
        return lastCompare;
    }
    return a.title.localeCompare(b.title);
});

console.log(books);
