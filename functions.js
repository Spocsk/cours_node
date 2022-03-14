export function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

export function isValidDate() {
    for (let index = 2014; index < 2050; index++) {
        let date = `${index}/01/1`
        if (date instanceof Date && !isNaN(date)) {
            return index;
        }
    }
}

export function getFirstFibonacciNumber(n) {
    const fibo = new Array(n)
    fibo[0] = 0
    fibo[1] = 1
    for (let i = 2; i < n; i = i + 1) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}


export function decryptCaeserCode(code) {
    let combinations = []
    let count = 0
    let idx = 0
    let tmp = []
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    while (count < 26) {
        for (let i = 0; i < code.length; i++) {
            tmp[i] = alphabet[alphabet.indexOf(code[i]) + idx]
        }
        combinations.push(tmp.join(''))
        count++;
        tmp = []
        idx++;
    }
    return combinations
}
