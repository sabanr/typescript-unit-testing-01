import { expect } from "chai";
import C from "../src/calculator";

describe("calculate", function() {
  it("add", function() {
    let result = C.Sum(5, 2);
    expect(result).equal(7);
  });

  it("subtract", function() {
    let result = C.Difference(5, 2);
    expect(result).equal(3);
  });
});
