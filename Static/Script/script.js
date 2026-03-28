const updateClock = () => {
    const now = new Date();

const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
const currentDay = days[now.getDay()];

let hours = now.getHours();
const minutes = String(now.getMinutes()).padStart(2,'0');
const seconds = String(now.getSeconds()).padStart(2,'0');
let ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;

document.getElementById('day').textContent = currentDay;
document.getElementById('hours').textContent = String(hours).padStart(2,'0');
document.getElementById('minutes').textContent = minutes;
document.getElementById('seconds').textContent = seconds;
document.getElementById('ampm').textContent = ampm;

};

setInterval(updateClock,1000);
updateClock();