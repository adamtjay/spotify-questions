let value = 10;
let denominations = [1,2,3];

let result = [];

let originalArray = [];

// decreasing loop through denominations, call main function for each, using as the root
for(let i = denominations.length - 1; i >= 0; i = i - 1) {
  // start function call with root, no recursive repeats
  getCombinations(value, denominations, result, denominations[i], originalArray.splice(), 0, false)
  }

let filteredArray = [];

for(let xx = 0; xx<result.length; xx = xx+1) {
  filteredArray[xx] = result[xx].toString()
  }

  let resultSet = []

  filteredArray.forEach(result => {
    // sort the contents of the result strings
    sortedres = result.split(',').sort().join()
    // if there are no duplicates in resultset, add combo to results
    if (resultSet.indexOf(sortedres) === -1) {
      resultSet.push(sortedres)
    }
  })

  resultSet.sort()

console.log('* # of Combos: ', resultSet.length)
console.log('* Combos: \n', resultSet)



function getCombinations(totalValue, denominations, result, root, originalArray, pos, repeat)
  {

  let tempSum = 0;
  let tempResults = [];
  // i represents the main outer loop
  let i = denominations.indexOf(root);
  // f represents where you are in the denomination array
  let f = denominations.indexOf(root);

  while(i >= 0)  {
    // starts with tempsum being = to the root

    // in beginning when tempsum is 0, add root value to it
    if(tempSum === 0) {
      tempSum = tempSum + root;
      tempResults.push(root);
    }

    // adding next value in denominations array to the original root
    tempSum = tempSum + denominations[f];
    tempResults.push(denominations[f]);

    // if sum causes it to go over total, take it back out of the array and back out of that loop iteration
    if(tempSum > totalValue)  {
      tempSum = tempSum - denominations[f];
      tempResults.pop();
      f = f-1
      continue;
    }

    // subtract i to make the loop continue descending
    f = denominations.indexOf(root) - i

    // after a successful match (ex: 4), remove that and then replace that with complements (ex: 3 + 1)
    if(tempSum === totalValue) {

      if(originalArray) {
        // remove value from arr, to be replaced with a new combo
        originalArray.splice(pos, 1)

        for(let y = 0; y < tempResults.length; y = y+1) {
          // insert values from tempresults into originalarray
          originalArray.splice(1, 0, tempResults[y])
        }

        result.push(new Array(originalArray.slice()));
        tempResults = originalArray;
      }
      else {
        // create clone of the tempresults via slice, and push it the results array
        result.push(new Array(tempResults.slice()));
      }

      // change the target sum value by decreasing by 1, pass results, and re-run the function with repeat=true
      for(let x = 1; x < tempResults.length; x = x + 1) {
        // if result value is anything but 1, try breaking it down into smaller complement numbers
        if(tempResults[x] != 1) {
          getCombinations(tempResults[x], denominations, result,
              denominations[denominations.indexOf(tempResults[x]) - 1],tempResults, x, true)
        }
      }

      originalArray = []
      tempResults = []
      tempSum = 0

      // base case avoids infinite loops via recursion -- final call will still have repeat=false
      if(repeat) {
        break;
      }

      i = i - 1

    }
  }
}
