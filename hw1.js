let n1 = 2;
let n2 = -8;
let n3 = 3;
let n4 = 3;
let n5 = 18;
let n6 = 3;
let D = n1 * n5 - n2 * n4;
let D_x = n3 * n5 - n2 * n6;
let D_y = n1 * n6 - n3 * n4;
if (D !== 0) {
    let result1 = D_x / D;
    let result2 = D_y / D;
    console.log("Результат решения системы линейных уравнений методом Крамера:");
    console.log("x =", result1);
    console.log("y =", result2);
} else {
    console.log("Нет решения.");
}