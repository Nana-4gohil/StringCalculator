class StringCalculator {

    Add(numbers) {
        if (!numbers) return 0;
        if (numbers.includes(',')) {
            const numArray = numbers.split(',').map(num => parseInt(num));
            return numArray.reduce((sum, num) => sum + num, 0);
        }
        return parseInt(numbers);
    }
}

module.exports = StringCalculator;