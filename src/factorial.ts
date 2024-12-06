export default function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Negative numbers do not have factorials.");
    }
    return n === 0 ? 1 : n * factorial(n - 1);
}
