function sortByString(s,t) {
  let newstring = '';
  let check = [];

  for (let char of s) {
    !check[char]
      // If char does not exist already in arr, create a key-value of 1vfor it
      ? check[char] = 1
      // If char already has an existing key-value in the check arr, increment that # to account for duplicate letters
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
