// Variables
const buttons = document.querySelectorAll('.btn');
const toggleButton = document.querySelector('#toggle');
const toggleNavbar = document.querySelector('.navbar');
const buttonToPurple = document.querySelector('.color-purple');
const buttonToBlue = document.querySelector('.color-blue');
const buttonToGreen = document.querySelector('.color-green');
const delayInMilliseconds = 200; //0,2 second
const mainTitle = document.querySelector('.main-title');


// Toggle 
const toggle = () => {
    toggleButton.classList.add('is-active');
    toggleNavbar.classList.add('is-active');

    setTimeout(function() {
        if (toggleNavbar.classList.contains('is-active')) { // class is is-active add another class
            toggleNavbar.classList.add('transition-right');
        } else {
            toggleNavbar.classList.remove('transition-right');

        }
    }, delayInMilliseconds);

}
toggleButton.addEventListener('mouseover', toggle);

// Close menu when mouse is off menu
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.navbar') || e.target.closest('#toggle')) {
        return;
    } else {
        toggleNavbar.classList.add('hide');
        toggleNavbar.classList.remove('is-active');
        toggleButton.classList.remove('is-active');
    }
});

// Change colors on button click
const changeBackgroundColorToPurple = () => {
    document.body.classList.add('is-purple');
    document.body.classList.remove('is-blue');
    document.body.classList.remove('is-green');

    mainTitle.innerHTML = 'Purple';
}

buttonToPurple.addEventListener('click', changeBackgroundColorToPurple);


const changeBackgroundColorToBlue = () => {
    document.body.classList.add('is-blue');
    document.body.classList.remove('is-green');
    document.body.classList.remove('is-purple');

    mainTitle.innerHTML = 'Blue';
}
buttonToBlue.addEventListener('click', changeBackgroundColorToBlue);

const changeBackgroundColorToGreen = () => {
    document.body.classList.add('is-green');
    document.body.classList.remove('is-purple');
    document.body.classList.remove('is-blue');

    mainTitle.innerHTML = 'Green';
}
buttonToGreen.addEventListener('click', changeBackgroundColorToGreen);

// Close menu when clicked on Body
document.addEventListener('click', (event) => {
    if (event.target.closest('.navbar') || event.target.closest('#toggle')) {
        return;
    } else {
        toggleNavbar.classList.add('hide');
        toggleNavbar.classList.remove('is-active');
        toggleButton.classList.remove('is-active');
    }
});

document.addEventListener('click', (event) => {
    if (event.target.closest('.btn')) {
        toggleNavbar.classList.add('hide');
        toggleNavbar.classList.remove('is-active');
        toggleButton.classList.remove('is-active');
    }
});

// Key events
window.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key == 'p' || e.key == 'P') {
        changeBackgroundColorToPurple();
    } else if (e.key == 'b' || e.key == 'B') {
        changeBackgroundColorToBlue();
    } else if (e.key == 'g' || e.key == 'G') {
        changeBackgroundColorToGreen();
    }
});