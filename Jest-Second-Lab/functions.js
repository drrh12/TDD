const vectors = {
  comparison: () => {
    const vector = [4, 5, 8];
    return vector;
  },
  addition: (a, b, c) => {
    const first = [a, b, c];
    const second = [1, 3, 2];

    const sum = first.map((n, i) => {
      return n + second[i];
    });
    return sum;
  },
  subtraction: (a, b, c) => {
    const first = [a, b, c];
    const second = [1, 3, 2];

    const sum = first.map((n, i) => {
      return n - second[i];
    });
    return sum;
  },
  scalarProduct: (a, b) => {
    const c = a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
    return c;
  },
  length: (a) => {
    const l = a.length;
    return l;
  },
};

module.exports = { vectors };

/**
 * Comparison
 * @type {Function}
 *
 * This function is used to compare vectors
 */

/**
 * Addition
 * @type {Function}
 *
 * This function is add vectors
 */

/**
 * Subtraction
 * @type {Function}
 *
 * This function is used to subtract vectors
 */

/**
 * Scalar Product of vector
 * @type {Function}
 *
 * This function is used get the scalar prodcut of a vector
 */

/**
 * Length of vector
 * @type {Function}
 *
 * This function is used chech the length of a vector
 */
