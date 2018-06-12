function decodeString(s) {
  let decodedstr = '';
  let coefficient = s.match(/^[^\[,]*/);
  let parsed = s.match(/\[(.*?)\]/);

    console.log('coefficient: ', coefficient[0]);
    console.log('parsed str: ', parsed[1]);

  // Get nested coefficient (if exists -- * this will be used as the nested check);
  let innercoefficient = parsed[1].replace(/\D+/g, '');
  innercoefficient
  ? console.log('inner coefficient exists: ', innercoefficient[0])
  : console.log('nested string does not exist')



  if (!innercoefficient) {
    // No nested string exists; decode normally
    decodedstr = parsed[1].repeat(coefficient);
  } else {
    // Nested string exists; combine the inner parts together, and then decode

    // Get nested string (if exists)
    let innerstr = s.match(/\[[^[\]]*\]/);
    let innerparsed = innerstr[0].match(/\[(.*?)\]/);
      console.log('inner parsed: ', innerparsed[1]);
    // Get first outer string (if nested exists)
    let outerparsed = parsed[1].match(/.+?(?=[0-9])/);
      console.log('outer parsed: ', outerparsed[0]);

    innerdecoded = innerparsed[1].repeat(innercoefficient);
    innerconcat = outerparsed[0] + innerdecoded;
    decodedstr = innerconcat.repeat(coefficient);
  }

  console.log('** Decoded string ** : ', decodedstr);
  return decodedstr;
}

decodeString('4[ab]');
decodeString('2[b3[a]]');
