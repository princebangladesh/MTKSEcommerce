//============countdown start===========//
const targetDate = document.getElementById("TDate").innerHTML;
const dayText = document.getElementById("day");
const hourText = document.getElementById("hour");
const minText = document.getElementById("min");
const secText = document.getElementById("sec");

function countdown(){
    const thatDate = new Date(targetDate);
    const currentDate = new Date();
    
    const totalTime = (thatDate-currentDate)/1000;
    const days = Math.floor((totalTime/3600/24));
    const hours = Math.floor((totalTime/3600) % 24);
    const mins = Math.floor((totalTime/60) % 60);
    const secs = Math.floor((totalTime) % 60);

    dayText.innerHTML = days;
    hourText.innerHTML = hours;
    minText.innerHTML = mins;
    secText.innerHTML = secs;
}
countdown();
setInterval(countdown , 1000);
//============countdown end===========//