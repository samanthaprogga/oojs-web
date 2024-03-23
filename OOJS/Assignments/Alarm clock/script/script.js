'use strict'

document.addEventListener('DOMContentLoaded', function() {
    // Clock
    setInterval(updateTime, 1000);

    // Alarm Form
    const alarmForm = document.getElementById('alarmForm');
    alarmForm.addEventListener('submit', setAlarm);

    // Check for alarm time every second
    setInterval(checkAlarmTime, 1000);
});

let alarmHour = null;
let alarmMinute = null;

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    document.getElementById('time').textContent = timeString;
}

function setAlarm(event) {
    event.preventDefault();

    alarmHour = parseInt(document.getElementById('alarmHour').value);
    alarmMinute = parseInt(document.getElementById('alarmMinute').value);

    // Validate inputs
    if (isNaN(alarmHour) || isNaN(alarmMinute) || alarmHour < 0 || alarmHour > 23 || alarmMinute < 0 || alarmMinute > 59) {
        document.getElementById('alarmFeedback').textContent = 'Invalid input. Please enter valid hour (0-23) and minute (0-59).';
        return;
    }

    // Clear previous feedback
    document.getElementById('alarmFeedback').textContent = '';

    // Set alarm time
    const alarmTimeString = formatAlarmTime(alarmHour, alarmMinute);
    document.getElementById('alarmFeedback').textContent = `Alarm is set for ${alarmTimeString}.`;
}

function formatAlarmTime(hour, minute) {
    const period = hour < 12 ? 'AM' : 'PM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const formattedMinute = minute.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute} ${period}`;
}

function checkAlarmTime() {
    if (alarmHour !== null && alarmMinute !== null) {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        
        if (currentHour === alarmHour && currentMinute === alarmMinute) {
            document.getElementById('alarmFeedback').textContent = `It's alarm time!`;
            playAlarm();
        }
    }
}

function playAlarm() {
    const alarmSound = document.getElementById('alarmSound');
    alarmSound.play();
}
