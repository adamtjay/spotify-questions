function decodeString(s) {
  let coefficient = s.match(/^[^\[,]*/);
  let parsed = s.match(/\[(.*?)\]/);

  let decodedstr = parsed[1].repeat(coefficient);

  // console.log(decodedstr);
  console.log('coefficient: ', coefficient[0]);
  console.log('parsed str: ', parsed[1]);

  let inner = s.match(/\[[^[\]]*\]/);
  let innerparsed = inner[0].match(/\[(.*?)\]/);
  console.log('inner parsed: ', innerparsed[1])

  return decodedstr;
}

// decodeString('4[ab]');
decodeString('2[b3[a]]');
