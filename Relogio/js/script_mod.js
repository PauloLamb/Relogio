const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const getTime = () => {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),   
        
        // hours:12,
        // minutes:0,
        // seconds:45, 
    
    }
}

setInterval(() => {
    const { hours, minutes, seconds } = getTime();
    
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6 + seconds * 0.1}deg)`;
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30 + minutes * 0.5}deg)`;
}, 100);