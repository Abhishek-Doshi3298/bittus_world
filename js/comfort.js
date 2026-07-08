/*
=========================================================
BITTU'S WORLD
Cozy House Controller
Version 11.0
=========================================================
*/

const PATTU_WHATSAPP_NUMBER = "919029980791";


// Start Sky Engine

const sky = new SkyEngine("stars", 200);

sky.createStars();

sky.createClouds(20);

sky.createFireflies(38);

setInterval(() => {

    sky.createShootingStar();

}, 6000);


// Back Home

document.getElementById("backHome").addEventListener("click", () => {

    window.location.href = "home.html";

});


// Elements

const comfortCards = document.querySelectorAll(".comfort-card");

const comfortModal = document.getElementById("comfortModal");

const closeComfort = document.getElementById("closeComfort");

const comfortEmoji = document.getElementById("comfortEmoji");

const comfortTitle = document.getElementById("comfortTitle");

const comfortMessage = document.getElementById("comfortMessage");

const comfortActions = document.getElementById("comfortActions");

const toast = document.getElementById("toast");

const comfortAdminPanel = document.getElementById("comfortAdminPanel");

const resetComfortStats = document.getElementById("resetComfortStats");

const unlockAllComfort = document.getElementById("unlockAllComfort");

const comfortUsed = document.getElementById("comfortUsed");

const hugsCollected = document.getElementById("hugsCollected");

const pattuRequests = document.getElementById("pattuRequests");


// Comfort Data

const comforts = {

    hug: {
        emoji:"🫂",
        title:"Tight Hug Room",
        message:"Bittu does not need to explain anything. Pattu just holds her properly until the world feels smaller.",
        actions:[
            { text:"I need a tight hug 🫂", type:"primary", response:"Tight hug request sent to Pattu." },
            { text:"Hug me from behind 🤍", type:"normal", response:"Behind hug request ready." },
            { text:"Do not talk, just hold me", type:"normal", response:"Silent hug mode activated." },
            { text:"Long hug. No escape.", type:"normal", response:"Pattu cannot escape this hug." }
        ]
    },

    forehead: {
        emoji:"💋",
        title:"Forehead Kiss Medicine",
        message:"One forehead kiss from Pattu can fix more things than it has any right to.",
        actions:[
            { text:"Forehead kiss please 💋", type:"primary", response:"Forehead kiss request sent." },
            { text:"10 forehead kisses", type:"normal", response:"10 kisses requested. Minimum." },
            { text:"Kiss and say I love you", type:"normal", response:"Love reassurance requested." },
            { text:"Soft kiss, no teasing", type:"normal", response:"Soft mode only." }
        ]
    },

    massage: {
        emoji:"💆",
        title:"Massage Request",
        message:"For tired shoulders, legs, head, back, and dramatic Bittu complaints.",
        actions:[
            { text:"Head massage 💆", type:"primary", response:"Head massage requested." },
            { text:"Shoulder massage", type:"normal", response:"Shoulder massage requested." },
            { text:"Leg massage", type:"normal", response:"Leg massage requested." },
            { text:"Full body lazy husband duty", type:"normal", response:"Full massage duty assigned." }
        ]
    },

    nimbu: {
        emoji:"🍋",
        title:"Nimbu Paani Station",
        message:"Sleepy elephant needs hydration. Pattu must make it properly, not watery nonsense.",
        actions:[
            { text:"Make nimbu paani 🍋", type:"primary", response:"Nimbu paani duty sent." },
            { text:"With ice", type:"normal", response:"Ice added to request." },
            { text:"Make it properly", type:"normal", response:"Proper nimbu paani demanded." },
            { text:"Bring it to bed", type:"normal", response:"Room service requested." }
        ]
    },

    cuddle: {
        emoji:"🛏️",
        title:"Cuddle Mode",
        message:"No productivity. No stress. No overthinking. Only Bittu, blanket, and Pattu.",
        actions:[
            { text:"Cuddle me now 🛏️", type:"primary", response:"Cuddle request sent." },
            { text:"Sleep with me", type:"normal", response:"Sleep cuddle requested." },
            { text:"Blanket burrito me", type:"normal", response:"Bittu burrito mode requested." },
            { text:"No phone, only cuddles", type:"normal", response:"Phone-free cuddle mode." }
        ]
    },

    quiet: {
        emoji:"🤍",
        title:"Quiet Sitting",
        message:"Bittu does not have to talk. Pattu will sit beside her, stay soft, and not force answers.",
        actions:[
            { text:"Sit with me quietly 🤍", type:"primary", response:"Quiet sitting requested." },
            { text:"No questions", type:"normal", response:"No questions mode activated." },
            { text:"Just be near me", type:"normal", response:"Presence requested." },
            { text:"I will talk later", type:"normal", response:"Pattu will wait." }
        ]
    },

    drive: {
        emoji:"🚗",
        title:"Comfort Drive",
        message:"Sometimes Bittu does not need advice. She needs a road, music, and Pattu beside her.",
        actions:[
            { text:"Take me for a drive 🚗", type:"primary", response:"Comfort drive requested." },
            { text:"Silent drive", type:"normal", response:"Silent drive mode." },
            { text:"Music and windows", type:"normal", response:"Music drive requested." },
            { text:"Coffee stop also", type:"normal", response:"Coffee stop added." }
        ]
    },

    food: {
        emoji:"🍱",
        title:"Good Food Fix",
        message:"Sad Bittu, tired Bittu, angry Bittu, and hungry Bittu all deserve good food.",
        actions:[
            { text:"Feed me something good 🍱", type:"primary", response:"Food request sent." },
            { text:"Sushi please 🍣", type:"normal", response:"Sushi request sent." },
            { text:"Order something cozy", type:"normal", response:"Cozy food requested." },
            { text:"Do not ask too many options", type:"normal", response:"Pattu must decide wisely." }
        ]
    }

};


