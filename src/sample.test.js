const sayHello = require('./sample');

test('Simple test', () => {
  const result = sayHello('World');
  expect(result).toBe('Hello, World!');
});