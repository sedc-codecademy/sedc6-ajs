let execute = (() => {
    let password = "lozinka"

    function execute(x, y, op, pass) {

        if (pass !== password)
            return "NOPE";

        if (op === "*") {
            return mul(x, y)
        }
        if (op === "+") {
            return add(x, y)
        }
        if (op === "-") {
            return sub(x, y)
        }
        return "ERROR";
    }

    function add(x, y) {
        return x + y;
    }

    function sub(x, y) {
        return x - y;
    }

    function mul(x, y) {
        return x * y;
    }

    return execute;
})();