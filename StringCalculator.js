class StringCalculator {
    constructor() {
        this.callCount = 0;
    }
    Add(numbers) {
        this.callCount++;
        if (!numbers) return 0;
        let numberString = numbers;
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n');
            const delimiterSection = parts[0].slice(2);
            const delimiters = delimiterSection.match(/\[([^\]]*)\]/g)?.map(d => d.slice(1, -1)) || [delimiterSection];
            numberString = parts[1];
            delimiters.forEach(d => {
                numberString = numberString.replaceAll(d, ',');
            });
        }
        numberString = numberString.replace(/\n/g, ',');
        const numArray = numberString.split(',').map(num => parseInt(num)).filter(num => !isNaN(num));
        const negatives = numArray.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(',')}`);
        }
        return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
    }
    GetCalledCount() {
        return this.callCount;
    }
}
module.exports = StringCalculator;