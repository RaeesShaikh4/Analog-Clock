setInterval(() =>{
    d = new Date();
    hourTime = d.getHours();
    minuteTime = d.getMinutes();
    secondTime = d.getSeconds();

    hrRotation = 30*hourTime + minuteTime/2;
    mntRotation = 6*minuteTime;
    secRotation = 6*secondTime;

    hour.style.transform = `rotate(${hrRotation}deg)`;
    minute.style.transform = `rotate(${mntRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;

},1000)