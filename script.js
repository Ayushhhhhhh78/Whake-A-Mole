//elements selection *start*
const mole = document.getElementsByClassName('mole');
const moleBox = document.getElementsByClassName('hide');
const highScore = document.getElementById('h_scr');
const time = document.querySelector('.timer');
//elements selection *end*

//game variables *start*
let speed = 2000;
let scr = 0;
let hi_scr = localStorage.getItem('high') || 0;
let timer = 60;
let timer_border = 0;
//game variables *end*

//setting default *start*
highScore.innerHTML = hi_scr;
//setting default *end*

//setting up absolutes *start*
document.querySelector('.fa-circle-info').addEventListener('mouseover', () => {
    document.querySelector('.info').style.display = 'flex';
});;
document.getElementById('rm').addEventListener('click', () => {
    document.querySelector('.info').style.display = 'none';
});
document.querySelector('#seti').addEventListener('click', () => {
    document.getElementById('set').style.display = 'block';
});
const save = () => {
    location.reload();
}
//setting up absolutes *end*

//game end function *start*
const handleGameEnd = () => {
    alert('Game Ended !!');
    location.reload();
}
//game end function *end*

//game engine *start*
const engine = () => {
    let ran = Math.floor(Math.random()*(6-0)+0);
    mole[ran].style.cssText = 'animation-name:m';

    //functions *start*
    let addEvent = () => {
        mole[ran].style.cssText = 'opacity:0.8';
        scr++;
        document.getElementById('scr').innerHTML = scr;
        if(scr > hi_scr){
            localStorage.setItem('high', scr);
            highScore.innerHTML = scr;
        }
    }
    let pressNum = e => {
        if(e.key == ran+1) addEvent();
    }
    //functions *end*
    document.addEventListener('keydown', pressNum);
    moleBox[ran].addEventListener('click', addEvent);
    setTimeout(()=>{
        mole[ran].style.cssText = 'animation-name:xyz;opacity:1';
        moleBox[ran].removeEventListener('click', addEvent);
        document.removeEventListener('keydown', pressNum);
    },1300);
}
const start = () => {
    document.getElementById('notify').innerHTML = "Playing !";
    setInterval(engine,1500);
    setInterval(()=>{
        timer--;
        if(timer<10){
            document.querySelector('.timer').innerHTML = "0"+timer;
        }else document.querySelector('.timer').innerHTML = timer;
        if(timer == -1){
            alert('Time Is Up !!');
            location.reload();
        }
        if(timer_border>3){
            timer_border = 1;
        }else timer_border++
        switch(timer_border){
            case 1:
                time.style.cssText = 'border-top-color:none;border-right-color:#000;border-bottom-color:none;border-left-color:none;';
            break;
            case 2:
                time.style.cssText = 'border-top-color:none;border-right-color:none;border-bottom-color:#000;border-left-color:none;';
            break;
            case 3:
                time.style.cssText = 'border-top-color:none;border-right-color:none;border-bottom-color:none;border-left-color:#000;';
            break;
            case 4:
                time.style.cssText = 'border-top-color:#000;border-right-color:none;border-bottom-color:none;border-left-color:none;';
        }
    },1000)
}
//game engine *end*