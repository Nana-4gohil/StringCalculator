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

   
});