function isPrime(x) {
    if (x < 2) return 0;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return 0;
    }
    return 1;
}
 function countofprimes(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i) === 1) {
            count++;
        }
    }
    return count;
}
const input = process.argv[2];
if (input < 2) return 0;
let count = 0;
for (let i = 3; i <= input; i += 2) {
    if (countofprimes(i)) count++;
}
console.log(count + 1);