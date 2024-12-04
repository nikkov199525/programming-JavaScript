function factorial(n) {
    if (n < 0n) {
        return undefined; // Факториал не определён для отрицательных чисел
    } else if (n === 0n || n === 1n) {
        return 1n; // Факториал 0 и 1 равен 1
    } else {
        return n * factorial(n - 1n); // Рекурсивный вызов функции
    }
}
console.log(factorial(175n))