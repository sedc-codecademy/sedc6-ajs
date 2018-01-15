 let numbers = `17 57 68 36 93 63 18 59 83 42 76 34 75 72 83 62 73 1 52 76 14 60 38 98 25 41 89 4 53 69 66 48 39 11 74 31 16 43 65 88 29 24 90 87 61 47 5 35 85 37 30 19 10 40 92 99 77 96 26 13 6 23 3 2 22 44 7 9 80 50 8 91 49 21 28 27 94 46 78 55 12 86 45 81 32 54 51 67 58 15 20 79 70 95 71 64 33 56 97 84`;


 let filteredNumbers = 
    numbers.split(" ")
        .filter(num => (num > 0))
        .map(num => parseInt(num));


// average sum / length of array
 let lengthOfArray = filteredNumbers.length;
 let sum = filteredNumbers.reduce((sum, num) => (sum += num));
 let average = sum / lengthOfArray;

// maximum number 
 let maximumNumber = filteredNumbers.reduce((max, num) => (max = max < num ? num : max), 0);

// minimum number
 let minimumNumber = filteredNumbers.reduce((min, num) => (min = min > num ? num : min), Infinity);

// list of even numbers from list
 let evenNumbers = filteredNumbers.filter(num => num % 2 == 0);

 // list of odd numbers from list
 let oddNumbers = filteredNumbers.filter(num => num % 2 != 0);


console.log(evenNumbers, evenNumbers.length);