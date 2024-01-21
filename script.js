//elements selection *start*
const mole = document.getElementsByClassName('mole');
const moleBox = document.getElementsByClassName('hide');
//elements selection *end*

//game variables *start*
speed = 2000;
scr = 0;
//game variables *end*

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
    },1450);
}
const start = () => {
    setInterval(engine,1500);
}
//game engine *end*