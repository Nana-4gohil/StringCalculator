const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    // Test 1: Empty string returns 0
    test('should return 0 for empty string', () => {
        expect(calculator.Add('')).toBe(0);
    });

   // Test 2: Single number returns that number
    test('should return number when single number is provided', () => {
        expect(calculator.Add('1')).toBe(1);
    });
});