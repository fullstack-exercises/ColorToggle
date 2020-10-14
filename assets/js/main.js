// Variables
const buttons = document.querySelectorAll('.btn');
const toggleButton = document.querySelector('#toggle');
const toggleNavbar = document.querySelector('.navbar');
const buttonToPurple = document.querySelector('.color-purple');
const buttonToBlue = document.querySelector('.color-blue');
const buttonToPink = document.querySelector('.color-pink');
const delayInMilliseconds = 200; //0,2 second


// Toggle 
const toggle = () => {
    toggleButton.classList.toggle('is-active');
    toggleNavbar.classList.toggle('is-active');

    setTimeout(function() {
        if (toggleNavbar.classList.contains('is-active')) { // class is is-active add another class
            toggleNavbar.classList.add('transition-right');
        } else {
            toggleNavbar.classList.remove('transition-right');

        }
    }, delayInMilliseconds);

}
toggleButton.addEventListener('click', toggle);

// Change colors on button click
const changeBackgroundColorToPurple = () => {
    document.body.classList.add('is-purple');
    document.body.classList.remove('is-blue');
    document.body.classList.remove('is-pink');
}
buttonToPurple.addEventListener('click', changeBackgroundColorToPurple);

const changeBackgroundColorToBlue = () => {
    document.body.classList.add('is-blue');
    document.body.classList.remove('is-pink');
    document.body.classList.remove('is-purple');
}
buttonToBlue.addEventListener('click', changeBackgroundColorToBlue);

const changeBackgroundColorToPink = () => {
    document.body.classList.add('is-pink');
    document.body.classList.remove('is-purple');
    document.body.classList.remove('is-blue');
}
buttonToPink.addEventListener('click', changeBackgroundColorToPink);

// Close menu when clicked on Body
document.addEventListener('click', function(event) {
    if (event.target.closest('.navbar') || event.target.closest('#toggle')) {
        return;
    } else {
        toggleNavbar.classList.add('hide');
        toggleNavbar.classList.remove('is-active');
        toggleButton.classList.remove('is-active');
    }
});

document.addEventListener('click', function(event) {
    if (event.target.closest('.btn')) {
        console.log('button thingy');
        toggleNavbar.classList.add('hide');
        toggleNavbar.classList.remove('is-active');
        toggleButton.classList.remove('is-active');
    }
});



// Close menu when clicked on a color
// const closeMenuOnColorClick = () => {
//     buttons.node.parentNode.classList.remove('is-active');
// }
// buttons.addEventListener('click', closeMenuOnColorClick);