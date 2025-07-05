class StringCalculator {
    constructor() {
        this.callCount = 0;
    }
    Add(numbers) {
        this.callCount++;
        if (!numbers) return 0;
        let delimiter = ',';
        let numberString = numbers;
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n');
            delimiter = parts[0].slice(2);
            numberString = parts[1];
        }
        numberString = numberString.replace(/\n/g, delimiter);
        const numArray = numberString.split(delimiter).map(num => parseInt(num)).filter(num => !isNaN(num));
        const negatives = numArray.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(',')}`);
        }
        return numArray.reduce((sum, num) => sum + num, 0);
    }
    GetCalledCount() {
        return this.callCount;
    }
}
module.exports = StringCalculator;