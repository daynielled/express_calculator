const ExpressError = require("./expressError");

const convertStringToNumbers = (nums) => {
  return nums.split(',').map(Number);
};

const calculateMean = (numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  let result = sum / numbers.length;
  return result
};

const calculateMedian = (numbers) => {

  const sortedNumbers = numbers.sort((a, b) => a - b);
  const mid = Math.floor(numbers.length / 2);
  let result = numbers.length % 2 === 0
    ? (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
    : sortedNumbers[mid];
  return result
};

const calculateMode = (numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);

  const frequencyMap = {};
  let maxFrequency = 0;
  let mode;

  sortedNumbers.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mode = num;
    }
  });

  return mode;
};

const handleErrors = (req, res, next) => {
  const nums = req.query.nums;

  if (!nums) {
    return next(new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400));
  }

  req.numbers = convertStringToNumbers(nums);

  if (req.numbers.some(isNaN)) {
    return next(new ExpressError('Invalid number in nums.', 400));
  }
 
  next();
};

module.exports = { calculateMean, calculateMedian, calculateMode, handleErrors };



