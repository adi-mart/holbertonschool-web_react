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
