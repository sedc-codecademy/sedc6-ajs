var words = `excite hour paddle look potato repeat attempt broad pin moan first unsuitable waves suck sore pencil bomb crazy versed needless describe satisfy clever ask bright acid extra-small mysterious tremble hot place abandoned mellow eggs promise noxious argument clip decorous vest sidewalk rude door letter nut compete panoramic rake communicate pretty branch join swim sail sudden employ coach acrid raspy charge bitter replace discover harm tiny mushy screw organic house irritate false cry crate boat unused gleaming wrist claim fanatical mug prick direful pie brick chess occur tooth whole zephyr trace whirl tub weight haunt income absent snail allow birthday unaccountable`


var wordsArray = words.split(" ");

// sort by alphabet

var sortedByAbc = wordsArray.sort((a,b) => (a > b));

// sort by length

var sortedByLength = wordsArray.sort((a,b) => (a.length - b.length));

// get word with maximum number of characters

var longestWordCount = wordsArray.reduce((maxLength, el) => (maxLength = maxLength < el.length ? el.length : maxLength), 0);
var longestWord = wordsArray.reduce((maxWord, el) => (maxWord = maxWord.length < el.length ? el : maxWord), "");

// get word with lowest number of characters

var shortestWordCount = wordsArray.reduce((minLength, el) => (minLength = maxLength > el.length ? el.length : minLength), Infinity);
var shortestWord = wordsArray.reduce((minWord, el) => (minWord = minWord.length < el.length ? el : minWord), undefined);


console.log(shortestWord, shortestWordCount);