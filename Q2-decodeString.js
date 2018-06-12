let encodedstr = '5[testing123]';

let parsed = encodedstr.match(/\[(.*?)\]/);

console.log(parsed[1]);
