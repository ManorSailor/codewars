function findNb(m, n = 1, oldVol = 0) {
    const nVol = n ** 3 + oldVol;

    if (nVol > m) return -1;
    if (nVol === m) return n;

    return findNb(m, n + 1, nVol);
}
  // n = 1, bcz when m = 1, n needs to be 1 as well
