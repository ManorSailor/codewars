function findOdd(A) {
    if (!A || A.length === 0) return A;

    A = A.reduce((obj, item) => {
        (obj[item]) ? obj[item]++ : obj[item] = 1;
        return obj;
    }, {});

    let B = Object.keys(A);

    for (let i = 0; i < B.length; i++) {
        if (A[B[i]] % 2 !== 0) return Number(B[i]);
    }
}