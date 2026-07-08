/*
=========================================================
BITTU'S WORLD
Charni Road Café Controller
Version 13.0
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

const randomCafeLine = document.getElementById("randomCafeLine");

const newCafeLine = document.getElementById("newCafeLine");

const menuCards = document.querySelectorAll(".menu-card");

const privateMenuCards = document.querySelectorAll(".private-menu");

const orderModal = document.getElementById("orderModal");

const closeOrder = document.getElementById("closeOrder");

const orderIcon = document.getElementById("orderIcon");

const orderTitle = document.getElementById("orderTitle");

const orderMessage = document.getElementById("orderMessage");

const sendOrderWhatsapp = document.getElementById("sendOrderWhatsapp");

const orderAgain = document.getElementById("orderAgain");

const toast = document.getElementById("toast");

const cafeAdminPanel = document.getElementById("cafeAdminPanel");

const resetCafeStats = document.getElementById("resetCafeStats");

const unlockPrivateCafe = document.getElementById("unlockPrivateCafe");

const coffeeCount = document.getElementById("coffeeCount");

const dateRequests = document.getElementById("dateRequests");

const privateOrders = document.getElementById("privateOrders");


let selectedOrder = null;

let privateCafeUnlocked = false;


// Café Memories

const cafeLines = [

    "One coffee at Charni Road became one of the first rituals of Pattu and Bittu.",

    "Kandivali to town was not just a route. It was where the story quietly started.",

    "Bittu asked for a drop to college. Pattu did not know he was being pulled into forever.",

    "Some love stories start with flowers. This one started with drives and one coffee.",

    "That one coffee was small, but somehow it carried the beginning of everything.",

    "Pattu probably pretended it was casual. Bittu probably already knew it was not.",

    "Between traffic, college, coffee, and random talking, Pattu and Bittu became a habit.",

    "Charni Road Café is not a place. It is a memory that became permanent.",

    "Before dates, before marriage, before this world — there was one coffee.",

    "If Bittu ever wants to go back to the beginning, Pattu knows where to take her."

];


// Orders

const orders = {

    coffee:{
        icon:"☕",
        title:"One Coffee",
        message:"The original order. One coffee, one pause, one memory from where everything started.",
        type:"coffee",
        private:false
    },

    drive:{
        icon:"🚗",
        title:"Drive + Coffee",
        message:"A proper Pattu-Bittu classic: drive first, coffee after, and Bittu gets to choose the mood.",
        type:"date",
        private:false
    },

    dessert:{
        icon:"🍰",
        title:"Sweet Something",
        message:"Bittu deserves dessert. Pattu must arrange something sweet because she cannot survive only on coffee and attitude.",
        type:"food",
        private:false
    },

    rant:{
        icon:"🗣️",
        title:"Rant Session",
        message:"Coffee plus full listening mode. Pattu does not interrupt, does not solve too early, and does not act oversmart.",
        type:"comfort",
        private:false
    },

    silent:{
        icon:"🤍",
        title:"Silent Coffee",
        message:"No pressure to talk. Just sit together, sip coffee, and let Bittu feel safe beside Pattu.",
        type:"comfort",
        private:false
    },

    romantic:{
        icon:"💙",
        title:"Romantic Coffee",
        message:"Soft talking, hand holding, old memories, and Pattu reminding Bittu how it all began.",
        type:"romantic",
        private:false
    },

    private:{
        icon:"😏",
        title:"Private Café Order",
        message:"Private order unlocked. Coffee first, then Bittu gets slow kisses, soft teasing, and Pattu’s full attention.",
        type:"private",
        private:true
    },

    aftercoffee:{
        icon:"💋",
        title:"After-Coffee Kiss",
        message:"After coffee, Bittu gets a proper kiss. Slow, soft, and not rushed.",
        type:"private",
        private:true
    }

};


// Storage

function getCafeData(){

    return JSON.parse(localStorage.getItem("bittuCafeData")) || {
        coffees:0,
        dates:0,
        private:0
    };

}

function saveCafeData(data){

    localStorage.setItem("bittuCafeData", JSON.stringify(data));

}

function updateCafeStats(){

    const data = getCafeData();

    coffeeCount.innerText = data.coffees;

    dateRequests.innerText = data.dates;

    privateOrders.innerText = data.private;

}

function recordOrder(order){

    const data = getCafeData();

    if(order.type === "coffee"){
        data.coffees += 1;
    }

    if(order.type === "date" || order.type === "romantic" || order.type === "comfort" || order.type === "food"){
        data.dates += 1;
    }

    if(order.private){
        data.private += 1;
    }

    saveCafeData(data);

    updateCafeStats();

}


// Toast

function showToast(message){

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

}


// Random Café Line

function showRandomCafeLine(){

    const line = cafeLines[Math.floor(Math.random() * cafeLines.length)];

    randomCafeLine.innerText = line;

}

newCafeLine.addEventListener("click", () => {

    showRandomCafeLine();

});


// Open Order

menuCards.forEach(card => {

    card.addEventListener("click", () => {

        const orderKey = card.dataset.order;

        const order = orders[orderKey];

        if(order.private && !privateCafeUnlocked && !isHubbyModeActive()){

            showToast("Private Café opens only in Hubby Mode 😏");

            return;

        }

        openOrder(order);

    });

});


function openOrder(order){

    selectedOrder = order;

    orderIcon.innerText = order.icon;

    orderTitle.innerText = order.title;

    orderMessage.innerText = order.message;

    orderModal.classList.add("active");

}


// WhatsApp

function sendOrderToPattu(){

    if(!selectedOrder) return;

    recordOrder(selectedOrder);

    const message =
`Pattu ❤️

Bittu placed a Charni Road Café order:

${selectedOrder.icon} ${selectedOrder.title}

Order message:
${selectedOrder.message}

Order type:
${selectedOrder.type}

Go make this café order real for Bittu.`;

    const whatsappUrl =
        "https://wa.me/" +
        PATTU_WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappUrl;

}


// Modal Events

sendOrderWhatsapp.addEventListener("click", () => {

    sendOrderToPattu();

});

orderAgain.addEventListener("click", () => {

    orderModal.classList.remove("active");

});

closeOrder.addEventListener("click", () => {

    orderModal.classList.remove("active");

});

orderModal.addEventListener("click", (event) => {

    if(event.target === orderModal){

        orderModal.classList.remove("active");

    }

});


// Hubby Admin

function syncCafeAdminMode(){

    if(isHubbyModeActive()){

        cafeAdminPanel.classList.add("active");

    }else{

        cafeAdminPanel.classList.remove("active");

        privateCafeUnlocked = false;

    }

    privateMenuCards.forEach(card => {

        if(privateCafeUnlocked || isHubbyModeActive()){

            card.classList.add("active");

        }else{

            card.classList.remove("active");

        }

    });

}

resetCafeStats.addEventListener("click", () => {

    localStorage.removeItem("bittuCafeData");

    updateCafeStats();

    showToast("Café stats reset by Hubby Mode.");

});

unlockPrivateCafe.addEventListener("click", () => {

    if(!isHubbyModeActive()) return;

    privateCafeUnlocked = !privateCafeUnlocked;

    unlockPrivateCafe.innerText = privateCafeUnlocked
        ? "Lock Private Café"
        : "Unlock Private Café";

    syncCafeAdminMode();

    showToast(privateCafeUnlocked ? "Private Café unlocked 😏" : "Private Café locked again");

});

document.addEventListener("keydown", () => {

    setTimeout(() => {

        syncCafeAdminMode();

    }, 100);

});


// Start

showRandomCafeLine();

updateCafeStats();

syncCafeAdminMode();