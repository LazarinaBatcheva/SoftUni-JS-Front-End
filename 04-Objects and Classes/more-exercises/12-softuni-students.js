function storeSoftUniCoursesInfo(data) {
    const coursesInfo = {};

    data.forEach(line => {
        if (line.includes('joins')) {
            const [_, username, creditsString, email, courseName] = line.match(/(\w+)\[(\d+)\] with email (\S+) joins (.+)/);
            const credits = Number(creditsString);

            if (courseName in coursesInfo 
                && coursesInfo[courseName].capacity > 0) {
                coursesInfo[courseName].students.push({username, email, credits})
                coursesInfo[courseName].capacity--;
            }
        } else {
            const [courseName, capacityString] = line.split(': ');
            const givenCapacity = Number(capacityString);

            if (!coursesInfo[courseName]) {
                coursesInfo[courseName] = {capacity: 0, students: []};
            }

            coursesInfo[courseName].capacity += givenCapacity;
        }
    });

    Object.entries(coursesInfo)
        .sort((a, b) => b[1].students.length - a[1].students.length)
        .forEach(([course, students]) => {
            console.log(`${course}: ${students.capacity} places left`);
            students.students
            .sort((a, b) => b.credits - a.credits)
            .forEach(student => console.log(`--- ${student.credits}: ${student.username}, ${student.email}`));
        });
}


// test code

storeSoftUniCoursesInfo(['JavaBasics: 2', 
'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 
'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 
'user13[50] with email user13@user.com joins JSCore', 
'user1[25] with email user1@user.com joins JSCore', 
'user8[18] with email user8@user.com joins C#Advanced', 
'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 
'user11[3] with email user11@user.com joins JavaBasics', 
'user45[105] with email user45@user.com joins JSCore', 
'user007[20] with email user007@user.com joins JSCore', 
'user700[29] with email user700@user.com joins JSCore', 
'user900[88] with email user900@user.com joins JSCore']);

console.log('-----------------------------');

storeSoftUniCoursesInfo(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore']
);
