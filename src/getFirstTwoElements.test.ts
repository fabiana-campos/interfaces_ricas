import { getFirstTwoElements } from "./getFirstTwoElements";

describe("getFirstTwoElements Function", () => {
    const testArray = [2, 4, 6, 2, 8, 9, 5];

    test("getFirstTwoElements returns the first two elements", () => {
        const result = getFirstTwoElements(testArray);
        expect(result).toEqual([2, 4]);
    });
});