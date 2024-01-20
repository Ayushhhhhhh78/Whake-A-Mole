document.querySelector('.fa-circle-info').addEventListener('mouseover', () => {
    document.querySelector('.info').style.display = 'flex';
});
document.getElementById('rm').addEventListener('click', () => {
    document.querySelector('.info').style.display = 'none';
})