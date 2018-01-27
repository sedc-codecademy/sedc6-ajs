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
}, {
    authorFirst: "James",
    authorLast: "Joyce",
    title: "Ulysses"
}];

let flatAuthors = books
    .filter(book => book.authorFirst.length === book.authorLast.length)
    .map(book => `${book.authorFirst} ${book.authorLast}`);
//   .map(name => {
//     console.log("NAME", name);
//     return name.split(" ").map(part => {
//           console.log("PART", part);
//           return part.slice(0, 1);
//       }).join("")
//   });

console.log(flatAuthors);

let array = [1, 5, 12, 4, 3, 22, 3];

// array.sort((a, b) => {
//     console.log(`Comparing ${a} with ${b}`);
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1;
//     }
//     if (a === b) {
//         return 0;
//     }
// });

array.sort((a, b) => b - a);
console.log(array);

books.sort((a, b) => a.title.localeCompare(b.title));
console.log(books);

books.sort((a, b) => {
    let nameCompare = a.authorFirst.localeCompare(b.authorFirst);
    if (nameCompare !== 0) {
        return nameCompare;
    }
    let lastnameCompare = a.authorLast.localeCompare(b.authorLast);
    if (lastnameCompare !== 0) {
        return lastnameCompare;
    }
    return  a.title.localeCompare(b.title);
});

console.log(books);


