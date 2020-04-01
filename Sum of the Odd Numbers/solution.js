const addOddToN = n => (n === 1 ? 1 : n + addOddToN(n - 2));
