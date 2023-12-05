
const {
    calculateMean,
    calculateMedian,
    calculateMode,
  } = require('./helpers');
  
  describe('calculateMean', () => {
    test('calculates mean correctly for an array of numbers', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = calculateMean(numbers);
  
      expect(result).toBe(3);
    });
  
    test('calculates mean correctly for an array with a single number', () => {
      const numbers = [5];
      const result = calculateMean(numbers);
  
      
      expect(result).toBe(5);
    });
  
   
  });
  
  describe('calculateMedian', () => {
    test('calculates median correctly for an array of even length', () => {
      const numbers = [1, 2, 3, 4];
      const result = calculateMedian(numbers);
  
     
      expect(result).toBe(2.5);
    });
  
    test('calculates median correctly for an array of odd length', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = calculateMedian(numbers);
  
   
      expect(result).toBe(3);
    });
  
  
  });
  
  describe('calculateMode', () => {
    test('calculates mode correctly for an array with a single mode', () => {
      const numbers = [1, 2, 2, 3, 4, 4, 4];
      const result = calculateMode(numbers);
  
      
      expect(result).toBe(4);
    });
  
    test('calculates mode correctly for an array with multiple modes', () => {
      const numbers = [1, 2, 2, 3, 3, 4, 4];
      const result = calculateMode(numbers);
  
      
      expect([2, 3, 4]).toContain(result);
    }); 
    
  });
  