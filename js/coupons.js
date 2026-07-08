/*
=========================================================
BITTU'S WORLD
Coupon Garden Controller
Version 8.0
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


// Coupon Data

const coupons = [

    {
        id:"hug",
        icon:"🫂",
        title:"Unlimited Hug",
        description:"Redeem this whenever Bittu needs one long, tight Pattu hug. No questions asked.",
        type:"Soft"
    },

    {
        id:"forehead-kiss",
        icon:"💋",
        title:"Forehead Kiss",
        description:"One forehead kiss from Pattu, because this is Bittu’s official love language.",
        type:"Romantic"
    },

    {
        id:"massage",
        icon:"💆",
        title:"45 Minute Massage",
        description:"Pattu must give Bittu a proper massage. No shortcuts. No lazy husband behaviour.",
        type:"Comfort"
    },

    {
        id:"cuddle",
        icon:"🛏️",
        title:"Unlimited Cuddles",
        description:"One full cuddle session. Bittu chooses position. Pattu cannot escape.",
        type:"Comfort"
    },

    {
        id:"drive",
        icon:"🚗",
        title:"Long Drive",
        description:"A proper drive with Pattu. Music, talking, silence, random laughing — Bittu decides.",
        type:"Date"
    },

    {
        id:"sushi",
        icon:"🍣",
        title:"Sushi Date",
        description:"Pattu takes Bittu for sushi. No excuses. No delaying. Sushi means sushi.",
        type:"Food"
    },

    {
        id:"kdrama",
        icon:"🎬",
        title:"K-Drama Night",
        description:"Bittu chooses the K-drama. Pattu watches without complaining.",
        type:"Cozy"
    },

    {
        id:"princess",
        icon:"👑",
        title:"Princess Treatment",
        description:"For one day, Bittu gets extra attention, extra care, and extra spoiling.",
        type:"Special"
    },

    {
        id:"make-bed",
        icon:"🛏️",
        title:"Make My Bed",
        description:"Pattu must make the bed properly because Bittu does not like messy beds.",
        type:"Home"
    },

    {
        id:"argument",
        icon:"😤",
        title:"You Win This Argument",
        description:"Bittu wins. Pattu shuts up. Coupon valid especially when Pattu is being stubborn.",
        type:"Peace"
    },

    {
        id:"hubby-happy",
        icon:"😏",
        title:"Make Hubby Happy",
        description:"Private couple coupon. Bittu gets to decide how she wants to make hubby happy.",
        type:"Private"
    },

    {
        id:"naughty-wrestling",
        icon:"🤼",
        title:"Naughty Wrestling",
        description:"Wrestling match, but upgraded. Only redeem when both Pattu and Bittu are in that mood.",
        type:"Private"
    },

    {
        id:"kiss-attack",
        icon:"😘",
        title:"Kiss Attack",
        description:"Bittu attacks Pattu with kisses. Pattu is not allowed to complain.",
        type:"Flirty"
    },

    {
        id:"lap-seat",
        icon:"🫠",
        title:"Sit On Hubby’s Lap",
        description:"Reserved seat for Bittu only. No booking required.",
        type:"Private"
    },

    {
        id:"surprise-date",
        icon:"🎁",
        title:"Surprise Date",
        description:"Pattu must plan one surprise date. Bittu only has to show up and look cute.",
        type:"Date"
    }

];


// Elements

const couponGrid = document.getElementById("couponGrid");

const couponModal = document.getElementById("couponModal");

const closeCoupon = document.getElementById("closeCoupon");

const modalIcon = document.getElementById("modalIcon");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const redeemButton = document.getElementById("redeemButton");

const toast = document.getElementById("toast");

const totalCoupons = document.getElementById("totalCoupons");

const redeemedCoupons = document.getElementById("redeemedCoupons");

const availableCoupons = document.getElementById("availableCoupons");


let selectedCoupon = null;
let hubbyModeActive = isHubbyModeActive();

// Storage

function getRedeemedCoupons(){

    return JSON.parse(localStorage.getItem("bittuRedeemedCoupons")) || [];

}

function saveRedeemedCoupons(redeemed){

    localStorage.setItem("bittuRedeemedCoupons", JSON.stringify(redeemed));

}


// Toast

function showToast(message){

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);

}


// Render Stats

function updateStats(){

    const redeemed = getRedeemedCoupons();

    totalCoupons.innerText = coupons.length;

    redeemedCoupons.innerText = redeemed.length;

    availableCoupons.innerText = coupons.length - redeemed.length;

}


// Render Coupons

function renderCoupons(){

    couponGrid.innerHTML = "";

    const redeemed = getRedeemedCoupons();

    coupons.forEach(coupon => {

        const card = document.createElement("button");

        card.className = "coupon-card";

        if(redeemed.includes(coupon.id)){

            card.classList.add("redeemed");

        }

        card.innerHTML = `
            <div class="coupon-icon">${coupon.icon}</div>
            <h2>${coupon.title}</h2>
            <p>${coupon.description}</p>
            <span class="coupon-type">${coupon.type}</span>
        `;

        card.addEventListener("click", () => {

            openCoupon(coupon);

        });

        couponGrid.appendChild(card);

    });

    updateStats();

}


// Open Coupon

function openCoupon(coupon){

    selectedCoupon = coupon;

    const redeemed = getRedeemedCoupons();

    modalIcon.innerText = coupon.icon;

    modalTitle.innerText = coupon.title;

    modalDescription.innerText = coupon.description;

    if(redeemed.includes(coupon.id)){

    if(hubbyModeActive){

        redeemButton.innerText = "Make Available Again 🔓";

        redeemButton.classList.remove("redeemed");

        redeemButton.disabled = false;

    }else{

        redeemButton.innerText = "Already Redeemed ❤️";

        redeemButton.classList.add("redeemed");

        redeemButton.disabled = true;

    }

}else{

        redeemButton.innerText = "Redeem Coupon ✨";

        redeemButton.classList.remove("redeemed");

        redeemButton.disabled = false;

    }

    couponModal.classList.add("active");

}


// Redeem Coupon

redeemButton.addEventListener("click", () => {

    if(!selectedCoupon) return;

    let redeemed = getRedeemedCoupons();

    const isRedeemed = redeemed.includes(selectedCoupon.id);

    if(isRedeemed && hubbyModeActive){

        redeemed = redeemed.filter(id => id !== selectedCoupon.id);

        saveRedeemedCoupons(redeemed);

        showToast(selectedCoupon.title + " is available again 🔓");

        couponModal.classList.remove("active");

        renderCoupons();

        return;

    }

    if(!isRedeemed){

        redeemed.push(selectedCoupon.id);

        saveRedeemedCoupons(redeemed);

        showToast(selectedCoupon.title + " redeemed by Bittu ❤️");

        couponModal.classList.remove("active");

        renderCoupons();

    }

});


// Close Modal

closeCoupon.addEventListener("click", () => {

    couponModal.classList.remove("active");

});

couponModal.addEventListener("click", (event) => {

    if(event.target === couponModal){

        couponModal.classList.remove("active");

    }

});


// Start

renderCoupons();

/*
/*
=========================================================
COUPON HUBBY MODE - GLOBAL SYNC
=========================================================
*/

const hubbyPanel = document.getElementById("hubbyPanel");

const resetAllCoupons = document.getElementById("resetAllCoupons");

const exitHubbyMode = document.getElementById("exitHubbyMode");


function syncCouponHubbyMode(){

    hubbyModeActive = isHubbyModeActive();

    if(hubbyModeActive){

        hubbyPanel.classList.add("active");

    }else{

        hubbyPanel.classList.remove("active");

        couponModal.classList.remove("active");

    }

    renderCoupons();

}


// If Hubby Mode was already active before opening Coupon Garden

syncCouponHubbyMode();


// Reset all redeemed coupons

resetAllCoupons.addEventListener("click", () => {

    localStorage.removeItem("bittuRedeemedCoupons");

    renderCoupons();

    showToast("All coupons are available again ❤️");

});


// Exit Hubby Mode globally

exitHubbyMode.addEventListener("click", () => {

    deactivateHubbyMode();

    syncCouponHubbyMode();

});


// Detect Hubby Mode toggle from keyboard

document.addEventListener("keydown", () => {

    setTimeout(() => {

        syncCouponHubbyMode();

    }, 100);

});