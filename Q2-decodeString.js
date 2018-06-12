function decodeString(s) {
  let decodedstr = '';
  let coefficient = s.match(/^[^\[,]*/);
  let parsed = s.match(/\[(.*?)\]/);

  console.log('coefficient: ', coefficient[0]);
  console.log('parsed str: ', parsed[1]);

  // Get nested string (if exists)
  let innerstr = s.match(/\[[^[\]]*\]/);
  let innerparsed = innerstr[0].match(/\[(.*?)\]/);
  console.log('inner parsed: ', innerparsed[1]);
  // Get nested coefficient (if exists -- will be used as the nested check);
  let innercoefficient = parsed[1].replace(/\D+/g, '');
  console.log('inner coefficient: ', innercoefficient[0])
  // let outerparsed = parsed[1].replace(/\d+/g, '');
  let outerparsed = parsed[1].match(/.+?(?=[0-9])/);
  console.log('outer parsed: ', outerparsed[0]);


  if (!innercoefficient) {
    // No nested string exists
    decodedstr = parsed[1].repeat(coefficient);
  } else {
    // Nested string exists

  }

  console.log('decoded str: ', decodedstr);
  return decodedstr;
}

// decodeString('4[ab]');
decodeString('2[b3[a]]');
