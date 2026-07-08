/*
=========================================================
BITTU'S WORLD
Mood Portal Controller
Version 6.2
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
// WhatsApp Setup

const PATTU_WHATSAPP_NUMBER = "919029980791";

// Back Home

document.getElementById("backHome").addEventListener("click", () => {

    window.location.href = "home.html";

});


// Mood Data

const moods = {

    happy: {
        emoji: "😊",
        title: "Happy Bittu Detected",
        message: "This is one of Pattu's favourite versions of you. Talk, tease, timepass, go out, and maybe start a wrestling match.",
        tasks: [
            "Tease Pattu for 5 minutes.",
            "Plan one small outing.",
            "Take one cute or stupid selfie.",
            "Challenge Pattu to a wrestling match.",
            "Tell Pattu what made you happy today."
        ],
        actions: [
            { text:"Go out with Pattu 🚗", type:"primary", response:"Drive plan activated 🚗" },
            { text:"Wrestle Pattu 🤼", type:"normal", response:"Pattu is scared already 😂" },
            { text:"Annoy Pattu 😂", type:"normal", response:"Permission granted. Annoy him." },
            { text:"Make hubby happy 😏", type:"intimate", response:"Hubby happiness mission unlocked 😏" }
        ]
    },

    sad: {
        emoji: "🥺",
        title: "Come Here, Bittu",
        message: "If you're sad, you don't need to handle it alone. Pattu would hug you first, listen properly, make you laugh, then get you something good to eat.",
        tasks: [
            "Take one deep breath.",
            "Drink a little water.",
            "Tell Pattu what happened.",
            "Accept one tight virtual hug.",
            "Food, drive, joke, or romantic gesture — choose one."
        ],
        actions: [
            { text:"I need a hug 🫂", type:"primary", response:"One tight Pattu hug collected 🫂" },
            { text:"Forehead kiss 💋", type:"normal", response:"Forehead kiss unlocked 💋" },
            { text:"Take me for a drive 🚗", type:"normal", response:"Drive request sent to Pattu’s brain 🚗" },
            { text:"Feed me something nice 🍱", type:"normal", response:"Good food is now mandatory." }
        ]
    },

    angry: {
        emoji: "😤",
        title: "Angry Bittu Zone",
        message: "No one is allowed to dismiss your anger here. Pattu's job is simple: don't annoy you more, listen, and do things the way Bittu likes.",
        tasks: [
            "Do not explain immediately.",
            "Take space if needed.",
            "Tell Pattu what not to do.",
            "Let Pattu fix one thing.",
            "Hug is available whenever you are ready."
        ],
        actions: [
            { text:"Tell Pattu to shut up 🤐", type:"primary", response:"Pattu will shut up now." },
            { text:"You win this argument 👑", type:"normal", response:"Argument coupon redeemed. Bittu wins." },
            { text:"Fix it properly 😤", type:"normal", response:"Pattu has been assigned fixing duty." },
            { text:"Hug when ready 🫂", type:"normal", response:"Hug is waiting. No pressure." }
        ]
    },

    overwhelmed: {
        emoji: "😮‍💨",
        title: "Too Much Feeling",
        message: "Everything can wait. You don't have to solve your whole life right now. Pattu is here with hugs and forehead kisses.",
        tasks: [
            "Pause everything for one minute.",
            "Relax your shoulders.",
            "Drink water.",
            "Pick only one small thing.",
            "Collect one forehead kiss from Pattu."
        ],
        actions: [
            { text:"Hold me quietly 🫂", type:"primary", response:"Quiet hug mode activated." },
            { text:"Forehead kiss 💋", type:"normal", response:"Forehead kiss received." },
            { text:"No questions please 🤍", type:"normal", response:"No questions. Only presence." },
            { text:"Sit with me 🌙", type:"normal", response:"Pattu is sitting beside you now." }
        ]
    },

    tired: {
        emoji: "😴",
        title: "Sleepy Elephant",
        message: "No productivity required. Tired Bittu needs cuddles, massage, sleep, and nimbu paani.",
        tasks: [
            "Make nimbu paani.",
            "Lie down properly.",
            "Ask Pattu for massage.",
            "Collect cuddle coupon.",
            "Sleep without guilt."
        ],
        actions: [
            { text:"Massage coupon 💆", type:"primary", response:"Massage coupon activated 💆" },
            { text:"Cuddle me 🛏️", type:"normal", response:"Cuddle mode unlocked." },
            { text:"Make nimbu paani 🍋", type:"normal", response:"Nimbu paani duty assigned." },
            { text:"Sleep permission 😴", type:"normal", response:"Permission granted. Sleep without guilt." }
        ]
    },

    quiet: {
        emoji: "🤍",
        title: "Quiet Bittu",
        message: "You don't have to talk before you're ready. Pattu will sit beside you quietly. No pressure. No questions. Just presence.",
        tasks: [
            "Say only what you want.",
            "No forced explanation.",
            "Sit quietly for a bit.",
            "Send Pattu a dot if you don't want to type.",
            "Hug is still waiting."
        ],
        actions: [
            { text:"Sit quietly with me 🤍", type:"primary", response:"No talking needed. Pattu is here." },
            { text:"Send only a dot .", type:"normal", response:"Dot accepted. Pattu understands." },
            { text:"Soft hug 🫂", type:"normal", response:"Soft hug collected." },
            { text:"No pressure mode 🌙", type:"normal", response:"No pressure. No forcing. Only love." }
        ]
    },

    missing: {
        emoji: "🥹",
        title: "Missing Pattu",
        message: "If Pattu could choose anywhere to be right now, he'd choose next to you. Always.",
        tasks: [
            "Collect one virtual hug.",
            "Collect one forehead kiss.",
            "Look at one photo of us.",
            "Send Pattu: I miss you.",
            "Plan the next drive."
        ],
        actions: [
            { text:"Call Pattu 📞", type:"primary", response:"Call Pattu. He wants to hear you." },
            { text:"I miss you message 🥺", type:"normal", response:"Send: Pattu, I miss you ❤️" },
            { text:"Virtual hug 🫂", type:"normal", response:"Virtual hug sent." },
            { text:"Plan next drive 🚗", type:"normal", response:"Next drive planning started." }
        ]
    },

    loved: {
        emoji: "❤️",
        title: "Love Refill",
        message: "Bittu's Hug Bank is open. Today's balance: unlimited hugs, unlimited forehead kisses, and one obsessed husband.",
        tasks: [
            "Collect 5 hugs.",
            "Collect 10 forehead kisses.",
            "Remember: Pattu chose you.",
            "Redeem one cuddle later.",
            "Smile. Pattu loves you."
        ],
        actions: [
            { text:"Unlimited hugs 🫂", type:"primary", response:"Unlimited hugs unlocked." },
            { text:"10 forehead kisses 💋", type:"normal", response:"10 forehead kisses added to your account." },
            { text:"Cuddle coupon 🛏️", type:"normal", response:"Cuddle coupon saved." },
            { text:"Princess treatment 👑", type:"normal", response:"Princess treatment activated." }
        ]
    },

    flirty: {
    emoji: "😏",
    title: "Flirty Bittu Mode",
    message: "Private couple zone. Pattu is now officially in danger.",
    tasks: [
        "Redeem one kiss coupon.",
        "Give Pattu one dare.",
        "Start one wrestling match.",
        "Send one naughty message.",
        "Choose one private real-life coupon."
    ],
    actions: [
        { text:"Make hubby happy 😏", type:"intimate", response:"Private mission unlocked for Bittu only 😏" },
        { text:"Give hubby’s dick a kiss 💋", type:"intimate", response:"Naughty coupon saved for later 💋" },
        { text:"Blowjob coupon 😈", type:"intimate", response:"Hubby is suddenly very lucky 😈" },
        { text:"Naughty wrestling 🤼", type:"intimate", response:"Wrestling match upgraded 😏" },
        { text:"Kiss attack 💋", type:"primary", response:"Kiss attack mode activated." },
        { text:"Tease Pattu slowly 😌", type:"normal", response:"Pattu has no chance now." },
        { text:"Sit on hubby’s lap 🫠", type:"intimate", response:"Lap seat reserved for Bittu only." },
        { text:"Neck kisses coupon 💋", type:"intimate", response:"Neck kisses unlocked." },
        { text:"Makeout session 😘", type:"intimate", response:"Makeout coupon saved." },
        { text:"Whisper something dirty 😏", type:"intimate", response:"Pattu is already distracted." },
        { text:"Private dare card 🎲", type:"intimate", response:"Bittu gets to give one private dare." },
        { text:"Slow teasing mission 🔥", type:"intimate", response:"Slow teasing mode unlocked." },
        { text:"One naughty photo request 📸", type:"intimate", response:"Only if Bittu feels cute and wants to." },
        { text:"Hubby reward night 🏆", type:"intimate", response:"Hubby reward night activated." },
        { text:"No clothes cuddle 🛏️", type:"intimate", response:"Private cuddle coupon saved." },
        { text:"Bittu controls everything 👑", type:"intimate", response:"Boss Bittu mode activated." }
    ]
}

};


// Elements

const moodCards = document.querySelectorAll(".mood-card");

const moodResult = document.getElementById("moodResult");

const closeMood = document.getElementById("closeMood");

const moodEmoji = document.getElementById("moodEmoji");

const moodTitle = document.getElementById("moodTitle");

const moodMessage = document.getElementById("moodMessage");

const moodTasks = document.getElementById("moodTasks");

const actionButtons = document.getElementById("actionButtons");

const toast = document.getElementById("toast");
let currentMoodKey = null;

let currentMood = null;

function getRandomItems(items, count){

    const shuffled = [...items].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, count);

}
// WhatsApp Action Alert

function sendActionToPattu(moodKey, mood, action){

    if(PATTU_WHATSAPP_NUMBER === "91XXXXXXXXXX"){

        showToast("Add Pattu's WhatsApp number in mood.js first.");

        return;

    }

    const moodNeeds = {
        happy: "She is happy and wants Pattu to join her happy Bittu mode.",
        sad: "She is sad and may need comfort, listening, hugs, food, jokes, or a drive.",
        angry: "She is angry. Do not argue. Listen first and do things the way Bittu likes.",
        overwhelmed: "She is overwhelmed and needs calm, hugs, forehead kisses, and no pressure.",
        tired: "She is tired and may need cuddles, massage, sleep, or nimbu paani.",
        quiet: "She is quiet. Do not force her to talk. Just be present.",
        missing: "She is missing Pattu and wants closeness.",
        loved: "She needs love, reassurance, hugs, and forehead kisses.",
        flirty: "She is in flirty Bittu mode. Private couple mission unlocked."
    };

    const message =
`Pattu ❤️

Bittu selected:

Mood:
${mood.emoji} ${mood.title}

What she chose:
${action.text}

Meaning:
${action.response}

Pattu note:
${moodNeeds[moodKey]}

Go take care of your Bittu.`;

    const whatsappUrl =
        "https://wa.me/" +
        PATTU_WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");

}
// Toast

function showToast(message){

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

}


// Open Mood Result

moodCards.forEach(card => {

    card.addEventListener("click", () => {

        const selectedMood = card.dataset.mood;

        const mood = moods[selectedMood];
        currentMoodKey = selectedMood;

currentMood = mood;

        moodEmoji.innerText = mood.emoji;

        moodTitle.innerText = mood.title;

        moodMessage.innerText = mood.message;

        moodTasks.innerHTML = "";

        actionButtons.innerHTML = "";

        const selectedTasks = getRandomItems(mood.tasks, 4);

         selectedTasks.forEach(task => {

    const taskItem = document.createElement("div");

    taskItem.className = "task";

    taskItem.innerText = "✨ " + task;

    moodTasks.appendChild(taskItem);

});

        const randomActionCount = selectedMood === "flirty" ? 6 : 4;

const selectedActions = getRandomItems(mood.actions, randomActionCount);

selectedActions.forEach(action => {

    const button = document.createElement("button");

    button.className = "action-btn";

    if(action.type === "intimate"){
        button.classList.add("intimate");
    }

    if(action.type === "intimate"){
        button.classList.add("intimate");
    }

    button.innerText = action.text;

    button.addEventListener("click", () => {

    showToast(action.response);

    sendActionToPattu(currentMoodKey, currentMood, action);

});

    actionButtons.appendChild(button);

});
        
        moodResult.classList.add("active");

    });

});


// Close Mood Result

closeMood.addEventListener("click", () => {

    moodResult.classList.remove("active");

});


// Close on outside click

moodResult.addEventListener("click", (event) => {

    if(event.target === moodResult){

        moodResult.classList.remove("active");

    }

});