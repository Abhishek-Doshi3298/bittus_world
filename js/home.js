/*
=========================================================
BITTU'S WORLD
Home Controller
Mobile Safe Final
=========================================================
*/

const sky = new SkyEngine("stars", 220);

sky.createStars();
sky.createClouds(22);
sky.createFireflies(40);

setInterval(() => {
    sky.createShootingStar();
}, 6000);

const toast = document.getElementById("toast");

function showToast(message){
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}

const routes = {
    "Mood Portal": "mood.html",
    "Our Story": "story.html",
    "Coupon Garden": "coupons.html",
    "Memory Lake": "memories.html",
    "Game Arcade": "games.html",
    "Comfort House": "comfort.html",
    "Gift Box": "gift.html",
    "Charni Road Café": "cafe.html",
    "Love Letters": "letters.html"
};

document.querySelectorAll(".world-place").forEach(place => {
    place.addEventListener("click", () => {
        const placeName = place.dataset.place;

        if(routes[placeName]){
            window.location.href = routes[placeName];
            return;
        }

        showToast(placeName + " is being prepared by Pattu ✨");
    });
});
