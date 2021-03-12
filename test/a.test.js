const expect = require("chai").expect;
const a = require("../a");

describe('a', () => {
  it("gives u a", () => {
    expect(a(5, 4, 3, 2, 1)).to.equal("a");
    expect(a(a)).to.equal("a");
    expect(a()).to.equal("a");
  });
})
