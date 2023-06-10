const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let blurr = 99;

let interval = setInterval(blurring , 30);


function blurring () {
    load++;
    blurr--;

    if(load > 99){
        clearInterval(interval);
        loadText.style.opacity = `0`;

    }


    loadText.innerText = `${load}%`;
    bg.style.filter = `blur(${blurr}px)`;

}