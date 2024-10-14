show = document.getElementById('show');
rose = document.getElementById('rose');

show.addEventListener("click",(e)=>{
    show.classList.add("dropOff");
    show.style.top = '150%';
    rose.classList.add('showUp');
    rose.style.width = '50%';
    setTimeout(() => {
        alert('you are gorgeous please don\'t let life ruin your beauty')
    }, 1000);
})