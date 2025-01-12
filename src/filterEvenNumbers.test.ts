import { filterEvenNumbers } from "./filterEvenNumbers";

describe("filterEvenNumbers Function", () => {
    const testArray = [8, 3, 9, 5, 6, 12];

    test("filterEvenNumbers returns only even numbers", () => {
        const result = filterEvenNumbers(testArray);
        expect(result).toEqual([8, 6, 12]);
    });
});