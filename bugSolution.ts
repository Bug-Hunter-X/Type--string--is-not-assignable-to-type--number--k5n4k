function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numB)) {
    return NaN; // Handle invalid input
  }
  return a + numB;
}

const result1 = add(5, 10); // Correct
const result2 = addSafe(5, '10'); // Correct
const result3 = addSafe(5, 'abc'); //Correct, handles invalid input
console.log(result1, result2, result3); // Output: 15 15 NaN