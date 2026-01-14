interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

const teacher1: Teacher = {
	firstName: "Alex",
	lastName: "Terieur",
	fullTimeEmployee: true,
	location: "Fréjus",
	contract: "CDI" 
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
	firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
	return (`${firstName[0]}. ${lastName}`);
}


// Interface pour l'instance
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface pour le constructeur
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Classe qui implémente l'interface
class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;
	
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	workOnHomework(): string {
		return "Currently working"
	}

	displayName(): string {
		return this.firstName
	}
}
