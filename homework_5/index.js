// Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be: 
// Academy

// Name - string
// Students - array of Students
// Subjects - array of Subjects
// Start - Date when it starts
// End - Date when it ends
// NumberOfClasses - number of subjects * 10, not settable
// PrintStudents - method that prints all students in console
// PrintSubjects - method that prints all subjects in console

// Subject

// Title - string
// NumberOfClasses - default 10, not settable
// isElective - boolean
// Academy - Academy object
// Students - array of Students
// OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number.
//  The number can't be smaller than 3.
// Student

// FirstName - string
// LastName - string
// Age - number
// CompletedSubjects - emptyArray as default, not settable
// Academy - null as default, not settable
// CurrentSubject - null as default, not settable
// StartAcademy - accepts Academy object that it sets to the Academy property of the student
// StartSubject - accepts Subject object and adds it to the CurrentSubject property but only 
// if the student has an Academy object in the Academy property and that subject exists in the academy. 
// If not, give error in console and do not set the CurrentSubject property

// Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.

// StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property
//  Students ( The academy that he is starting )

// StartSubject - When the student calls StartSubject the student should also be added to the Subject property 
// Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, 
// that subject should be transferred to CompletedSubjects and then add the new Subject


function Academy(name, subjectArr, start, end ){
    this.name = name;
    this.studentsArr = [];
    this.subjectArr = subjectArr; 
    this.start = start;
    this.end = end;
    numberOfClasses = 10;
    this.printStudents = function (){
        console.log(this.studentsArr)
    }
    this.printSubject = function(){
        console.log(this.subjectArr)
    }

}
let programingAcc = new Academy('programing', ['js', 'html', 'css'], '10.05.2023', '10.06.2023')

function Subject(title, isElective, academy){
    this.title = title;
     this.numberOfClasses = 10;
     this.isElective = isElective;
     this.academy = academy;
     this.studentsArr = []; 
     this.overrideClasses = function (number) {
        number < 3 ?  alert('not a valid number') : this.numberOfClasses = number;
     }
}

function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjectsArr = [];
    this.academy = null; 
    this.currentSubject = null; 
    this.startAcademy = function(accademy){ 
        accademy.studentsArr += `${this.firstName} ${this.lastName}, `;
        this.academy = accademy; 
        };
    this.startSubject = function(subject){ 
        subject.studentsArr += `${this.firstName} ${this.lastName}`
        if (this.currentSubject !== null)
         { this.completedSubjectsArr += this.currentSubject}  
         this.currentSubject = subject.title;
        
    }
}
let mitko = new Student('mitko', 'veljusliev', 39)
let goce = new Student('goce', 'delcev', 105)
let dame = new Student('dame', 'gruev', 110)
let jsAdvanced = new Subject('jsAdvanced', 25, false, 'SEDC')
let jsBasic = new Subject('jsBasic', 20, false, 'SEDC')
mitko.startSubject(jsAdvanced);
mitko.startSubject(jsBasic);

mitko.startAcademy(programingAcc)
dame.startAcademy(programingAcc)
console.log(mitko);
console.log(dame)
console.log(programingAcc.studentsArr)

// zosto koga sakav na array vo objektite za  studentArr gi prepoznavase samo kako [object, object]


// let proba = [];
// let vase = {
//     name: 'vaska',
//     secondName : 'vasevska',
//     age: 30
// }
// proba.push(vase);
// console.log(proba)




