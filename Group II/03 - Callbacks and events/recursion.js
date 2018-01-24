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

function getSize(tree) {
    console.log("getsizecalled");
    let total = tree.size;
    for (let index = 0; index < tree.children.length; index++) {
        const child = tree.children[index];
        total += getSize(child);
    }
    return total;
}

let simple = {
    name: "single",
    size: 20,
    children: []
}

console.log(getSize(simple));
console.log("============");
console.log(getSize(tree));
console.log("============");

let fibonnaciRegular = (() => {
    let callCount = 0;
    function fibonnaci(n) {
        callCount++;
        if (n == 1 || n == 2)
            return 1;
        return fibonnaci(n - 1) + fibonnaci(n - 2);
    }

    return {
        fn: fibonnaci,
        getCallCount: () => callCount
    }
})();

console.log(fibonnaciRegular.fn(30));
console.log(fibonnaciRegular.getCallCount());
console.log("============");

let fibonnaciMemo = (() => {
    let callCount = 0;

    let results = {
        1: 1,
        2: 1
    };

    function fibonnaci(n) {
        callCount++;
        if (results[n])
            return results[n];

        let result = fibonnaci(n-1) + fibonnaci(n-2);
        results[n] = result;
        return result;
    }

    return {
        fn: fibonnaci,
        getCallCount: () => callCount,
        getResults: () => results
    }
})();

console.log(fibonnaciMemo.fn(45));
console.log(fibonnaciMemo.getCallCount());

console.log(fibonnaciMemo.fn(45));
console.log(fibonnaciMemo.getCallCount());
console.log(fibonnaciMemo.getResults());