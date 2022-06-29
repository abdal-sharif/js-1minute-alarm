let alarmaudio = new Audio("alarm.mp3");

const startminutes = 1;
let time = startminutes * 60;

const countdownel = document.getElementById('clock');

setInterval(updatecountdown,1000);

function updatecountdown(){
    const minutes = Math.floor(time / 60);
    let second = time % 60;

    countdownel.innerHTML =` ${minutes} : ${second}`;
    time--;
}

const stopTime = minutes = 0 + second == 00; 

function mybutton(){
    location.reload();
}


 if (time = stopTime){
    alarmaudio.play;

 }