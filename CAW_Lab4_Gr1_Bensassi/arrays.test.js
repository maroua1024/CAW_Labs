const { first, last, concatenate, chunk } = require('./arrays');

describe("Array Functions", () => {

  test("first should return the first n elements of an array", () => {
    expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
    expect(first([1, 2, 3, 4], 0)).toEqual([]);
    expect(first([1, 2, 3, 4])).toBe(1);
  });

  test("last should return the last n elements of an array", () => {
    expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(last([1, 2, 3, 4], 0)).toEqual([]);
    expect(last([1, 2, 3, 4])).toBe(4);
  });

  test("concatenate should log elements joined with commas and then without any separator", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    concatenate(["Red", "Green", "White", "Black"]);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Red,Green,White,Black");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "RedGreenWhiteBlack");
    consoleSpy.mockRestore();
  });

  test("chunk should divide an array into several sub-arrays of predefined size", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
  });

});
