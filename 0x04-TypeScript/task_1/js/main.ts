interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));


interface Constructor {
    new (firstName: string, lastName: string): ClassInterface;
}

interface ClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements ClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Create instances of StudentClass using the Constructor interface
const StudentConstructor: Constructor = StudentClass;
const student1 = new StudentConstructor('John', 'Doe');

// Call methods on the instances
console.log(student1.displayName()); // Output: John
console.log(student1.workOnHomework()); // Output: Currently working