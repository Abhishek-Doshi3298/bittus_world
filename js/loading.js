/*
=========================================================
BITTU'S WORLD
Loading Scene Controller
Version 3.2
=========================================================
*/

// Start Sky Engine

const sky = new SkyEngine("stars", 220);

sky.createStars();

sky.createClouds(22);

sky.createFireflies(40);


// Shooting stars

setInterval(() => {

    sky.createShootingStar();

}, 5000);


// Story scenes

const storyScenes = [

    "Once upon a time...",

    "There lived...\na very stubborn girl.",

    "And somewhere nearby...\nlived a very annoying boy.",

    "He loved drives...\nShe loved coffee...",

    "Neither of them knew...\nthat this combination...",

    "would become FOREVER. ❤️"

];

const storyElement = document.getElementById("storyText");

let sceneIndex = 0;

let charIndex = 0;


function typeScene(){

    const currentScene = storyScenes[sceneIndex];

    if(charIndex < currentScene.length){

        storyElement.innerHTML += currentScene.charAt(charIndex);

        charIndex++;

        setTimeout(typeScene, 55);

    }else{

        setTimeout(() => {

            sceneIndex++;

            if(sceneIndex < storyScenes.length){

                storyElement.innerHTML = "";

                charIndex = 0;

                typeScene();

            }else{

                setTimeout(() => {

                    window.location.href = "password.html";

                }, 3000);

            }

        }, 1500);

    }

}


// Start story after book rises

setTimeout(() => {

    typeScene();

}, 4600);