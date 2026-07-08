/*
=========================================================
BITTU'S WORLD
Gift Box Controller
Version 12.0
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

const mainGiftBox = document.getElementById("mainGiftBox");

const giftResult = document.getElementById("giftResult");

const closeGift = document.getElementById("closeGift");

const giftIcon = document.getElementById("giftIcon");

const giftTitle = document.getElementById("giftTitle");

const giftMessage = document.getElementById("giftMessage");

const favoriteGiftButton = document.getElementById("favoriteGiftButton");

const sendGiftWhatsapp = document.getElementById("sendGiftWhatsapp");

const openAnotherGift = document.getElementById("openAnotherGift");

const favoriteGiftList = document.getElementById("favoriteGiftList");

const toast = document.getElementById("toast");

const giftsOpened = document.getElementById("giftsOpened");

const favoriteGifts = document.getElementById("favoriteGifts");

const privateGifts = document.getElementById("privateGifts");

const giftAdminPanel = document.getElementById("giftAdminPanel");

const resetGiftStats = document.getElementById("resetGiftStats");

const unlockPrivateGifts = document.getElementById("unlockPrivateGifts");


let selectedGift = null;

let privateUnlocked = false;


// Gift Data

const gifts = [

    {
        id:"hug-surprise",
        icon:"🫂",
        title:"Emergency Hug",
        message:"Bittu has unlocked one emergency Pattu hug. Valid immediately. No arguments allowed.",
        type:"soft",
        private:false
    },

    {
        id:"forehead-kiss",
        icon:"💋",
        title:"Forehead Kiss Drop",
        message:"One forehead kiss has been delivered from Pattu’s forehead-kiss department.",
        type:"romantic",
        private:false
    },

    {
        id:"drive-plan",
        icon:"🚗",
        title:"Random Drive Plan",
        message:"Bittu gets to demand one drive. Music, silence, ranting, coffee — Bittu decides.",
        type:"date",
        private:false
    },

    {
        id:"food-choice",
        icon:"🍱",
        title:"Food Queen",
        message:"Pattu must arrange something good to eat. Bittu cannot be cute and hungry at the same time.",
        type:"food",
        private:false
    },

    {
        id:"bed-made",
        icon:"🛏️",
        title:"Clean Bed Coupon",
        message:"Pattu must make the bed properly because Bittu deserves a perfect cozy bed.",
        type:"home",
        private:false
    },

    {
        id:"shut-up-pass",
        icon:"😤",
        title:"Shut Up Pattu Pass",
        message:"Bittu can use this when Pattu is talking too much. Pattu must shut up peacefully.",
        type:"funny",
        private:false
    },

    {
        id:"princess-treatment",
        icon:"👑",
        title:"Princess Treatment",
        message:"For the next few hours, Bittu gets extra attention, extra care, and extra spoiling.",
        type:"special",
        private:false
    },

    {
        id:"random-note",
        icon:"💌",
        title:"Tiny Love Note",
        message:"Pattu wants Bittu to remember: even when he annoys her, he is completely hers.",
        type:"love",
        private:false
    },

    {
        id:"coffee-memory",
        icon:"☕",
        title:"Charni Road Echo",
        message:"One coffee became a whole lifetime. This gift unlocks one coffee date memory.",
        type:"memory",
        private:false
    },

    {
        id:"koala-soft",
        icon:"🐨",
        title:"Koala Cuddle",
        message:"Bittu receives one soft koala-style cuddle. Clinginess is fully allowed.",
        type:"cute",
        private:false
    },

    {
        id:"panda-friend",
        icon:"🐼",
        title:"Panda Pattu",
        message:"Pattu has turned into a tiny panda and is available for hugging, annoying, and bullying.",
        type:"cute",
        private:false
    },

    {
        id:"sushi-push",
        icon:"🍣",
        title:"Sushi Signal",
        message:"The universe says sushi should happen soon. Pattu should take this seriously.",
        type:"food",
        private:false
    },

    {
    id:"slow-kiss-night",
    icon:"💋",
    title:"Slow Kiss Night",
    message:"Private gift unlocked. Pattu must give Bittu slow kisses, soft touches, and full attention without rushing anything.",
    type:"private",
    private:true
},

{
    id:"pamper-her",
    icon:"🕯️",
    title:"Pamper Bittu Properly",
    message:"Candles, soft music, massage, kisses, and Pattu making Bittu feel wanted, beautiful, and completely adored.",
    type:"private",
    private:true
},

{
    id:"princess-bedroom",
    icon:"👑",
    title:"Bedroom Princess Treatment",
    message:"Bittu gets to be treated like a queen. Pattu listens, follows her mood, and focuses only on making her feel good.",
    type:"private",
    private:true
},

{
    id:"neck-kiss-coupon",
    icon:"🫠",
    title:"Neck Kiss Coupon",
    message:"Pattu owes Bittu slow neck kisses, cuddles, and enough teasing to make her forget she was annoyed.",
    type:"private",
    private:true
},

{
    id:"no-rush-intimacy",
    icon:"🤍",
    title:"No-Rush Intimacy",
    message:"A private night where nothing is rushed. Just softness, closeness, patience, comfort, and Bittu getting all the attention.",
    type:"private",
    private:true
},

{
    id:"make-her-feel-pretty",
    icon:"🌹",
    title:"Make Her Feel Pretty",
    message:"Pattu must compliment Bittu properly, touch her gently, kiss her slowly, and make her feel like the most desired woman in the world.",
    type:"private",
    private:true
},

{
    id:"lap-cuddle",
    icon:"🫶",
    title:"Lap Cuddle & Kisses",
    message:"Bittu gets her reserved place on hubby’s lap, with kisses, cuddles, and full permission to be clingy.",
    type:"private",
    private:true
},

{
    id:"bittu-controls",
    icon:"😏",
    title:"Bittu Controls Everything",
    message:"Private gift unlocked. Bittu decides the pace, the mood, the teasing, the kisses, and what Pattu is allowed to do.",
    type:"private",
    private:true
},

{
    id:"aftercare-night",
    icon:"🛏️",
    title:"Aftercare Night",
    message:"Pattu must cuddle Bittu properly, give forehead kisses, fix the blanket, bring water, and make her feel safe and loved.",
    type:"private",
    private:true
},

{
    id:"surprise-her-body",
    icon:"🔥",
    title:"Make Bittu Melt",
    message:"Pattu must focus only on Bittu — slow teasing, soft kisses, gentle attention, and making her feel completely wanted.",
    type:"private",
    private:true
}

];


// Storage

function getGiftData(){

    return JSON.parse(localStorage.getItem("bittuGiftData")) || {
        opened:0,
        favorites:[]
    };

}

function saveGiftData(data){

    localStorage.setItem("bittuGiftData", JSON.stringify(data));

}

function updateGiftStats(){

    const data = getGiftData();

    giftsOpened.innerText = data.opened;

    favoriteGifts.innerText = data.favorites.length;

    privateGifts.innerText = gifts.filter(gift => gift.private).length;

}


// Toast

function showToast(message){

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

}


// Pick Gift

function getAvailableGifts(){

    if(privateUnlocked || isHubbyModeActive()){

        return gifts;

    }

    return gifts.filter(gift => !gift.private);

}

function openRandomGift(){

    const availableGifts = getAvailableGifts();

    const randomGift =
        availableGifts[Math.floor(Math.random() * availableGifts.length)];

    openGift(randomGift);

}

function openGift(gift){

    selectedGift = gift;

    const data = getGiftData();

    data.opened += 1;

    saveGiftData(data);

    giftIcon.innerText = gift.icon;

    giftTitle.innerText = gift.title;

    giftMessage.innerText = gift.message;

    if(data.favorites.includes(gift.id)){

        favoriteGiftButton.innerText = "Remove Favorite ⭐";

    }else{

        favoriteGiftButton.innerText = "Add to Favorites ⭐";

    }

    giftResult.classList.add("active");

    updateGiftStats();

    renderFavoriteGifts();

}


// Favorite Gifts

function toggleFavoriteGift(){

    if(!selectedGift) return;

    const data = getGiftData();

    if(data.favorites.includes(selectedGift.id)){

        data.favorites = data.favorites.filter(id => id !== selectedGift.id);

        showToast("Removed from favorite gifts");

    }else{

        data.favorites.push(selectedGift.id);

        showToast("Added to favorite gifts ⭐");

    }

    saveGiftData(data);

    openGiftWithoutCounting(selectedGift);

    updateGiftStats();

    renderFavoriteGifts();

}

function openGiftWithoutCounting(gift){

    selectedGift = gift;

    const data = getGiftData();

    giftIcon.innerText = gift.icon;

    giftTitle.innerText = gift.title;

    giftMessage.innerText = gift.message;

    if(data.favorites.includes(gift.id)){

        favoriteGiftButton.innerText = "Remove Favorite ⭐";

    }else{

        favoriteGiftButton.innerText = "Add to Favorites ⭐";

    }

    giftResult.classList.add("active");

}

function renderFavoriteGifts(){

    const data = getGiftData();

    favoriteGiftList.innerHTML = "";

    if(data.favorites.length === 0){

        favoriteGiftList.innerHTML = `
            <div class="favorite-gift-item">
                No favorite gifts yet. Open gifts and save the ones Bittu likes.
            </div>
        `;

        return;

    }

    data.favorites.forEach(id => {

        const gift = gifts.find(item => item.id === id);

        if(!gift) return;

        const item = document.createElement("div");

        item.className = "favorite-gift-item";

        item.innerHTML = `
            <strong>${gift.icon} ${gift.title}</strong>
            <br>
            ${gift.message}
        `;

        favoriteGiftList.appendChild(item);

    });

}


// WhatsApp

function sendGiftToPattu(){

    if(!selectedGift) return;

    const message =
`Pattu ❤️

Bittu opened a Gift Box surprise:

${selectedGift.icon} ${selectedGift.title}

Gift message:
${selectedGift.message}

Gift type:
${selectedGift.type}

Go make this gift real for Bittu.`;

    const whatsappUrl =
        "https://wa.me/" +
        PATTU_WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappUrl;

}


// Admin Mode

function syncGiftAdminMode(){

    if(isHubbyModeActive()){

        giftAdminPanel.classList.add("active");

    }else{

        giftAdminPanel.classList.remove("active");

        privateUnlocked = false;

    }

}

resetGiftStats.addEventListener("click", () => {

    localStorage.removeItem("bittuGiftData");

    updateGiftStats();

    renderFavoriteGifts();

    showToast("Gift stats reset by Hubby Mode.");

});

unlockPrivateGifts.addEventListener("click", () => {

    if(!isHubbyModeActive()) return;

    privateUnlocked = !privateUnlocked;

    unlockPrivateGifts.innerText = privateUnlocked
        ? "Lock Private Gifts"
        : "Unlock Private Gifts";

    showToast(privateUnlocked ? "Private gifts unlocked 😏" : "Private gifts locked again");

});

document.addEventListener("keydown", () => {

    setTimeout(() => {

        syncGiftAdminMode();

    }, 100);

});


// Events

mainGiftBox.addEventListener("click", () => {

    openRandomGift();

});

openAnotherGift.addEventListener("click", () => {

    openRandomGift();

});

favoriteGiftButton.addEventListener("click", () => {

    toggleFavoriteGift();

});

sendGiftWhatsapp.addEventListener("click", () => {

    sendGiftToPattu();

});

closeGift.addEventListener("click", () => {

    giftResult.classList.remove("active");

});

giftResult.addEventListener("click", (event) => {

    if(event.target === giftResult){

        giftResult.classList.remove("active");

    }

});


// Start

updateGiftStats();

renderFavoriteGifts();

syncGiftAdminMode();