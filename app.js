

let alarmaudio = new Audio("alarm.mp3");

const startminutes = 1;
let time = startminutes * 60;

const countdownel = document.getElementById('clock');

setInterval(updatecountdown,1000);

function updatecountdown(){
    const minutes = Math.floor(time / 60);
    let second = time % 60;

    countdownel.innerHTML =` ${minutes <1? '0': ''}  : ${second }`;
    // countdownel.innerHTML=`${minutes < 1?'0' : ''}${minutes}:${(second <1)?'0':''}${second}`;
    
    time--;
    time =time<0?'0':time;
    if (second ===1){
        alarmaudio.play();
        document.querySelector('body').style.backgroundColor='(rgb(240, 6, 6),rgba(187, 5, 5, 0.582), rgba(228, 0, 0, 0.144)';
        // document.querySelector('body').style.opacity='0.3';
        
    }

}

function mybutton(){
    location.reload();

}

















// function endCount(){
//     alarmaudio.play();
//    startminutes.innerHTML='0'+':'+'00';
//    document.querySelector('body').style.backgroundColor='blue';
//   clearInterval();
//    timeMinut.style.color='black';
// }
// const countend = minutes = 0 , second = 0;

// if (time < 0 ){
//     startminutes = 0  
//     minutes = 0  
//     clearInterval(countend)
// }

// if(minutes == 0 || second < 1){
//     endCount();
//     clearInterval();
// }


// const countDownel=setInterval( ()=>{
//     second--;
//     displayTime(second)
//     if(second == 0 || second < 1){
//     endCount();
//     clearInterval();
// }})








// let myAudio = document.querySelector('alarm.mp3');
// let timeSecond = 60;
// const timeMinut=document.querySelector('.clock');
// displayTime(60);
// const countDown=setInterval( ()=>{
//     timeSecond--;
//     displayTime(timeSecond)
//     if(timeSecond == 0 || timeSecond < 1){
//     endCount();
//     clearInterval();
// }
// },100);
// function displayTime(second){
//     const min =Math.floor(second / 60);
//     const sec =Math.floor(second % 60);
//     timeMinut.innerHTML=`${min < 0 ?'0' : ''}${min}:${(sec <0)?'0':''}${sec}`;
//   };
// function endCount(){
//     myAudio.play();
//     // winAudio.pause();
//    timeMinut.innerHTML='00'+':'+'00';
//    document.querySelector('body').style.backgroundColor='blue';
//   clearInterval();
//    timeMinut.style.color='black';
// }