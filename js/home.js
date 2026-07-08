/*
=========================================================
BITTU'S WORLD
Home World Controller
Version 5.0
=========================================================
*/

// Start Sky Engine

const sky = new SkyEngine("stars", 200);

sky.createStars();

sky.createClouds(20);

sky.createFireflies(38);


// Shooting stars

setInterval(() => {

    sky.createShootingStar();

}, 6000);


// Daily Messages

const dailyMessages = [

    "Pattu built this place so you always have somewhere soft to land.",

    "Today’s reminder: you deserve hugs, forehead kisses, and good food.",

    "If you are smiling right now, Pattu wins.",

    "This world wakes up every time Bittu arrives.",

    "Somewhere in this world, Pattu has hidden a hug for you.",

    "You are not just visiting a website. You are entering something made only for you.",

    "Meri aurat, welcome home. ❤️",

    "Pattttuuuuu is probably waiting for attention.",

    "If today feels heavy, go to the Cozy House.",

    "If today feels cute, go explore the Garden."

];

const dailyMessage = document.getElementById("dailyMessage");

const today = new Date();

const messageIndex = today.getDate() % dailyMessages.length;

dailyMessage.innerText = dailyMessages[messageIndex];


// Compass Menu

const mapButton = document.getElementById("mapButton");

const compassMenu = document.getElementById("compassMenu");

const closeMap = document.getElementById("closeMap");

mapButton.addEventListener("click", () => {

    compassMenu.classList.add("active");

});

closeMap.addEventListener("click", () => {

    compassMenu.classList.remove("active");

});

compassMenu.addEventListener("click", (event) => {

    if(event.target === compassMenu){

        compassMenu.classList.remove("active");

    }

});


// Toast Messages

const toast = document.getElementById("toast");

function showToast(message){

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

}


// World Place Clicks

const places = document.querySelectorAll(".world-place");

const routes = {
    "Mood Portal": "mood.html",
    "Our Story": "story.html",
    "Coupon Garden": "coupons.html",
    "Memory Lake": "memories.html",
    "Game Arcade": "games.html",
    "Comfort House": "comfort.html",
    "Gift Box": "gift.html",
    "Charni Road Café": "cafe.html",
    "Love Letters": "letters.html"
    "Love Letters": "letters.html"
};

places.forEach(place => {

    place.addEventListener("click", () => {

        const placeName = place.dataset.place;

        if(routes[placeName]){

            window.location.href = routes[placeName];

            return;

        }

        showToast(placeName + " is being prepared by Pattu ✨");

    });

});
// Random Pattu Thought

const pattuThoughts = [

    "Bittu... come here ❤️",

    "You forgot to collect your hug.",

    "I bet you clicked something random.",

    "Pattu hid things everywhere.",

    "Mene ni baat karna... just kidding.",

    "Go check the map, Elephant 🐘",

    "This place is still growing for you.",

    "Forehead kiss pending. 💋"

];

setInterval(() => {

    const randomThought =
        pattuThoughts[Math.floor(Math.random() * pattuThoughts.length)];

    showToast(randomThought);

}, 18000);