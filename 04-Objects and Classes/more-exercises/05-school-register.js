function printSchoolRegister(studentsInfoList) {
    const schoolRegister = {};

    studentsInfoList.forEach(studentInfo => {
        const [name, grade, score] = studentInfo
                                            .split(', ')
                                            .map(item => item.split(': ')[1]);
        if (parseFloat(score) >= 3) {
            const nextGrade = parseInt(grade) + 1;
            if (!schoolRegister[nextGrade]) {
                schoolRegister[nextGrade] = {names: [], totalScore: 0, count: 0};
            }
            schoolRegister[nextGrade].names.push(name);
            schoolRegister[nextGrade].totalScore += parseFloat(score);
            schoolRegister[nextGrade].count++;
        }
    });

    for (const grade in schoolRegister) {
        const {names, totalScore, count} = schoolRegister[grade];
        const averageScore = (totalScore / count).toFixed(2);

        console.log(`${grade} Grade`);
        console.log(`List of students: ${names.join(', ')}`);
        console.log(`Average annual score from last year: ${averageScore}`);
        console.log();
    }
}


// function printSchoolRegister(studentsInfoList) {
//     const schoolRegister = {};

//     for (const student of studentsInfoList) {
//         const parts = student.split(', ');
//         const name = parts[0].split(': ')[1];
//         const nextGrade = parseInt(parts[1].split(': ')[1]) + 1;
//         const averageScore = parseFloat(parts[2].split(': ')[1]);

//         if (averageScore < 3) {
//             continue;
//         }

//         if (!schoolRegister[nextGrade]) {
//             schoolRegister[nextGrade] = {names: [], score: 0};
//         }

//         schoolRegister[nextGrade].names.push(name);
//         schoolRegister[nextGrade].score += averageScore;

//     }

//     for (const grade in schoolRegister) {
//         const students = schoolRegister[grade].names.join(', ');
//         const classAverageScore = (schoolRegister[grade].score / schoolRegister[grade].names.length).toFixed(2);

//         console.log(`${grade} Grade`);
//         console.log(`List of students: ${students}`);
//         console.log(`Average annual score from last year: ${classAverageScore}`)
//         console.log();
//     }
// }


// test code

printSchoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    );

console.log('---------------------');

printSchoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
    );
