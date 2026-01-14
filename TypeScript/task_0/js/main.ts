interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
  firstName: "Alex",
  lastName: "Terieur",
  age: 30,
  location: "Dedans"
};
const student2: Student = {
  firstName: "Alain",
  lastName: "Terieur",
  age: 30,
  location: "Dehors"
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
	const line1: HTMLTableCellElement = document.createElement("td");
	const line2: HTMLTableCellElement = document.createElement("td");

	line1.textContent = student.firstName;
  line2.textContent = student.location;

	row.appendChild(line1);
	row.appendChild(line2);

	table.appendChild(row);
});

document.body.appendChild(table);
