/* This function takes an array and calculates the ratios of its elements
that are positive, negative, and zero.
and Printes the decimal value of each fraction on a new line with 6 places after the decimal.*/

function PlusMinus(array) {
  
  // Initialize variables to count the number of each type of value
  
  let positive = 0;
  let nigative = 0;
  let zero = 0;

  // Loop through the array and increment the corresponding counter for each value
  
  array.forEach(num => {
    if (num > 0) {
      positive++;
    } else if (num < 0){
      nigative++;
    } else{
      zero++;
    }
  });

  // Calculate the ratios of each value
  
  const positiveRatio = positive / array.length;
  const negativeRatio = nigative / array.length;
  const zeroRatio = zero / array.length;

  // Output the ratios to six decimal places
  
  console.log(Number(positiveRatio).toFixed(6));
  console.log(Number(negativeRatio).toFixed(6));
  console.log(Number(zeroRatio).toFixed(6));
}
