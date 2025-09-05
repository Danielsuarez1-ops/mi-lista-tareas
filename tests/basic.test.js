// tests/basic.test.js
describe('Basic project checks', () => {
  test('arithmetic works', () => {
    expect(1 + 1).toBe(2);
  });

  test('index.html exists', () => {
    const fs = require('fs');
    expect(fs.existsSync('index.html')).toBe(true);
  });
});
