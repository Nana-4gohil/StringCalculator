class StringCalculator {

    Add(numbers) {
        if (!numbers) return 0;
        const numArray = numbers.split(',').map(num => parseInt(num)).filter(num => !isNaN(num));
        return numArray.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;