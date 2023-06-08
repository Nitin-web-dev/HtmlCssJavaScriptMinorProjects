const panals = document.querySelectorAll('.panel');



function removActiveClasses() {
    panals.forEach(panel => {
        panel.classList.remove('active');
    });
}


panals.forEach( panel => {
    panel.addEventListener('click', () => {
        removActiveClasses();
        panel.classList.add('active');
    })
})

