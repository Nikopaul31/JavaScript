const close_compare = require("./CompareWithinMargin");

describe("Test suite", function () {

  test("a=3, b=5, margin=3 should return 0", () => {
    expect(close_compare(3, 5, 3)).toBe(0);
  });

  test("a=5, b=1, margin=3 should return 1", () => {
    expect(close_compare(5, 1, 3)).toBe(1);
  });

  it("a=2, b=4, margin=0 should return -1", () => {
    expect(close_compare(2, 4, 0)).toBe(-1);
  });

});
