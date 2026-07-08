/*
=========================================================
BITTU'S WORLD
Game Arcade Controller
Version 10.3 FINAL
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

const gameCards = document.querySelectorAll(".game-card");

const gameModal = document.getElementById("gameModal");

const closeGame = document.getElementById("closeGame");

const gameTitle = document.getElementById("gameTitle");

const gameArea = document.getElementById("gameArea");

const toast = document.getElementById("toast");

const heartScore = document.getElementById("heartScore");

const gamesPlayed = document.getElementById("gamesPlayed");

const bestScore = document.getElementById("bestScore");

const arcadeAdminPanel = document.getElementById("arcadeAdminPanel");

const resetArcadeStats = document.getElementById("resetArcadeStats");

const addTestHearts = document.getElementById("addTestHearts");

const redeemGrid = document.getElementById("redeemGrid");


// Redeem Shop Rewards

const redeemRewards = [

    {
        id:"mini-hug",
        icon:"🫂",
        title:"Mini Hug",
        description:"A small but tight Pattu hug.",
        cost:10
    },

    {
        id:"forehead-kiss",
        icon:"💋",
        title:"Forehead Kiss",
        description:"One forehead kiss from Pattu.",
        cost:15
    },

    {
        id:"annoy-pattu",
        icon:"😂",
        title:"Annoy Pattu Pass",
        description:"Bittu gets permission to annoy Pattu for 10 minutes.",
        cost:20
    },

    {
        id:"cuddle",
        icon:"🛏️",
        title:"Cuddle Coupon",
        description:"One cuddle session. Bittu chooses position.",
        cost:30
    },

    {
        id:"massage",
        icon:"💆",
        title:"Massage Coupon",
        description:"One proper massage from Pattu.",
        cost:45
    },

    {
        id:"drive",
        icon:"🚗",
        title:"Drive Request",
        description:"Pattu must take Bittu for a drive.",
        cost:60
    },

    {
        id:"sushi",
        icon:"🍣",
        title:"Sushi Date Discount",
        description:"Redeem to emotionally force Pattu toward sushi.",
        cost:75
    },

    {
        id:"private-reward",
        icon:"😏",
        title:"Private Reward",
        description:"A private couple reward for Pattu and Bittu.",
        cost:100
    }

];


// Storage

function getArcadeData(){

    return JSON.parse(localStorage.getItem("bittuArcadeData")) || {
        hearts:0,
        played:0,
        best:0
    };

}

function saveArcadeData(data){

    localStorage.setItem("bittuArcadeData", JSON.stringify(data));

}

function updateStats(){

    const data = getArcadeData();

    heartScore.innerText = data.hearts;

    gamesPlayed.innerText = data.played;

    bestScore.innerText = data.best;

    renderRedeemShop();

}

function addHearts(amount){

    const data = getArcadeData();

    data.hearts += amount;

    saveArcadeData(data);

    updateStats();

}

function spendHearts(amount){

    const data = getArcadeData();

    if(data.hearts < amount){

        showToast("Not enough hearts yet ❤️");

        return false;

    }

    data.hearts -= amount;

    saveArcadeData(data);

    updateStats();

    return true;

}

function recordGame(score = 0){

    const data = getArcadeData();

    data.played += 1;

    if(score > data.best){

        data.best = score;

    }

    saveArcadeData(data);

    updateStats();

}


// Toast

function showToast(message){

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

}


// WhatsApp Redeem Alert

function sendRedeemToPattu(reward){

    const message =
`Pattu ❤️

Bittu redeemed an Arcade reward:

${reward.icon} ${reward.title}

Cost:
${reward.cost} hearts ❤️

What it means:
${reward.description}

Go give Bittu her reward.`;

    const whatsappUrl =
        "https://wa.me/" +
        PATTU_WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappUrl;

}


// Redeem Shop

function renderRedeemShop(){

    if(!redeemGrid) return;

    const data = getArcadeData();

    redeemGrid.innerHTML = "";

    redeemRewards.forEach(reward => {

        const card = document.createElement("button");

        card.className = "redeem-card";

        if(data.hearts < reward.cost){

            card.classList.add("disabled");

        }

        card.innerHTML = `
            <div class="redeem-icon">${reward.icon}</div>
            <h3>${reward.title}</h3>
            <p>${reward.description}</p>
            <span class="redeem-cost">${reward.cost} hearts ❤️</span>
        `;

        card.addEventListener("click", () => {

            const latestData = getArcadeData();

            if(latestData.hearts < reward.cost){

                showToast("Collect more hearts first ❤️");

                return;

            }

            const success = spendHearts(reward.cost);

            if(success){

                showToast(reward.title + " redeemed for Bittu ✨");

                setTimeout(() => {

                    sendRedeemToPattu(reward);

                }, 500);

            }

        });

        redeemGrid.appendChild(card);

    });

}


// Hubby Admin Mode

function syncArcadeAdminMode(){

    if(isHubbyModeActive()){

        arcadeAdminPanel.classList.add("active");

    }else{

        arcadeAdminPanel.classList.remove("active");

    }

}


// Open Game

gameCards.forEach(card => {

    card.addEventListener("click", () => {

        if(card.classList.contains("locked")){

            showToast("This game is still being built by Pattu ✨");

            return;

        }

        const game = card.dataset.game;

        openGame(game);

    });

});


function openGame(game){

    gameModal.classList.add("active");

    gameArea.innerHTML = "";

    if(game === "catchHearts"){

        startCatchHearts();

    }

    if(game === "findPattu"){

        startFindPattu();

    }

    if(game === "scratchCard"){

        startScratchCard();

    }

    if(game === "spinWheel"){

        startSpinWheel();

    }

}


// Close Game

closeGame.addEventListener("click", () => {

    gameModal.classList.remove("active");

    gameArea.innerHTML = "";

});

gameModal.addEventListener("click", (event) => {

    if(event.target === gameModal){

        gameModal.classList.remove("active");

        gameArea.innerHTML = "";

    }

});


// GAME 1: Catch Hearts

function startCatchHearts(){

    gameTitle.innerText = "Catch Hearts ❤️";

    gameArea.innerHTML = `
        <p class="game-note">
            Catch as many hearts as you can in 20 seconds.
        </p>

        <div class="reward-box">
            <p>Score: <strong id="catchScore">0</strong></p>
            <p>Time: <strong id="catchTime">20</strong>s</p>
        </div>

        <br>

        <button class="game-btn" id="startCatchGame">
            Start Game
        </button>

        <div class="catch-area" id="catchArea"></div>
    `;

    const startButton = document.getElementById("startCatchGame");

    const catchArea = document.getElementById("catchArea");

    const catchScore = document.getElementById("catchScore");

    const catchTime = document.getElementById("catchTime");

    let score = 0;

    let time = 20;

    let gameRunning = false;

    let heartInterval;

    let timerInterval;

    startButton.addEventListener("click", () => {

        if(gameRunning) return;

        gameRunning = true;

        score = 0;

        time = 20;

        catchScore.innerText = score;

        catchTime.innerText = time;

        startButton.disabled = true;

        startButton.innerText = "Playing...";

        heartInterval = setInterval(() => {

            createFallingHeart(catchArea, () => {

                score++;

                catchScore.innerText = score;

                addHearts(1);

            });

        }, 550);

        timerInterval = setInterval(() => {

            time--;

            catchTime.innerText = time;

            if(time <= 0){

                clearInterval(heartInterval);

                clearInterval(timerInterval);

                gameRunning = false;

                startButton.disabled = false;

                startButton.innerText = "Play Again";

                recordGame(score);

                showToast("Bittu collected " + score + " hearts ❤️");

            }

        }, 1000);

    });

}


function createFallingHeart(area, onCatch){

    const heart = document.createElement("div");

    heart.className = "falling-heart";

    const hearts = ["❤️","💙","💛","💖","💕"];

    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 90 + "%";

    heart.style.animationDuration = (2.4 + Math.random() * 2.2) + "s";

    heart.addEventListener("click", () => {

        onCatch();

        heart.remove();

    });

    heart.addEventListener("animationend", () => {

        heart.remove();

    });

    area.appendChild(heart);

}


// GAME 2: Find Pattu - Hard Mode

function startFindPattu(){

    gameTitle.innerText = "Find Pattu 🐼";

    gameArea.innerHTML = `
        <p class="game-note">
            Find the tiny panda hiding among cats and other animals. Wrong taps waste time.
        </p>

        <div class="reward-box">
            <p>Found: <strong id="findScore">0</strong>/5</p>
            <p>Time: <strong id="findTime">30</strong>s</p>
            <p>Wrong taps: <strong id="wrongTaps">0</strong></p>
        </div>

        <br>

        <button class="game-btn" id="startFindGame">
            Start Hard Mode
        </button>

        <div class="find-area hard-mode" id="findArea"></div>
    `;

    const startButton = document.getElementById("startFindGame");

    const findArea = document.getElementById("findArea");

    const findScore = document.getElementById("findScore");

    const findTime = document.getElementById("findTime");

    const wrongTaps = document.getElementById("wrongTaps");

    const decoys = [
        "🐱","😺","😸","😹","😻","😼","🙀","😿","😾",
        "🐶","🐭","🐹","🐰","🦊","🐻","🐨","🐯","🦁",
        "🐵","🐸","🐷","🐮","🐤","🐧","🐙","🦄","🦝"
    ];

    let found = 0;

    let wrong = 0;

    let time = 30;

    let gameRunning = false;

    let timerInterval;

    startButton.addEventListener("click", () => {

        if(gameRunning) return;

        gameRunning = true;

        found = 0;

        wrong = 0;

        time = 30;

        findScore.innerText = found;

        wrongTaps.innerText = wrong;

        findTime.innerText = time;

        startButton.disabled = true;

        startButton.innerText = "Find Pattu!";

        buildFindBoard();

        timerInterval = setInterval(() => {

            time--;

            findTime.innerText = time;

            if(time <= 0){

                endFindGame(false);

            }

        },1000);

    });


    function buildFindBoard(){

        findArea.innerHTML = "";

        const totalCharacters = 120;

        const targetIndex = Math.floor(Math.random() * totalCharacters);

        for(let i = 0; i < totalCharacters; i++){

            const character = document.createElement("button");

            character.className = "find-character";

            if(i === targetIndex){

                character.innerText = "🐼";

                character.classList.add("target");

                character.addEventListener("click", () => {

                    found++;

                    findScore.innerText = found;

                    addHearts(6);

                    if(found >= 5){

                        endFindGame(true);

                        return;

                    }

                    buildFindBoard();

                });

            }else{

                const randomAnimal = decoys[Math.floor(Math.random() * decoys.length)];

                character.innerText = randomAnimal;

                character.addEventListener("click", () => {

                    wrong++;

                    wrongTaps.innerText = wrong;

                    time = Math.max(0, time - 1);

                    findTime.innerText = time;

                    character.classList.add("wrong-click");

                    setTimeout(() => {

                        character.classList.remove("wrong-click");

                    },280);

                });

            }

            findArea.appendChild(character);

        }

    }


    function endFindGame(won){

        clearInterval(timerInterval);

        gameRunning = false;

        startButton.disabled = false;

        startButton.innerText = "Play Again";

        findArea.innerHTML = "";

        const score = found * 6;

        recordGame(score);

        if(won){

            showToast("Bittu found tiny Pattu 5 times 🐼");

        }else{

            showToast("Pattu escaped into the cats 😂");

        }

    }

}


// GAME 3: Real Scratch Card

function startScratchCard(){

    gameTitle.innerText = "Scratch Card 🎁";

    const rewards = [

        "One forehead kiss from Pattu 💋",
        "One tight hug, no time limit 🫂",
        "Bittu chooses dinner tonight 🍽️",
        "Pattu must make the bed properly 🛏️",
        "One massage coupon unlocked 💆",
        "One drive request cannot be refused 🚗",
        "One cuddle session saved 🛏️",
        "Pattu must shut up for 5 minutes 😤",
        "Bittu gets princess treatment 👑",
        "One naughty private coupon 😏"

    ];

    const reward = rewards[Math.floor(Math.random() * rewards.length)];

    gameArea.innerHTML = `
        <p class="game-note">
            Scratch the card with your finger or mouse to reveal the reward.
        </p>

        <div class="scratch-wrapper">

            <div class="scratch-reward">
                <p>${reward}</p>
            </div>

            <canvas id="scratchCanvas"></canvas>

        </div>

        <button class="game-btn" id="newScratchCard">
            New Scratch Card 🎁
        </button>
    `;

    const canvas = document.getElementById("scratchCanvas");

    const ctx = canvas.getContext("2d");

    const newScratchCard = document.getElementById("newScratchCard");

    let isScratching = false;

    let rewardGiven = false;


    function setupCanvas(){

        const rect = canvas.getBoundingClientRect();

        const dpr = window.devicePixelRatio || 1;

        canvas.width = rect.width * dpr;

        canvas.height = rect.height * dpr;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const gradient = ctx.createLinearGradient(0,0,rect.width,rect.height);

        gradient.addColorStop(0,"#9aa7bd");

        gradient.addColorStop(.5,"#d8e0ef");

        gradient.addColorStop(1,"#7d8da8");

        ctx.globalCompositeOperation = "source-over";

        ctx.fillStyle = gradient;

        ctx.fillRect(0,0,rect.width,rect.height);

        ctx.fillStyle = "rgba(255,255,255,.75)";

        ctx.font = "bold 26px Georgia";

        ctx.textAlign = "center";

        ctx.fillText("Scratch Here ✨", rect.width / 2, rect.height / 2);

    }


    function getPosition(event){

        const rect = canvas.getBoundingClientRect();

        const touch = event.touches ? event.touches[0] : event;

        return {
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top
        };

    }


    function scratch(event){

        if(!isScratching) return;

        event.preventDefault();

        const position = getPosition(event);

        ctx.globalCompositeOperation = "destination-out";

        ctx.beginPath();

        ctx.arc(position.x, position.y, 26, 0, Math.PI * 2);

        ctx.fill();

        checkScratchProgress();

    }


    function checkScratchProgress(){

        const pixels = ctx.getImageData(0,0,canvas.width,canvas.height);

        let cleared = 0;

        for(let i = 3; i < pixels.data.length; i += 4){

            if(pixels.data[i] === 0){

                cleared++;

            }

        }

        const clearedPercent = cleared / (pixels.data.length / 4);

        if(clearedPercent > .35 && !rewardGiven){

            rewardGiven = true;

            addHearts(8);

            recordGame(8);

            showToast("Scratch reward unlocked 🎁");

        }

    }


    canvas.addEventListener("mousedown", () => {

        isScratching = true;

    });

    canvas.addEventListener("mouseup", () => {

        isScratching = false;

    });

    canvas.addEventListener("mouseleave", () => {

        isScratching = false;

    });

    canvas.addEventListener("mousemove", scratch);

    canvas.addEventListener("touchstart", () => {

        isScratching = true;

    });

    canvas.addEventListener("touchend", () => {

        isScratching = false;

    });

    canvas.addEventListener("touchmove", scratch, { passive:false });


    newScratchCard.addEventListener("click", () => {

        startScratchCard();

    });


    setTimeout(setupCanvas,100);

}


// GAME 4: Real Spin Wheel

function startSpinWheel(){

    gameTitle.innerText = "Spin Wheel 🎡";

    const wheelRewards = [

        "Sushi date 🍣",
        "Long drive 🚗",
        "K-drama night 🎬",
        "Massage time 💆",
        "Cuddle and sleep 🛏️",
        "Pattu orders food 🍱",
        "Annoy Pattu pass 😂",
        "Random selfie together 📸",
        "Ice cream mission 🍦",
        "Private couple dare 😏"

    ];

    gameArea.innerHTML = `
        <p class="game-note">
            Spin the wheel and let fate decide what Pattu owes Bittu.
        </p>

        <div class="wheel-wrapper">

            <div class="wheel-pointer"></div>

            <div class="spin-wheel" id="realSpinWheel"></div>

            <button class="game-btn" id="spinButton">
                Spin Wheel 🎡
            </button>

            <div class="reward-box">
                <h3>Wheel says:</h3>
                <p class="reward-text" id="wheelReward">Waiting...</p>
            </div>

            <div class="wheel-labels" id="wheelLabels"></div>

        </div>
    `;

    const wheel = document.getElementById("realSpinWheel");

    const spinButton = document.getElementById("spinButton");

    const wheelReward = document.getElementById("wheelReward");

    const wheelLabels = document.getElementById("wheelLabels");

    let currentRotation = 0;

    let spinning = false;

    wheelRewards.forEach(reward => {

        const label = document.createElement("span");

        label.innerText = reward;

        wheelLabels.appendChild(label);

    });


    spinButton.addEventListener("click", () => {

        if(spinning) return;

        spinning = true;

        spinButton.disabled = true;

        wheelReward.innerText = "Spinning...";

        const selectedIndex = Math.floor(Math.random() * wheelRewards.length);

        const segmentAngle = 360 / wheelRewards.length;

        const targetAngle = selectedIndex * segmentAngle + segmentAngle / 2;

        const extraSpins = 360 * (5 + Math.floor(Math.random() * 3));

        currentRotation += extraSpins + (360 - targetAngle);

        wheel.style.transform = `rotate(${currentRotation}deg)`;

        setTimeout(() => {

            const reward = wheelRewards[selectedIndex];

            wheelReward.innerText = reward;

            addHearts(6);

            recordGame(6);

            showToast("Wheel reward unlocked 🎡");

            spinButton.disabled = false;

            spinning = false;

        },4200);

    });

}


// Admin Buttons

resetArcadeStats.addEventListener("click", () => {

    localStorage.removeItem("bittuArcadeData");

    updateStats();

    showToast("Arcade stats reset by Hubby Mode.");

});

addTestHearts.addEventListener("click", () => {

    addHearts(100);

    showToast("100 test hearts added ❤️");

});


// Detect Hubby Mode toggle

document.addEventListener("keydown", () => {

    setTimeout(() => {

        syncArcadeAdminMode();

    }, 100);

});


// Start

updateStats();

syncArcadeAdminMode();