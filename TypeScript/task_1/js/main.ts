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