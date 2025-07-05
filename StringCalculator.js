class StringCalculator {
    Add(numbers) {
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
        return numArray.reduce((sum, num) => sum + num, 0);
    }
}
module.exports = StringCalculator;