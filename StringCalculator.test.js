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

    // Test 3: Two numbers return their sum
    test('should return sum of two numbers', () => {
        expect(calculator.Add('1,2')).toBe(3);
    });

    // Test 4: Handle unknown amount of numbers
    test('should handle multiple numbers', () => {
        expect(calculator.Add('1,2,3,4')).toBe(10);
    });

    // Test 5: Handle new lines between numbers
    test('should handle new lines as delimiters', () => {
        expect(calculator.Add('1\n2,3')).toBe(6);
    });
});