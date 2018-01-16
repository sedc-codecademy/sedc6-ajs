var list =`
Mark Johansson	waffle iron	80	2
Mark Johansson	blender	220	2
Mark Johansson	knife	180	2
Nikita Smith	blender iron	60	2
Nikita Smith	knife iron	55	2
Jane Doe	glasses	35	2
Jane Doe	soda	120	2
Jane Doe	carbon iron	20	2`;

var arrayOfObjects = 
list.trim()
    .split('\n')
    .map(line => line.split("\t"))
    .reduce((customers, line)=>{
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        });
        return customers
    }, {});

console.log(arrayOfObjects);
// console.log(JSON.stringify(arrayOfObjects));