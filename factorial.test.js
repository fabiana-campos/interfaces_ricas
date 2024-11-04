const factorial = require('./factorial');

test('calculates factorial of 5 to equal 120', () => {
    expect(factorial(5)).toBe(120);
});

test('calculates factorial of 0 to equal 1', () => {
    expect(factorial(0)).toBe(1);
});

test('throws error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow("Negative numbers do not have factorials.");
});