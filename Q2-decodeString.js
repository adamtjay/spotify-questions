function decodeString(s) {
  let coefficient = s.match(/^[^\[,]*/);
  let parsed = s.match(/\[(.*?)\]/);

  let decodedstr = parsed[1].repeat(coefficient);
  // console.log(decodedstr);

  console.log('coefficient: ', coefficient[0]);
  console.log('parsed str: ', parsed[1]);

  // Get nested string (if exists)
  let innerstr = s.match(/\[[^[\]]*\]/);
  let innerparsed = innerstr[0].match(/\[(.*?)\]/);
  console.log('inner parsed: ', innerparsed[1]);
  // Get nested coefficient (if exists);
  let innercoefficient = parsed[1].replace(/\D+/g, '');
  console.log('inner coefficient: ', innercoefficient[0])


  if (!innercoefficient) {
    // No nested str
    console.log('no nested str');
  } else {
    // Nested str detected
    console.log('nested str detected');
  }

  return decodedstr;
}

// decodeString('4[ab]');
decodeString('2[b3[a]]');
