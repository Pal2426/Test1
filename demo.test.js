const { sum, subtract } = require('./demo');
 
test('sum should return 12', () => {
  expect(sum()).toBe(12);
});
 
test('subtract should return -2', () => {
  expect(subtract()).toBe(-2);
});
