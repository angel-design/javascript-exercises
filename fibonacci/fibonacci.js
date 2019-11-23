const fibonacci = function (c) {
    let a = 1;
    let b = 1;
    if (c < 1) {
        return "OOPS"
    } else {
        for (let i = 0; i < c - 2; i++) {
            [a, b] = [b, a + b];
        }
        return b
    }
}

module.exports = fibonacci
