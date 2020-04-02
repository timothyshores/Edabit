const squaresSum = n => (n === 1 ? 1 : n * n + squaresSum(n - 1));
