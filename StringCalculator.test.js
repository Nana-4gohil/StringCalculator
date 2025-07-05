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

    // Test 6: Support different delimiters
    test('should support custom delimiter', () => {
        expect(calculator.Add('//;\n1;2')).toBe(3);
    });

    // Test 7: Throw exception for negative numbers
    test('should throw exception for negative numbers', () => {
        expect(() => calculator.Add('1,-2')).toThrow('negatives not allowed: -2');
    });

    // Test 8: Throw exception with all negative numbers
    test('should throw exception showing all negative numbers', () => {
        expect(() => calculator.Add('1,-2,-3')).toThrow('negatives not allowed: -2,-3');
    });

    // Test 9: Track number of calls to Add
    test('should track number of calls to Add', () => {
        calculator.Add('1');
        calculator.Add('1,2');
        expect(calculator.GetCalledCount()).toBe(2);
    });

    // Test 10: Ignore numbers bigger than 1000
    test('should ignore numbers bigger than 1000', () => {
        expect(calculator.Add('2,1001')).toBe(2);
    });



});