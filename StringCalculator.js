class StringCalculator {
    constructor() {
        // Initialize call counter
        this.callCount = 0;
    }

    // Main method to add numbers from a string
    Add(numbers) {
        this.callCount++;

        // Handle empty or invalid input
        if (!numbers || typeof numbers !== 'string') return 0;

        const { delimiters, numberString } = this.extractDelimiters(numbers);
        
        const parsedNumbers = this.parseNumbers(numberString, delimiters);

        this.validateNoNegatives(parsedNumbers);

        return this.sumNumbers(parsedNumbers);
    }

    // Extract delimiters and number string from input
    extractDelimiters(input) {
        const defaultDelimiter = ',';
        let delimiters = [defaultDelimiter];
        let numberString = input;

        // Check for custom delimiter syntax
        if (input.startsWith('//')) {
            const parts = input.split('\n', 2);
            if (parts.length < 2) return { delimiters, numberString };

            const delimiterSection = parts[0].slice(2);
            delimiters = delimiterSection.match(/\[([^\]]*)\]/g)?.map(d => d.slice(1, -1)) || [delimiterSection];
            numberString = parts[1];
        }

        return { delimiters, numberString };
    }

    // Parse numbers from string using delimiters
    parseNumbers(numberString, delimiters) {
        // Normalize delimiters to comma
        let normalizedString = numberString;
        delimiters.forEach(delimiter => {
            normalizedString = normalizedString.replaceAll(delimiter, ',');
        });
        normalizedString = normalizedString.replace(/\n/g, ',');

        // Convert to array of valid numbers
        return normalizedString
            .split(',')
            .map(num => parseInt(num.trim()))
            .filter(num => !isNaN(num));
    }

    // Validate no negative numbers, throw if found
    validateNoNegatives(numbers) {
        const negatives = numbers.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(',')}`);
        }
    }

    // Sum numbers, cubing those that appear more than twice, ignoring those > 1000
    sumNumbers(numbers) {
        // Count occurrences of each number using Map
        const numberCounts = numbers.reduce((map, num) => {
            if (num <= 1000) {
                map.set(num, (map.get(num) || 0) + 1);
            }
            return map;
        }, new Map());

        // Sum numbers based on occurrence count
        return Array.from(numberCounts).reduce((sum, [num, count]) => {
            if (count > 2) {
                // Cube the number if it appears more than twice
                return sum + Math.pow(num, 3);
            } else {
                // Add the number count times
                return sum + num * count;
            }
        }, 0);
    }

    // Return number of Add calls
    GetCalledCount() {
        return this.callCount;
    }
}

module.exports = StringCalculator;