const ExpressError = require("./expressError");


const calculateMean = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  };
  
  const calculateMedian = (numbers) => {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);
    return numbers.length % 2 === 0
      ? (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
      : sortedNumbers[mid];
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
  
  const handleErrors = (req,res,next) => {
    const nums = req.query.nums;

    if (!nums){
        return next(new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400));
    }
    const numbers = nums.split(',').map(Number);
    if(numbers.some(isNaN)) {
        return next(new ExpressError('Invalid number in nums.', 400));
    }
    req.numbers = numbers;
    next();
};

module.exports = { calculateMean, calculateMedian, calculateMode, handleErrors };
  


