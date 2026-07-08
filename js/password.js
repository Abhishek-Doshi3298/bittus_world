/*
=========================================================
BITTU'S WORLD
Password Gate Controller
Version 4.0
=========================================================
*/

// Start Sky Engine

const sky = new SkyEngine("stars", 180);

sky.createStars();

sky.createClouds(18);

sky.createFireflies(35);


// Shooting stars

setInterval(() => {

    sky.createShootingStar();

}, 5500);


// Password Logic

const passwordInput = document.getElementById("passwordInput");

const unlockButton = document.getElementById("unlockButton");

const errorMessage = document.getElementById("errorMessage");


const allowedPasswords = [

    "pattu",
    "bittu",
    "elephant",
    "salonee",
    "meri aurat",
    "pattttuuuuu",
    "patttuuuuu",
    "pattttuuuu"

];


const wrongMessages = [

    "Nope 😤 Try again, Bittu.",

    "Wrong magic word. Bhag and try again 😂",

    "This world only opens for Bittu ❤️",

    "Mene ni baat karna until you guess it 😤",

    "Hint: Pattu made this world for you."

];


function unlockWorld(){

    const typedPassword = passwordInput.value
        .trim()
        .toLowerCase();

    if(allowedPasswords.includes(typedPassword)){

        errorMessage.style.color = "#B8FFD9";

        errorMessage.innerText = "Unlocking your world... ✨";

        document.querySelector(".gate-card").style.animation =
            "unlockGlow 1.4s ease forwards";

        setTimeout(() => {

            window.location.href = "home.html";

        }, 1400);

    }else{

        const randomMessage =
            wrongMessages[Math.floor(Math.random() * wrongMessages.length)];

        errorMessage.style.color = "#FFB7C5";

        errorMessage.innerText = randomMessage;

        passwordInput.value = "";

        passwordInput.focus();

        document.querySelector(".gate-card").classList.add("shake");

        setTimeout(() => {

            document.querySelector(".gate-card").classList.remove("shake");

        }, 500);

    }

}


unlockButton.addEventListener("click", unlockWorld);


passwordInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        unlockWorld();

    }

});