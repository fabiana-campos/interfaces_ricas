import { joinStrings } from "./joinStrings";

describe("joinStrings Function", () => {
    const testArray = ["Arrays", "com", "TypeScript"];

    test("joinStrings concatenates strings with spaces", () => {
        const result = joinStrings(testArray);
        expect(result).toBe("Arrays com TypeScript");
    });
});