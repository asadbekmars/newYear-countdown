const body = document.body
const endTime = new Date('December 31 2021 23:59:59')
const daysE1 = document.getElementById('days')
const hoursE1 = document.getElementById('hours')
const minutesE1 = document.getElementById('minutes')
const secondsE1 = document.getElementById('seconds')



setInterval(updateCountdown, 1000)
setInterval(createSnowFlake, 50);


function updateCountdown() {
    const startTime = new Date()
    const diff = endTime - startTime
    const days = Math.floor(diff / 1000 / 60 / 60 / 24)
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diff / 1000 / 60) % 60
    const seconds = Math.floor(diff / 1000) % 60
    daysE1.innerHTML = days
    hoursE1.innerHTML = hours < 10 ? '0' + hours : hours
    minutesE1.innerHTML = minutes < 10 ? '0' + minutes : minutes
    secondsE1.innerHTML = seconds < 10 ? '0' + seconds : seconds
}



function createSnowFlake() {
    const snowflake = document.createElement('i');
    snowflake.classList.add('far');
    snowflake.classList.add('fa-snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000)
}