function findLargestNumber(num1, num2, num3) {
  let largest = num1; // Assume num1 is the largest initially

  if (num2 > largest) {
    largest = num2; // Update largest if num2 is greater
  }

  if (num3 > largest) {
    largest = num3; // Update largest if num3 is greater
  }

  return largest;
}

// Test the function
const num1 = 10;
const num2 = 25;
const num3 = 15;
const largestNumber = findLargestNumber(num1, num2, num3);
console.log(`The largest number is: ${largestNumber}`);
