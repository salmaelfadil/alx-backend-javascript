interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

interface studentClassConstructor {
    new (firstName: string, lastName: string): studentClassInterface;
}

interface studentClassInterface {
    workOnHomework(): string;
    displayName(): string;   
}

class StudentClass{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return "Currently Working"
    }
    displayName(){
        return this.firstName
    }
}
const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName());