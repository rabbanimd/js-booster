const newYears = new Date(2022, 0, 1);
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    var diffinmil = (newYearsDate.getTime() - currentDate.getTime())/1000;

    const days = Math.trunc(diffinmil/86400);
    diffinmil %= 86400;
    const hours = Math.trunc(diffinmil/3600);
    diffinmil %=3600;
    const minutes = Math.trunc(diffinmil/60);
    diffinmil %= 60;
    const seconds = Math.trunc(diffinmil);

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minutesEl.innerHTML=minutes;
    secondsEl.innerHTML=seconds;


}

countdown();

setInterval(countdown, 1000);