let value = 9

let denominations = [1,2,3,4,5]

let result = new Array()

let originalArray = new Array()

for(let i = denominations.length - 1; i >= 0; i = i - 1){

  getCombinations(value, denominations, result, denominations[i], originalArray.splice(), 0)

}

console.log(result)





function getCombinations(totalValue, denominations, result, root, originalArray, pos)

{

  let tempSum = 0;

  let tempResults = new Array();

  let i;

  i = denominations.indexOf(root);

  while(i >= 0)

  {

    if(tempSum === 0)

    {

      tempSum = tempSum + root;

      tempResults.push(root);

    }



    tempSum = tempSum + denominations[i];

    tempResults.push(denominations[i]);

    if(tempSum === totalValue)

    {



      if(originalArray !== undefined)

      {

        originalArray.splice(pos, 1)

        for(let y = 0; y < tempResults.length; y = y+1){

          originalArray.splice(1, 0, tempResults[y])

        }

        result.push(new Array(originalArray.slice()));

        tempResults = originalArray;

      }

      else

      {

        result.push(new Array(tempResults.slice()));

      }

      for(let x = 1; x < tempResults.length; x = x + 1){

        if(tempResults[x] !== 1){

          getCombinations(tempResults[x], denominations, result, denominations[denominations.indexOf(tempResults[x]) - 1],tempResults, x)

        }

      }

      originalArray = []

      tempResults = []

      break;

    }



    if(tempSum > totalValue)

    {

      tempSum = tempSum - denominations[i];

      tempResults.pop();

      i = i - 1

      continue;

    }



  }

}
