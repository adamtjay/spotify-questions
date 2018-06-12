function changePossibilities(amount, denominations) {
    combos = [];

    denominations.forEach(denom => {
      // get #'s complement, check if it's in arr
      let complement = amount - denom;
      if (denominations.indexOf(complement) > -1) {
        // create combo as sorted values (to avoid duplicates), into a string (for indexOf)
        let combo = [denom, complement].sort().toString();
        // if combo isn't already in the combos array, add it
        if (combos.indexOf(combo) === -1) {
          combos.push(combo);
        }
      }

    })

    console.log('Combos: ', combos);
}

changePossibilities(4, [1,2,3]);
