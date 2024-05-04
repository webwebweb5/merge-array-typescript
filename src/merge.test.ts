import { merge } from "./merge";

describe("merge function", () => {
  it("should merge and sort three collections", () => {
    const collection1 = [10, 1, 3, 9];
    const collection2 = [6, 4, 11, 7];
    const collection3 = [2, 8, 5, 12];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual(expected);
  });
});
