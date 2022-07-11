'use strict';

const person = {
	name: 'John',
	age: 21,

	get userAge() { return this.age;},
	set userAge(age) { this.age = age},
};

console.log(person.userAge);
person.userAge=18;
console.log(person.userAge);