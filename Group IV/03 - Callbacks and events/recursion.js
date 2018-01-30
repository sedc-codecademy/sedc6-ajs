let tree = {
    name: "f1",
    size: 10,
    children: [{
            name: "f11",
            size: 20,
            children: [{
                    name: "f111",
                    size: 10,
                    children: []
                },
                {
                    name: "f112",
                    size: 7,
                    children: []
                }
            ]
        },
        {
            name: "f12",
            size: 20,
            children: [{
                    name: "f121",
                    size: 10,
                    children: [{
                        name: "f1211",
                        size: 10,
                        children: []
                    }]
                },
                {
                    name: "f122",
                    size: 7,
                    children: []
                }
            ]

        }
    ]
}

function getTreeSizeNested(tree) {
    let total = tree.size;
    for (let index = 0; index < tree.children.length; index++) {
        const child = tree.children[index];
        total += child.size;
        for (let index = 0; index < child.children.length; index++) {
            const grandchild = child.children[index];
            total += grandchild.size;
            for (let index = 0; index < grandchild.children.length; index++) {
                const chukunchild = grandchild.children[index];
                total += chukunchild.size;
                //....
            }
        }
    }
}

function getTreeSize(tree) {
    // console.log(`called for tree ${tree.name}`)
    let total = tree.size;
    for (let index = 0; index < tree.children.length; index++) {
        const child = tree.children[index];
        total += getTreeSize(child);
    }
    // console.log(`size of tree ${tree.name} is ${total}`)
    return total;
}

//console.log(getTreeSize(tree));

let fibRec = (() => {
    let callCount = 0;
    function fibbonacci(n) {
        callCount += 1;

        if ((n === 1) || (n === 0)) {
            return 1;
        }

        return fibbonacci(n - 1) + fibbonacci(n - 2);
    }

    return {
        fibbonacci: fibbonacci,
        getCallCount: () => callCount,
        resetCallCount: () => callCount = 0
    }
})();

let fibMemo = (() => {
    let callCount = 0;

    let result = {
        0: 1,
        1: 1
    }

    function fibbonacci(n) {
        callCount += 1;

        if (result[n]) {
            return result[n];
        }

        let fib = fibbonacci(n - 1) + fibbonacci(n - 2);
        result[n] = fib;
        return fib;
    }

    return {
        fibbonacci: fibbonacci,
        getCallCount: () => callCount,
        resetCallCount: () => callCount = 0
    }
})();

console.log(fibRec.fibbonacci(40));
console.log(fibRec.getCallCount());
console.log("===============");


console.log(fibMemo.fibbonacci(40));
console.log(fibMemo.getCallCount());
console.log("===============");
