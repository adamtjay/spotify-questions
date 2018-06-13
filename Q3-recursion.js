const changePossibilities = (n, denominations) => {
  let combos = [];

  // for each denom, loop 1 through amount(n)

  // if sum < amount(n), subloop again (adding each denom)
  // if sum === amount(n), save the combo, break loop
  // if sum > amount(n), break loop

  // ex: 1x(10) = n, save combo
  //ex: 1x(8) < n, so subloop... 8+1 < n, still less... 8+2 = n (go to above case)

  denominations.forEach(denom => {

      for (let i=1; i<n+1; i++) {
          let sum = denom * i;
          console.log(sum);


      }

  })

}

changePossibilities(10, [1,2,3]);
// changePossibilities(4, [1,2,3]);
