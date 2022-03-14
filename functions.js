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
