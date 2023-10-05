
//Робота з класами

// Спроєктуєте інтерфейс StudentDAta з полями name, studentID, major
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.

interface IStudentDAta {
    name: string;
    studentID: number;
    major: string;
}

class Student implements IStudentDAta{
    name: string;
    studentID: number;
    major: string;

    constructor(name: string, studentID: number, major: string){
        this.name = name;
        this.studentID = studentID;
        this.major = major;
    }

    introduce():string{
        return `My name ${this.name} my ID ${this.studentID} and my major is ${this.major}!`
    }
}

const student = new Student('John Doe', 12345, 'Computer Science');
console.log(student.introduce());