function sortByString(s,t) {
  let newstring = '';
  let check = [];

  for (let char of s) {
    !check[char]
      // If char does not exist already in the hash array, create a key-value showing that it appeared 1 time
      ? check[char] = 1
      // If it is already existing, increment its value by 1 to account for duplicate letters
      : check[char]++
  }

  for (let char of t) {
    if (check[char]) {
      // Concat onto the new string based on total # of times the letter appeared
      newstring += char.repeat(check[char]);
    }
  }

  console.log(newstring);
  return newstring;
}


sortByString('good', 'odg');
sortByString('weather', 'therapyw');
