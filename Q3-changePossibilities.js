const changePossibilities = (n, denominations) => {

  // for each denom, loop 1-through-amount(n)

  // if sum < amount(n), subloop again (adding each denom)
  // if sum === amount(n), save the combo, break loop
  // if sum > amount(n), break loop

  // ex: 1x(10) = n, save combo
  //ex: 1x(8) < n, so subloop... 8+1 < n, still less... 8+2 = n (go to above case)

  let combos = [];
  let sum = 0;

  denominations.forEach(denom => {

      for (let i=1; i<n+1; i++) {
          sum = denom * i;

          // if sum === amount(n), save the combo, break loop
          if (sum === n) {
              let comboarr =[];
              for (let x=0; x<i; x++) {
                  comboarr.push(denom);
              }
              let combo = comboarr.sort().toString();
              // if combo doesn't already exist in arr, add it
              if (combos.indexOf(combo) === -1) {
                combos.push(combo);
              }
          }

          // if sum < amount(n), subloop again (adding each denom)
          if (sum < n) {
            denominations.forEach(subdenom => {
                let newsum = sum + subdenom;
                // *** if LESS than n, need to recursively do it over again
                if (newsum === n) {
                      // console.log('match: ', sum, subdenom)
                    let comboarr =[];
                    // repeat the # by the amount of times it was multiplied (ex: 1x(8)+2 => 1, 8 times)
                    for (let x=0; x<i; x++) {
                        comboarr.push(denom);
                    }
                    comboarr.push(subdenom);
                    let combo = comboarr.sort().toString();
                    // if combo doesn't already exist in arr, add it
                    if (combos.indexOf(combo) === -1) {
                      combos.push(combo);
                    }
                  }
              })
          }

          // if sum < amount(n), subloop again (adding each denom)
          if (sum > n) {
            break;
          }


      }

    })
    console.log('Combos: ', combos);
}

changePossibilities(10, [1,2,3,4,5]);
// changePossibilities(4, [1,2,3]);
