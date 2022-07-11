'use strict';

// localStorage.setItem('number',5);

// localStorage.getItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
	  form = document.querySelector('form'),
	  change = document.querySelector('#color');

if (localStorage.getItem('isChek')){
	checkbox.checked = true;
}
if (localStorage.getItem('bg')==='changed'){
		form.style.backgroundColor = 'red';
	}


checkbox.addEventListener('change', ()=>{
	localStorage.setItem('isChek',true);
});

change.addEventListener('click', ()=>{
	if (localStorage.getItem('bg')==='changed'){
		localStorage.removeItem('bg');
		form.style.backgroundColor = 'white';
	}
	else{
		localStorage.setItem('bg','changed');
		form.style.backgroundColor = 'red';
	}
});

const persone = {
	name: 'Alex',
	age: 18
};

const serializedPerson = JSON.stringify(persone);
localStorage.setItem('persone',serializedPerson);
console.log(localStorage.getItem('persone'))
