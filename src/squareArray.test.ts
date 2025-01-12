import { squareWithFor, squareWithForEach } from "./squareArray";

describe("squareArray Functions", () => {
    const testArray = [3, 5, 7, 3, 8, 9, 1];

    test("squareWithFor calculates squares correctly", () => {
        const result = squareWithFor(testArray);
        expect(result).toEqual([9, 25, 49, 9, 64, 81, 1]);
    });

    test("squareWithForEach calculates squares correctly", () => {
        const result = squareWithForEach(testArray);
        expect(result).toEqual([9, 25, 49, 9, 64, 81, 1]);
    });
});