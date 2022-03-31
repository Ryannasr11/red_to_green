let speed1 = 0;
let speed2 = 0;
const speed3 = 0;
const speed4 = 0;

let speedSensor = "time recorded: " + speed1 + "." + speed2 + speed3 + speed4 + "ms";
console.log(speedSensor);



document.querySelector("button").addEventListener('click', function(event) {
    document.querySelector("button").style.backgroundColor = '#009900';
    event.currentTarget.setAttribute("disabled", true);
    document.querySelector("section").innerHTML = speedSensor;
    
}, {
    once: true
});

const sect = document.querySelector('section');


console.log(speedSensor);
const para = document.createElement('p');
para.textContent = speedSensor;
sect.appendChild(para);

let n = 0;
while (n < 1) {
    if (clicked = 1) {
        speed1 = Math.floor(Math.random() * 20);
        speed2 = Math.floor((Math.random() * 899) + 100);
        speedSensor = "time recorded: " + speed1 + "." + speed2 + "ms";
        n = 2;
    }
}


