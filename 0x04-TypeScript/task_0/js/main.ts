interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Bob",
    lastName: "Sam",
    age: 23,
    location: "Nairobi"
}

const student2: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "San Francisco"
}

const studentList: Student[] = [student1, student2];

document.addEventListener('DOMContentLoaded', () => {
    const table = document.createElement('table');

    const headerRow = table.insertRow();
    const headerFirstName = headerRow.insertCell();
    headerFirstName.textContent = 'First Name';
    const headerLocation = headerRow.insertCell();
    headerLocation.textContent = 'Location';

    studentList.forEach((student) => {
        const row = table.insertRow();
        const cellFirstName = row.insertCell();
        cellFirstName.textContent = student.firstName;
        const cellLocation = row.insertCell();
        cellLocation.textContent = student.location;
    });

    document.body.append(table);
})