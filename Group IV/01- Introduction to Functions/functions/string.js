let words = `excite hour paddle look potato repeat attempt broad pin moan first unsuitable waves suck sore pencil bomb crazy versed needless describe satisfy clever ask bright acid extra-small mysterious tremble hot place abandoned mellow eggs promise noxious argument clip decorous vest sidewalk rude door letter nut compete panoramic rake communicate pretty branch join swim sail sudden employ coach acrid raspy charge bitter replace discover harm tiny mushy screw organic house irritate false cry crate boat unused gleaming wrist claim fanatical mug prick direful pie brick chess occur tooth whole zephyr trace whirl tub weight haunt income absent snail allow birthday unaccountable`;

let wordsArray = words.split(" ");
console.log(wordsArray.length);
// find the largest word
let largestWord = "";
for(let i = 0; i < wordsArray.length; i++){
    if(wordsArray[i].length > largestWord.length){
        largestWord = wordsArray[i];
    }
}

let largestWordEs = wordsArray.reduce(function(largest, a){
    if(a.length > largest.length){
        return largest = a;
    }
    return largest;
}, "");

let largestWordEs6 = wordsArray.reduce((lar, a) => 
                            (a.length > lar.length ? a : lar), "")
console.log(largestWord)
console.log(largestWordEs)
console.log(largestWordEs6)
// find the shortest word
let shortestWord = wordsArray[0];
for(let i = 0; i < wordsArray.length; i++){
    if(wordsArray[i].length < shortestWord.length){
        shortestWord = wordsArray[i];
    }
}

let shortestWordEs6 = wordsArray.reduce(
    (short, a) => (a.length < short.length ? a : short), wordsArray[0])

console.log(shortestWord)
console.log(shortestWordEs6)
// sort words
// asc
let sortedArrayAsc = wordsArray.sort(function(a, b){
    return b.localeCompare(a);
}).sort(function(a, b){
    return b.length - a.length;
});

console.log(sortedArrayAsc);
//desc