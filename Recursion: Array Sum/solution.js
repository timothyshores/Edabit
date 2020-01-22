const sum = arr => (arr.length === 0 ? 0 : arr.pop() + sum(arr));
