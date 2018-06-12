let encodedstr = '4[testing123]';

let coefficient = encodedstr.match(/^[^\[,]*/);

let parsed = encodedstr.match(/\[(.*?)\]/);


let decodedstr = parsed[1].repeat(coefficient);


console.log(decodedstr);


// console.log(coefficient[0]);
//
// console.log(parsed[1]);
