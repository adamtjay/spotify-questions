function sortByString(s, t) {
  let chars = s.split("");
  chars.forEach(char => {
      t.indexOf(char) > -1
        ? console.log(char, 'exists')
        : console.log(char, 'does not exist')
  })
}

sortByString('good', 'odg');
