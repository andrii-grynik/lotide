const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns 'true' for 1===1", () => {
    assert.strictEqual(assertEqual(1,1));
  });

  it("returns 'true' for 'bootcamp' === 'bootcamp'", () => {
    assert.strictEqual(assertEqual('bootcamp' ,'bootcamp'));
  });
  
  it("returns 'false' for '7' === 7", () => {
    assert.strictEqual(assertEqual('7' ,7));
  });
  

});