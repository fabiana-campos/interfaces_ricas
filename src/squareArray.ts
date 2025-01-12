export function squareWithFor(array: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** 2);
    }
    return result;
}

//forEach
export function squareWithForEach(array: number[]): number[] {
    let result: number[] = [];
    array.forEach(num => result.push(num ** 2));
    return result;
}