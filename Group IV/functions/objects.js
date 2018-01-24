var list =`
Mark Johansson	waffle iron	80	2
Mark Johansson	blender	220	2
Mark Johansson	knife	180	2
Nikita Smith	blender iron	60	2
Nikita Smith	knife iron	55	2
Jane Doe	glasses	35	2
Jane Doe	soda	120	2
Jane Doe	carbon iron	20	2`;

let listOfRows = list.trim().split('\n');
let listOfList = listOfRows.map(x => x.split("\t"));
console.log(listOfList);
let customersList = listOfList.reduce((customer, line ) => {
    customer[line[0]] = customer[line[0]] || [];
    customer[line[0]].push({
        name: line[1],
        price: line[2],
        quantity:line[3]
    });

    return customer
}, {});
customersList
// console.log(list.split('\n'))

// www.hastebin.com/bapologumo.xml