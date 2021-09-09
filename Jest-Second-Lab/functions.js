const functions = {
  arithmetic: (a, b, c) => {
    return a + b * c;
  },
  createUser: () => {
    const user = { firstName: "Flavio" };
    user["lastName"] = "Andrade";
    return user;
  },
};

const parameterized = {
  add: (a, b) => a + b,
  mul: (a, b) => a * b,
  sub: (a, b) => a - b,
  div: (a, b) => a / b,
};

module.exports = { functions, parameterized };
