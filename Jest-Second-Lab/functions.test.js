const { functions, parameterized } = require("./functions");

test("Checking mathematic operations", () => {
  expect(functions.arithmetic(2, 2, 2)).toBe(6);
});

test("User should be Flavio Andrade object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Flavio",
    lastName: "Andrade",
  });
});

test.each([
  [1, 1, 2],
  [-1, 2, 1],
  [2, 1, 3],
])("%i + %i equals %i", (a, b, expected) => {
  expect(parameterized.add(a, b)).toBe(expected);
});

test.each([
  [1, 1, 0],
  [-1, 2, -3],
  [2, 2, 0],
])("%i - %i equals %i", (a, b, expected) => {
  expect(parameterized.sub(a, b)).toBe(expected);
});

test.each([
  [1, 1, 1],
  [-1, 2, -2],
  [2, 2, 4],
])("%i * %i equals %i", (a, b, expected) => {
  expect(parameterized.mul(a, b)).toBe(expected);
});

test.each([
  [1, 1, 1],
  [-1, 2, -0.5],
  [2, 2, 1],
])("%i / %i equals %i", (a, b, expected) => {
  expect(parameterized.div(a, b)).toBe(expected);
});
