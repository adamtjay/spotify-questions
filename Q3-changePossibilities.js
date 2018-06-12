function changePossibilities(amount, denominations) {
    combos = [];

    denominations.forEach(denom => {
      // get #'s complement
      let complement = amount - denom;
      // check if complement exists in denominations arr
      if (denominations.indexOf(complement) > -1) {
          // create combo as values, sorted (to avoid duplicates), into a string (for indexOf check to work)
          let combo = [denom, complement].sort().toString();
          // if combo isn't already in the combos array, add it
          if (combos.indexOf(combo) === -1) {
            combos.push(combo);
          }
        }
      // double-nested check to see if any other denominations equal that complement #
      denominations.forEach(subdenom => {
          denominations.forEach(subsubdenom => {
            if (subdenom + subsubdenom === complement) {
              // another combo equaling to that same complement # is available
              let combo = [denom, subdenom, subsubdenom].sort().toString();
              // if combo doesn't already exist in arr, add it
              if (combos.indexOf(combo) === -1) {
                combos.push(combo);
              }
            }
          })
      })

      

    })

    console.log('Combos: ', combos);
    console.log('# of combos: ', combos.length)
}

changePossibilities(4, [1,2,3]);
