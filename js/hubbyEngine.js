/*
=========================================================
BITTU'S WORLD
Global Hubby Engine
Final Version
=========================================================
*/

let hubbyTypedSecret = "";

function isHubbyModeActive(){

    return localStorage.getItem("bittuHubbyMode") === "active";

}

function showHubbyToast(message){

    if(typeof showToast === "function"){

        showToast(message);

    }

}

function createHubbyBadge(){

    if(document.getElementById("hubbyModeBadge")) return;

    const badge = document.createElement("div");

    badge.id = "hubbyModeBadge";

    badge.innerText = "Hubby Mode 😏";

    badge.style.position = "fixed";
    badge.style.top = "18px";
    badge.style.right = "18px";
    badge.style.zIndex = "9999";
    badge.style.padding = "10px 14px";
    badge.style.borderRadius = "999px";
    badge.style.background = "rgba(255,183,213,.22)";
    badge.style.backdropFilter = "blur(14px)";
    badge.style.border = "1px solid rgba(255,183,213,.35)";
    badge.style.color = "white";
    badge.style.fontFamily = "Georgia, serif";
    badge.style.fontSize = ".9rem";
    badge.style.boxShadow = "0 0 24px rgba(255,183,213,.24)";
    badge.style.pointerEvents = "none";
    badge.style.display = "none";

    document.body.appendChild(badge);

}

function updateHubbyBadge(){

    createHubbyBadge();

    const badge = document.getElementById("hubbyModeBadge");

    if(!badge) return;

    badge.style.display = isHubbyModeActive() ? "block" : "none";

}

function activateHubbyMode(){

    localStorage.setItem("bittuHubbyMode", "active");

    document.body.classList.add("hubby-mode-active");

    updateHubbyBadge();

    showHubbyToast("Hubby Mode activated 😏");

    const currentPage = window.location.pathname;

    if(currentPage.includes("loading.html")){

        window.location.href = "home.html";

    }

}

function deactivateHubbyMode(){

    localStorage.removeItem("bittuHubbyMode");

    document.body.classList.remove("hubby-mode-active");

    updateHubbyBadge();

    showHubbyToast("Hubby Mode deactivated ❤️");

}

function toggleHubbyMode(){

    if(isHubbyModeActive()){

        deactivateHubbyMode();

    }else{

        activateHubbyMode();

    }

}


// Laptop: type "hubby"

document.addEventListener("keydown", (event) => {

    hubbyTypedSecret += event.key.toLowerCase();

    if(hubbyTypedSecret.length > 10){

        hubbyTypedSecret = hubbyTypedSecret.slice(-10);

    }

    if(hubbyTypedSecret.includes("hubby")){

        toggleHubbyMode();

        hubbyTypedSecret = "";

    }

});


// Phone: tap top-right corner 7 times

function createHubbyTapZone(){

    if(document.getElementById("hubbyTapZone")) return;

    const tapZone = document.createElement("div");

    tapZone.id = "hubbyTapZone";

    tapZone.style.position = "fixed";
    tapZone.style.top = "0";
    tapZone.style.right = "0";
    tapZone.style.width = "95px";
    tapZone.style.height = "95px";
    tapZone.style.zIndex = "10000";
    tapZone.style.background = "transparent";

    document.body.appendChild(tapZone);

    let tapCount = 0;

    let tapTimer;

    tapZone.addEventListener("click", () => {

        tapCount++;

        clearTimeout(tapTimer);

        tapTimer = setTimeout(() => {

            tapCount = 0;

        }, 1800);

        if(tapCount >= 7){

            toggleHubbyMode();

            tapCount = 0;

        }

    });

}


// Start

document.addEventListener("DOMContentLoaded", () => {

    createHubbyBadge();

    createHubbyTapZone();

    if(isHubbyModeActive()){

        document.body.classList.add("hubby-mode-active");

    }else{

        document.body.classList.remove("hubby-mode-active");

    }

    updateHubbyBadge();

    const currentPage = window.location.pathname;

    if(isHubbyModeActive() && currentPage.includes("loading.html")){

        window.location.href = "home.html";

    }

});
/*
=========================================================
GLOBAL FINAL POLISH
=========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const polishStyle = document.createElement("style");

    polishStyle.innerHTML = `
        html{
            scroll-behavior:smooth;
        }

        body{
            opacity:0;
            animation:pageFadeIn .55s ease forwards;
            -webkit-tap-highlight-color:transparent;
        }

        button,
        a{
            -webkit-tap-highlight-color:transparent;
        }

        button:active{
            transform:scale(.98);
        }

        img{
            user-select:none;
            -webkit-user-drag:none;
        }

        ::selection{
            background:rgba(255,183,213,.35);
            color:white;
        }

        @keyframes pageFadeIn{
            from{
                opacity:0;
            }
            to{
                opacity:1;
            }
        }

        @media(max-width:650px){
            body{
                overscroll-behavior:none;
            }
        }
    `;

    document.head.appendChild(polishStyle);

});