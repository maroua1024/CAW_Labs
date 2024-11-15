const mean = require('./notation');

describe("mean function", () => {
  test("should return the average of an array of scores", () => {
    const scores = [90, 80, 70, 100];
    expect(mean(scores)).toBe(85);
  });

  test("should return NaN for an empty array", () => {
    expect(mean([])).toBeNaN();
  });
});
