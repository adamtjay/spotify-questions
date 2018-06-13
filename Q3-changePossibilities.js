let value = 9;
let denominations = [1,2,3,4,5];

let result = [];

let originalArray = [];

for(let i = denominations.length - 1; i >= 0; i = i - 1) {
  getCombinations(value, denominations, result, denominations[i], originalArray.splice(), 0, false)
  }

let filteredArray = [];

for(let xx = 0; xx<result.length; xx = xx+1) {
  // result[xx] = result[xx][0].sort()
  filteredArray[xx] = result[xx].toString()
  }

filteredArray = filteredArray.filter(function(item, pos) {
    return filteredArray.indexOf(item)== pos;
  }).sort();

console.log('# of Combos: ', filteredArray.length)
console.log('Combos: ', filteredArray)



function getCombinations(totalValue, denominations, result, root, originalArray, pos, repeat)
  {

  let tempSum = 0;
  let tempResults = [];
  let i = denominations.indexOf(root);
  let f = denominations.indexOf(root);

  while(i >= 0)  {
    if(tempSum === 0) {
      tempSum = tempSum + root;
      tempResults.push(root);
    }

    tempSum = tempSum + denominations[f];
    tempResults.push(denominations[f]);

    if(tempSum > totalValue)  {
      tempSum = tempSum - denominations[f];
      tempResults.pop();
      f = f-1
      continue;
    }

    f = denominations.indexOf(root) - i

    if(tempSum === totalValue) {

      if(originalArray) {
        originalArray.splice(pos, 1)

        for(let y = 0; y < tempResults.length; y = y+1) {
          originalArray.splice(1, 0, tempResults[y])
        }

        result.push(new Array(originalArray.slice()));
        tempResults = originalArray;
      }
      else {
        result.push(new Array(tempResults.slice()));
      }

      for(let x = 1; x < tempResults.length; x = x + 1) {
        if(tempResults[x] !== 1) {
          getCombinations(tempResults[x], denominations, result, denominations[denominations.indexOf(tempResults[x]) - 1],tempResults, x, true)
        }
      }

      originalArray = []
      tempResults = []
      tempSum = 0

      if(repeat) {
        break;
      }

      i = i - 1

    }
  }
}
