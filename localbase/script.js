'use strict';

// new RegExp('pattern','flags');
// /pattern/f 

// const ans = prompt('Your number');

// const reg = /\d/igm;
// console.log(reg.test(ans));
// console.log(ans.match(reg));

const str = 'Ma name is R2D2';

 console.log(str.match(/\w\d\w\d/i));
 console.log(str.match(/\W/ig));

// \D \W \S

// \d - Цифры \w буквы \s пробелы
// // i - без регистра g-глобал m - многострочный
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g,"*"));

// console.log('12-34-56'.replace(/-/g, ':'));

