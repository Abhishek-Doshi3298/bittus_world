/*
=========================================================
BITTU'S WORLD
Global Hubby Engine
Button + Password Version
=========================================================
*/

const HUBBY_PASSWORD = "hubby";

let hubbyTypedSecret = "";

function isHubbyModeActive(){

    return localStorage.getItem("bittuHubbyMode") === "active";

}

function showHubbyToast(message){

    if(typeof showToast === "function"){

        showToast(message);

    }

}

function askHubbyPassword(){

    const enteredPassword = prompt("Enter Hubby Password:");

    if(enteredPassword === HUBBY_PASSWORD){

        return true;

    }

    showHubbyToast("Wrong Hubby password.");

    return false;

}

function createHubbyButton(){

    if(document.getElementById("hubbyModeButton")) return;

    const button = document.createElement("button");

    button.id = "hubbyModeButton";

    button.innerText = isHubbyModeActive() ? "Hubby 😏" : "Hubby";

    button.style.position = "fixed";
    button.style.right = "18px";
    button.style.bottom = "18px";
    button.style.zIndex = "70";
    button.style.minWidth = "86px";
    button.style.height = "52px";
    button.style.padding = "0 16px";
    button.style.borderRadius = "999px";
    button.style.border = "1px solid rgba(255,183,213,.35)";
    button.style.background = "rgba(8,15,32,.70)";
    button.style.backdropFilter = "blur(14px)";
    button.style.color = "white";
    button.style.fontFamily = "Georgia, serif";
    button.style.fontSize = "1rem";
    button.style.boxShadow = "0 0 24px rgba(255,183,213,.24)";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {

        if(askHubbyPassword()){

            toggleHubbyMode();

        }

    });

    document.body.appendChild(button);

}

function updateHubbyButton(){

    createHubbyButton();

    const button = document.getElementById("hubbyModeButton");

    if(!button) return;

    button.innerText = isHubbyModeActive() ? "Hubby 😏" : "Hubby";

}

function activateHubbyMode(){

    localStorage.setItem("bittuHubbyMode", "active");

    document.body.classList.add("hubby-mode-active");

    updateHubbyButton();

    showHubbyToast("Hubby Mode activated 😏");

    const currentPage = window.location.pathname;

    if(currentPage.includes("loading.html")){

        window.location.href = "home.html";

    }

}

function deactivateHubbyMode(){

    localStorage.removeItem("bittuHubbyMode");

    document.body.classList.remove("hubby-mode-active");

    updateHubbyButton();

    showHubbyToast("Hubby Mode deactivated ❤️");

}

function toggleHubbyMode(){

    if(isHubbyModeActive()){

        deactivateHubbyMode();

    }else{

        activateHubbyMode();

    }

}


// Laptop shortcut: type "hubby"

document.addEventListener("keydown", (event) => {

    hubbyTypedSecret += event.key.toLowerCase();

    if(hubbyTypedSecret.length > 10){

        hubbyTypedSecret = hubbyTypedSecret.slice(-10);

    }

    if(hubbyTypedSecret.includes("hubby")){

        if(askHubbyPassword()){

            toggleHubbyMode();

        }

        hubbyTypedSecret = "";

    }

});


// Page sync

function syncHubbyMode(){

    createHubbyButton();

    if(isHubbyModeActive()){

        document.body.classList.add("hubby-mode-active");

    }else{

        document.body.classList.remove("hubby-mode-active");

    }

    updateHubbyButton();

    const currentPage = window.location.pathname;

    if(isHubbyModeActive() && currentPage.includes("loading.html")){

        window.location.href = "home.html";

    }

}

document.addEventListener("DOMContentLoaded", () => {

    syncHubbyMode();

});

window.addEventListener("pageshow", () => {

    syncHubbyMode();

});


/*
=========================================================
GLOBAL FINAL POLISH
=========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    if(document.getElementById("globalPolishStyle")) return;

    const polishStyle = document.createElement("style");

    polishStyle.id = "globalPolishStyle";

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
