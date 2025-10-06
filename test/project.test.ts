import { add, divide } from '../src/project';

describe('math functions', () => {
  test('add works', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('divide works', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test('throws on divide by zero', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
  });
});
