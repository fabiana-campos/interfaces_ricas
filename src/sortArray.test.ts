import { sortArray } from "./sortArray";

describe("sortArray Function", () => {
    const testArray = ["carro", "boneco", "ave", "lapís"];

    test("sortArray sorts strings alphabetically", () => {
        const result = sortArray(testArray);
        expect(result).toEqual(["ave", "boneco", "carro", "lapís"]);
    });
});