/*
=========================================================
BITTU'S WORLD
Our Story Controller
Version 7.1
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


// Back Home

document.getElementById("backHome").addEventListener("click", () => {

    window.location.href = "home.html";

});


// Toast

const toast = document.getElementById("toast");

function showToast(message){

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);

}


// Chapter click messages

const chapterMessages = [

    "A random detour became the opening scene. 🎬",

    "Bittu entered the frame, and Pattu did not know life had changed. 👀",

    "One drive offer. One beginning. 🚗",

    "Kandivali to town became their little route. 🌆",

    "One coffee. Too many memories. ☕",

    "The spark was confusing, playful, and dangerous. 💋",

    "Even the messy middle belonged to them. 🌪️",

    "The UK was only an intermission, not the ending. ✈️",

    "Pattu came back. This time, properly. 🔁",

    "29 November 2022 — Pattu and Bittu became official. ❤️",

    "She asked if he was sure. He was. ⏳",

    "The castle scene. The proposal. The forever question. 🏰",

    "6 February 2025 — the movie became home. 💍"

];

const chapters = document.querySelectorAll(".chapter");

chapters.forEach((chapter, index) => {

    chapter.addEventListener("click", () => {

        showToast(chapterMessages[index]);

    });

});


// Scroll reveal

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.2
});

chapters.forEach(chapter => {

    observer.observe(chapter);

});