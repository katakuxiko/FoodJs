'use strict';

//filter 

// const names = ['Ivan','Vennes','Rulesd','AlexeyV','Xeno'];

// const shortNames = names.filter((name) => {
// 	return name.length<5;
// });

// console.log(shortNames);


// map 

// let answers = ['Ivan','ASDd', 'HeLLo'];

// answers = answers.map((answer) =>  answer.toLocaleLowerCase());
// console.log(answers);

// every/some

// const some =['4','qqw','sdsdasd'];

// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'string'));


//reduce сложение всех елемнтов

// const numbers = ['LOL','pear','ssda',"sdassdas"];
// const res = numbers.reduce((sum,current)=> `${sum}, ${current}`);

// console.log(res);

const obj = {
	ivan: 'persone',
	ann:'persone',
	dog:'animal',
	cat:'animal'
};

const newArr = Object.entries(obj)
.filter((item) =>{
	return item[1] == 'persone'; 
})
.map((item) => item[0]);


console.log(newArr);

