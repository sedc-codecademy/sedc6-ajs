let tree = {
    name: "f1",
    size: 10,
    children: [
        {
            name: "f11",
            size: 20,
            children: [
                {
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
            children: [
                {
                    name: "f121",
                    size: 10,
                    children: [
                        {
                            name: "f1211",
                            size: 10,
                            children: []
                        }
                    ]
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

let getSizeIterative = function (tree) {
    console.log("  inside iterative");
    let total = tree.size;
    for (let index = 0; index < tree.children.length; index++) {
        const element = tree.children[index];
        total += element.size;
        for (let index2 = 0; index2 < element.children.length; index2++) {
            const grandchild = element.children[index2];
            total += grandchild.size;
            for (let index3 = 0; index3 < grandchild.children.length; index3++) {
                const chukunchild = grandchild.children[index3];
                total += chukunchild.size;
            }
        }
    }
    return total;
}

let getSizeRecursive = function (tree) {
    console.log(`  inside recursive for node ${tree.name}`);
    let total = tree.size;
    for (let index = 0; index < tree.children.length; index++) {
        const element = tree.children[index];
        total += getSizeRecursive(element);
    }
    return total;
}

console.log("iterative", getSizeIterative(tree));
console.log("recursive", getSizeRecursive(tree));

console.log("=============");


let fibonacciRec = (function(){
    let callCount = 0;

    function fibs(n) {
        callCount += 1;
        if ((n === 0) || (n === 1)) {
            return 1;
        }
        return fibs(n - 1) + fibs(n - 2);
    }

    return {
        fibs: fibs,
        getCallCount: () => callCount,
    }
})();

let fibonacciMemo = (function(){
    let callCount = 0;

    let previous = {
        0: 1,
        1: 1,
    };

    function fibs(n) {
        callCount += 1;

        if (previous[n] !== undefined)
            return previous[n];

        let result = fibs(n-1) + fibs(n-2);
        previous[n]=result;
        return result;
    }

    return {
        fibs: fibs,
        getCallCount: () => callCount,
    }
})();

console.log(fibonacciRec.fibs(30));
console.log("callCount Rec", fibonacciRec.getCallCount());

console.log(fibonacciRec.fibs(35));
console.log("callCount Memo", fibonacciRec.getCallCount());

console.log("=========")
console.log(fibonacciMemo.fibs(30));
console.log("callCount Memo", fibonacciMemo.getCallCount());

console.log(fibonacciMemo.fibs(35));
console.log("callCount Memo", fibonacciMemo.getCallCount());