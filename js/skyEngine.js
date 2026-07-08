/*
=========================================================
BITTU'S WORLD
Sky Engine
Version 3
=========================================================
*/

class SkyEngine{

    constructor(starsContainerId, numberOfStars = 180){

        this.starsContainer = document.getElementById(starsContainerId);

        this.numberOfStars = numberOfStars;

    }

    createStars(){

        if(!this.starsContainer) return;

        this.starsContainer.innerHTML = "";

        for(let i = 0; i < this.numberOfStars; i++){

            const star = document.createElement("div");

            star.className = "star";

            const size = Math.random() * 3 + 1;

            star.style.width = size + "px";
            star.style.height = size + "px";

            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";

            star.style.animationDelay = Math.random() * 4 + "s";
            star.style.animationDuration = 2 + Math.random() * 3 + "s";

            this.starsContainer.appendChild(star);

        }

    }

    createShootingStar(){

        if(!this.starsContainer) return;

        const shootingStar = document.createElement("div");

        shootingStar.className = "shooting-star";

        shootingStar.style.top = Math.random() * 35 + 5 + "%";

        shootingStar.style.animationDuration = Math.random() * 1 + 1.5 + "s";

        this.starsContainer.appendChild(shootingStar);

        setTimeout(()=>{

            shootingStar.remove();

        },3000);

    }

    createClouds(numberOfClouds = 18){

        const cloudContainer = document.getElementById("clouds");

        if(!cloudContainer) return;

        cloudContainer.innerHTML = "";

        for(let i = 0; i < numberOfClouds; i++){

            this.spawnCloud(cloudContainer,true);

        }

    }

    spawnCloud(cloudContainer,initial = false){

        const cloud = document.createElement("div");

        cloud.className = "cloud";

        const width = 140 + Math.random() * 320;

        const height = width * 0.32;

        cloud.style.width = width + "px";
        cloud.style.height = height + "px";

        cloud.style.top = Math.random() * 42 + "%";

        cloud.style.opacity = 0.28 + Math.random() * 0.38;

        cloud.style.filter = `blur(${8 + Math.random() * 10}px)`;

        const leftToRight = Math.random() > 0.5;

        const duration = 22 + Math.random() * 30;

        cloud.style.animationDuration = duration + "s";

        if(leftToRight){

            cloud.style.left = -width + "px";

            cloud.style.setProperty(
                "--travel",
                `calc(100vw + ${width + 500}px)`
            );

            if(initial){

                cloud.style.transform = `translateX(${Math.random() * window.innerWidth}px)`;

            }

        }else{

            cloud.style.left = "calc(100vw + 250px)";

            cloud.style.setProperty(
                "--travel",
                `-${window.innerWidth + width + 650}px`
            );

            if(initial){

                cloud.style.transform = `translateX(-${Math.random() * window.innerWidth}px)`;

            }

        }

        cloudContainer.appendChild(cloud);

        cloud.addEventListener("animationend",()=>{

            cloud.remove();

            this.spawnCloud(cloudContainer,false);

        });

    }

    createFireflies(number = 35){

        const container = document.getElementById("fireflies");

        if(!container) return;

        container.innerHTML = "";

        for(let i = 0; i < number; i++){

            const firefly = document.createElement("div");

            firefly.className = "firefly";

            firefly.style.left = Math.random() * 100 + "%";

            firefly.style.top = 45 + Math.random() * 45 + "%";

            const size = 2 + Math.random() * 4;

            firefly.style.width = size + "px";
            firefly.style.height = size + "px";

            firefly.style.opacity = .3 + Math.random() * .7;

            firefly.style.animationDuration = 4 + Math.random() * 6 + "s";

            firefly.style.animationDelay = Math.random() * 5 + "s";

            container.appendChild(firefly);

        }

    }

}