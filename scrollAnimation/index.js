// import element
const boxes = document.querySelectorAll('.box')

/// watch the scroll event and if event fire call the checkBoxes function 
window.addEventListener('scroll', checkBoxes)

// by default we don't see any boxes onload until we don't scroll 
// that why we call below function to run on load 
 checkBoxes()


 // the function 
function checkBoxes() {

    // get the 80% inner height
    const triggerBottom = window.innerHeight / 5 * 4


    // iterate on all boxes
    boxes.forEach(box => {
        //this line retrieves the top position of the element relative to the viewport
        const boxTop = box?.getBoundingClientRect().top
 

        //if the boxTop value (the top position of the current box) is less than the triggerBottom value (the trigger point defined earlier).
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}


// detail explaination 
// Certainly! The provided code snippet appears to define a function named checkBoxes(). Let's go through the code and understand its functionality step by step:

// const triggerBottom = window.innerHeight / 5 * 4: This line calculates the position on the page that triggers the checkbox action. It divides the window's inner height by 5 and then multiplies it by 4, effectively setting the trigger point at 80% of the window's height.

// boxes.forEach(box => { ... }): This line indicates that the code will iterate over an array called boxes and perform actions on each element. It uses the forEach method, which executes the provided function for each element of the boxes array.

// const boxTop = box?.getBoundingClientRect().top: For each box element in the boxes array, this line retrieves the top position of the element relative to the viewport using the getBoundingClientRect() method. The ? is called the optional chaining operator, which ensures that if box is null or undefined, the expression will gracefully return undefined instead of throwing an error.

// if (boxTop < triggerBottom) { ... } else { ... }: This if-else statement checks if the boxTop value (the top position of the current box) is less than the triggerBottom value (the trigger point defined earlier). If the condition is true, it means that the box has scrolled above the trigger point, and the code inside the if block is executed. Otherwise, if the condition is false, indicating that the box is below the trigger point, the code inside the else block is executed.

// box.classList.add('show'): Inside the if block, this line adds the CSS class 'show' to the current box element. This class is likely defined in a stylesheet and can be used to apply specific styles to the box when it meets the trigger condition.

// box.classList.remove('show'): Inside the else block, this line removes the CSS class 'show' from the current box element. This action is taken when the box is below the trigger point, indicating that it should no longer exhibit the styles associated with the 'show' class.

// To summarize, this code snippet is likely part of a larger script or application that implements a scrolling effect. When the checkBoxes() function is called, it checks the position of each box element on the page relative to a trigger point. If a box is above the trigger point, it adds the 'show' class to it, and if it's below, it removes the class. This mechanism can be used to reveal or hide elements as the user scrolls through the page.