// Storage

function getComfortData(){

    return JSON.parse(localStorage.getItem("bittuComfortData")) || {
        used:0,
        hugs:0,
        requests:0
    };

}

function saveComfortData(data){

    localStorage.setItem("bittuComfortData", JSON.stringify(data));

}

function updateComfortStats(){

    const data = getComfortData();

    comfortUsed.innerText = data.used;

    hugsCollected.innerText = data.hugs;

    pattuRequests.innerText = data.requests;

}

function recordComfort(type){

    const data = getComfortData();

    data.used += 1;

    if(type === "hug"){
        data.hugs += 1;
    }

    data.requests += 1;

    saveComfortData(data);

    updateComfortStats();

}


// Toast

function showToast(message){

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

}


// WhatsApp Comfort Request

function sendComfortToPattu(comfortKey, comfort, action){

    const message =
`Pattu ❤️

Bittu opened Cozy House and selected:

${comfort.emoji} ${comfort.title}

What she wants:
${action.text}

Meaning:
${action.response}

Comfort note:
${comfort.message}

Go take care of Bittu properly.`;

    const whatsappUrl =
        "https://wa.me/" +
        PATTU_WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappUrl;

}


// Open Comfort Modal

comfortCards.forEach(card => {

    card.addEventListener("click", () => {

        const comfortKey = card.dataset.comfort;

        const comfort = comforts[comfortKey];

        comfortEmoji.innerText = comfort.emoji;

        comfortTitle.innerText = comfort.title;

        comfortMessage.innerText = comfort.message;

        comfortActions.innerHTML = "";

        comfort.actions.forEach(action => {

            const button = document.createElement("button");

            button.className = "comfort-action";

            if(action.type === "primary"){
                button.classList.add("primary");
            }

            button.innerText = action.text;

            button.addEventListener("click", () => {

                recordComfort(comfortKey);

                showToast(action.response);

                setTimeout(() => {

                    sendComfortToPattu(comfortKey, comfort, action);

                }, 500);

            });

            comfortActions.appendChild(button);

        });

        comfortModal.classList.add("active");

    });

});


// Close Modal

closeComfort.addEventListener("click", () => {

    comfortModal.classList.remove("active");

});

comfortModal.addEventListener("click", (event) => {

    if(event.target === comfortModal){

        comfortModal.classList.remove("active");

    }

});


// Hubby Admin

function syncComfortAdminMode(){

    if(isHubbyModeActive()){

        comfortAdminPanel.classList.add("active");

    }else{

        comfortAdminPanel.classList.remove("active");

    }

}

resetComfortStats.addEventListener("click", () => {

    localStorage.removeItem("bittuComfortData");

    updateComfortStats();

    showToast("Comfort stats reset by Hubby Mode.");

});

unlockAllComfort.addEventListener("click", () => {

    showToast("All comfort options are already unlocked ❤️");

});

document.addEventListener("keydown", () => {

    setTimeout(() => {

        syncComfortAdminMode();

    }, 100);

});


// Start

updateComfortStats();

syncComfortAdminMode();