const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns 'true' for same arrays", () =>{
    assert.strictEqual(eqArrays([6, 11, 22], [6, 11, 22]), true);
  });
  it("returns 'false' for different arrays", () =>{
    assert.strictEqual(eqArrays([13, 2, 45], [33, 11, 14]), false);
  });
  it("returns 'true' for same nested-arrays", () =>{
    assert.strictEqual(eqArrays([6, [5, 4]], [6, [5, 4]]), true);
  });
  it("returns 'true' for same mixed number-string nested-arrays", () =>{
    assert.strictEqual(eqArrays(["2", [[[3], ["4"]]]], ["2", [[[3], ["4"]]]]), true);
  });
});