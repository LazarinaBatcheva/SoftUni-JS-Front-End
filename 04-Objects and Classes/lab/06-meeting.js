function printMeetingAppointmentsInfo(meetingsArray) {
    const meetingInfo = {};

    for (const data of meetingsArray) {
        const [day, name] = data.split(' ');

        if (meetingInfo[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingInfo[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const day in meetingInfo) {
        console.log(`${day} -> ${meetingInfo[day]}`);
    }
}


// test code

printMeetingAppointmentsInfo(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
console.log();
printMeetingAppointmentsInfo(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);