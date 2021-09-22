const { vectors } = require("./functions");

test("Comparing the equivalance of two vectors", () => {
  expect(vectors.comparison()).toEqual([4, 5, 8]);
});

test("Addition of vectors", () => {
  expect(vectors.addition(2, 1, 5)).toStrictEqual([3, 4, 7]);
});

test("Subtraction of vectors", () => {
  expect(vectors.subtraction(2, 4, 1)).toStrictEqual([1, 1, -1]);
});

test("Scalar product of vectors", () => {
  expect(vectors.scalarProduct([1, 2, 3], [1, 0, 1])).toStrictEqual(4);
});

test("Length of vectors", () => {
  expect(vectors.length([1, 2, 3])).toStrictEqual(3);
});
