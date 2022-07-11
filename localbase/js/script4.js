'use strict';

class User{

constructor(name,age){
	this._name = name;
	this._age = age;
}

	#surname = 'Vdovenko';
	
	get surname () {
		return this.#surname;
	}
	set surname (surname) {
		this.#surname = surname;
	}

	say = ()=>{
		console.log(`User name: ${this._name} ${this.#surname}, age: ${this._age}`);
	}

	get age (){
		return this._age;
	}
	set age(age){
		if(typeof age === 'number' && age>0 && age< 130){
			this._age = age;
		} else{
			console.log("NAN")
		}
	}
}
const alex = new User('Aleksei',18);
console.log(alex.age);
alex.age = 22;
alex.say();
console.log(alex.surname);
alex.surname ='lol'
console.log(alex.surname);