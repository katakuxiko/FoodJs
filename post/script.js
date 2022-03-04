'use strict';

// console.log('Запрос данных ...');

// const req = new Promise(function(resolve, reject) {
// 	setTimeout(function() {
// 	console.log('Подготовка данных...');

// 	const product = {
// 		name: 'tv',
// 		price:2000
// 	}; 
// 	resolve(product);
// },2000);
// });

// req.then((product)=>{
// 	console.log('Данные получены');
// },2000);

// req.then((product)=>{
// 	return new Promise(function(resolve,reject) {
// 		setTimeout(function() {
// 		product.status = 'order';
// 		resolve(product);
		
// 	},2000);
// }).then(data => {
// 	data.modify = true;
// 	return data;
// }).then((data) => {
// 	console.log(data);
// });
	
// }).catch(()=>{
// 	console.error('Произошла ошибка');
// }).finally(() => {
// 	console.log('Finally');
// });

const test = time=>{
	return new Promise((resolve) => {
		setTimeout(() => resolve(),time);
	});
};
// test(4000).then(()=> console.log('1000ms'));
// test(8000).then(()=> console.log('2000ms'));
Promise.all([test(1000),test(3000)]).then(()=> console.log('ALl'));
Promise.race([test(1000),test(3000)]).then(()=> console.log('ALl'));
