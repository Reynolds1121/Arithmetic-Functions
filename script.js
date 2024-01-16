function multiply(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number' || x < 0 || y < 0 || x % 1 !== 0 || y % 1 !== 0) {
      return null;
    }
  
    let result = 0;
    for (let i = 0; i < y; i = add(i, 1)) {
      result = add(result, x);
    }
  
    return result;
  }
  
  function power(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number' || x < 0 || y < 0 || x % 1 !== 0 || y % 1 !== 0) {
      return null;
    }
  
    let result = 1;
    for (let i = 0; i < y; i = add(i, 1)) {
      result = multiply(result, x);
    }
  
    return result;
  }
  
  function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return null;
    }
    return x + y;
  }

  function factorial(n) {
    if (typeof n !== 'number' || n < 0 || n % 1 !== 0) {
        return null;
    }

    let result = 1;
    for (let i = 2; i <= n; i = add(i, 1)) {
        result = multiply(result, i);
    }

    return result;
}

function fibonacci(n) {
    if (typeof n !== 'number' || n < 0 || n % 1 !== 0) {
        return null;
    }

    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        let a = 0, b = 1;
        for (let i = 2; i <= n; i = add(i, 1)) {
            let temp = add(a, b);
            a = b;
            b = temp;
        }
        return b;
    }
}

console.assert(
    add(2, 3) === 2 + 3,
    "add does not work properly with two positive integers"
  );
  
  console.assert(
    add(2, -3) === 2 + -3,
    "add does not work properly with one positive and one negative integer"
  );
  
  console.assert(
    add(2.5, 3.5) === 2.5 + 3.5,
    "add does not work properly with two positive decimal numbers"
  );
  
  console.assert(
    add(2, "3") === null,
    "add does not return null for one number and one string"
  );
  
  console.assert(
    multiply(6, 4) === 6 * 4,
    "multiply does not work properly with two positive integers"
  );
  
  console.assert(
    multiply(7, 0) === 7 * 0,
    "multiply does not work properly with one parameter as zero"
  );
  
  console.assert(
    multiply(3, -2) === null,
    "multiply does not return null for one positive and one negative integer"
  );
  
  console.assert(
    multiply(2.5, 4) === null,
    "multiply does not return null for one decimal and one integer"
  );
  
  console.assert(
    multiply(2, "3") === null,
    "multiply does not return null for one number and one string"
  );
  
  console.assert(
    power(2, 8) === 2 ** 8,
    "power does not work properly with two positive integers"
  );
  
  console.assert(
    power(3, 4) === 3 ** 4,
    "power does not work properly with two positive integers"
  );
  
  console.assert(
    power(2, -3) === null,
    "power does not return null for a negative exponent"
  );
  
  console.assert(
    power(2.5, 4) === null,
    "power does not return null for one decimal and one integer"
  );
  
  console.assert(
    power(2, "3") === null,
    "power does not return null for one number and one string"
  );

  console.assert(
    factorial(0) === 1,
    "factorial does not work properly with n = 0"
);

console.assert(
    factorial(1) === 1,
    "factorial does not work properly with n = 1"
);

console.assert(
    factorial(7) === 5040,
    "factorial does not work properly with a larger positive integer"
);

console.assert(
    factorial(-3) === null,
    "factorial does not return null for a negative integer"
);

console.assert(
  fibonacci(2) === 1,
  "fibonacci does not work properly with n = 2"
);

console.assert(
  fibonacci(4) === 3,
  "fibonacci does not work properly with n = 4"
);

console.assert(
  fibonacci(9) === 34,
  "fibonacci does not work properly with a larger positive integer"
);

console.assert(
  fibonacci(-5) === null,
  "fibonacci does not return null for a negative integer"
);