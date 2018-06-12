let encodedstr = '5[testing123]';

let coefficient = encodedstr.match(/^[^\[}),]*/);

let parsed = encodedstr.match(/\[(.*?)\]/);


console.log(coefficient[0]);

console.log(parsed[1]);
