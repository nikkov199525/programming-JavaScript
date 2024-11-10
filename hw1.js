function kramer (n1, n2, n3, n4, n5, n6) {
    let D = n1 * n5 - n2 * n4;
    let D_x = n3 * n5 - n2 * n6;
    let D_y = n1 * n6 - n3 * n4;
    let result1 = D_x / D;
    let result2 = D_y / D;
    return { result1, result2 };
}
