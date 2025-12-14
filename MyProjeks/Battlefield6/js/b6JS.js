
const profileBtn = document.querySelector(".profile-btn");
const menu = document.querySelector(".profile-menu");

// Toggle dropdown on click
profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
});

// Close when clicking outside
document.addEventListener("click", () => {
    menu.classList.remove("show");
});

// $$$$$$$$$$$$$$$$$$$$$

const drdBtn = document.querySelector(".drd-btn");
const drdMenu = document.querySelector(".drd-menu");
const drdDropdown = document.querySelector(".drd-dropdown");

drdBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    drdMenu.classList.toggle("show");
    drdDropdown.classList.toggle("open");

});

document.addEventListener("click", () => {
    drdMenu.classList.remove("show");
    drdDropdown.classList.remove("open");
});

// TOGGLE PLAY/PAUSE BUTTON

function togglePlayPause() {
    const iconElement = document.getElementById('playPauseIcon');

    if (iconElement.classList.contains('fa-play')) {
        iconElement.classList.remove('fa-play');
        iconElement.classList.add('fa-pause');

        iconElement.setAttribute('data-title', 'Pause');

        console.log('Media is now playing');

    }else {

        iconElement.classList.remove('fa-pause');
        iconElement.classList.add('fa-play');

        iconElement.setAttribute('data-title', 'Play');

        console.log('Media is now paused.');
    }
}

// MUTE/UNMUTE

function toggleMute() {
    const iconElement = document.getElementById('toggleMuteIcon');

    if (iconElement.classList.contains('fa-volume-high')) {

        iconElement.classList.remove('fa-volume-high', 'fa-volume-low');
        iconElement.classList.add('fa-volume-xmark');
        iconElement.setAttribute('data-title', 'Unmute');

        console.log('Media is now MUTED.');




    }else {

        iconElement.classList.remove('fa-volume-xmark');
        iconElement.classList.add('fa-volume-high');
        iconElement.setAttribute('data-title', 'Mute');

        console.log('Media is now UNMUTED');
    } 
}


