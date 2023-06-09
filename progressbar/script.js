// import all elements
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')




// get count of active circles
let currentActive = 1;




// function for next btn
next.addEventListener('click', () => {
    currentActive++;
    // check if active circle are not greater than actual length in html 
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    
    // if all well fire update() // which will update 
    update();
})


// function for prev btn
prev.addEventListener('click', () => {
    currentActive--;

    // check if active circle are not less than 1; 
    if(currentActive < 1) {
        currentActive = 1
    }

    // if all well fire update() // which will update 
    update();
})



const update = () => {

    // check on all circles and by current acitive circle 
    // index is less than currentcircle add active if not remove active
    circles.forEach( (circle, index) => {
        if(index < currentActive ){
            circle.classList.add('active');
        }else {
            circle.classList.remove('active')
        }   
    });

    // get active element
    const actives = document.querySelectorAll('.active')
    // progress bar width
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
















































