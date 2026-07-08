/*
=========================================================
BITTU'S WORLD
Memory Lake Controller
Version 9.1
=========================================================
*/

// WhatsApp Setup
// Replace this with your WhatsApp number, without + or spaces.
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


// Memory Data

const memories = [

    {
        id:"memory00",
        image:"../images/memories/00 SALONE LOGO.jpeg",
        title:"Bittu's World Begins",
        caption:"Before every memory, every page, every game, and every hidden surprise, there was Bittu — the reason this world exists.",
        type:"Opening",
        hidden:false
    },

    {
        id:"memory01",
        image:"../images/memories/01 bittu college days kiss.jpeg",
        title:"College Days Spark",
        caption:"One of those early memories where everything was still new, confusing, exciting, and impossible to forget.",
        type:"Early Days",
        hidden:true
    },

    {
        id:"memory02",
        image:"../images/memories/02 christmas nightout.jpeg",
        title:"Christmas Night Out",
        caption:"A night full of lights, smiles, and Bittu looking like she accidentally walked into Pattu's favourite scene.",
        type:"Night Out",
        hidden:false
    },

    {
        id:"memory03",
        image:"../images/memories/03 bittu overfull.jpeg",
        title:"Overfull Bittu",
        caption:"Bittu after food is a whole different character — cute, dramatic, sleepy, and still somehow pretty.",
        type:"Funny",
        hidden:false
    },

    {
        id:"memory04",
        image:"../images/memories/04 bittu wants better helmet.jpeg",
        title:"Helmet Complaint Department",
        caption:"Bittu deserves better helmets, better comfort, better everything — and Pattu is supposed to listen.",
        type:"Drive",
        hidden:false
    },

    {
        id:"memory05",
        image:"../images/memories/05 bittu wants to go on a drive.jpeg",
        title:"Drive Please",
        caption:"Some memories begin with just one look that says: Pattu, take me out already.",
        type:"Drive",
        hidden:false
    },

    {
        id:"memory06",
        image:"../images/memories/06 another lonavala night friends.jpeg",
        title:"Another Lonavala Night",
        caption:"Friends, night, madness, and Bittu in the middle of a memory that feels like a movie scene.",
        type:"Trip",
        hidden:false
    },

    {
        id:"memory07",
        image:"../images/memories/07 bittu being sexy.jpeg",
        title:"Dangerously Bittu",
        caption:"This is one of those pictures where Pattu definitely stared longer than he should have.",
        type:"Bittu",
        hidden:true
    },

    {
        id:"memory08",
        image:"../images/memories/08 bittu in heart.jpeg",
        title:"Bittu in a Heart",
        caption:"A heart around Bittu makes perfect sense. That is basically where she lives anyway.",
        type:"Cute",
        hidden:false
    },

    {
        id:"memory09",
        image:"../images/memories/09 bittu lonavala.jpeg",
        title:"Lonavala Bittu",
        caption:"A trip memory, a soft moment, and one more reason Lonavala belongs inside Bittu's World.",
        type:"Trip",
        hidden:false
    },

    {
        id:"memory10",
        image:"../images/memories/10 day out.jpeg",
        title:"Day Out",
        caption:"Simple day out. Simple picture. But somehow these are the memories that stay forever.",
        type:"Day Out",
        hidden:false
    },

    {
        id:"memory11",
        image:"../images/memories/11 dinner night 4.jpeg",
        title:"Dinner Night Glow",
        caption:"Dinner nights with Bittu are never just dinner nights. They become tiny chapters.",
        type:"Dinner",
        hidden:false
    },

    {
        id:"memory12",
        image:"../images/memories/12 dinner night 2.jpeg",
        title:"Dinner Date Energy",
        caption:"Good food, pretty Bittu, and Pattu probably thinking he got lucky again.",
        type:"Dinner",
        hidden:false
    },

    {
        id:"memory13",
        image:"../images/memories/13 dinner night.jpeg",
        title:"One More Dinner Night",
        caption:"Another night, another table, another version of us quietly becoming more permanent.",
        type:"Dinner",
        hidden:false
    },

    {
        id:"memory14",
        image:"../images/memories/14 goa hotness.jpeg",
        title:"Goa Hotness",
        caption:"Goa already has beaches and sunsets, but then Bittu decided to look like this.",
        type:"Goa",
        hidden:true
    },

    {
        id:"memory15",
        image:"../images/memories/15 goa hotties.jpeg",
        title:"Goa Hotties",
        caption:"Pattu and Bittu in full Goa mode — cute, hot, and slightly too much confidence.",
        type:"Goa",
        hidden:false
    },

    {
        id:"memory16",
        image:"../images/memories/16 bittu pretty smile.jpeg",
        title:"That Pretty Smile",
        caption:"This smile has probably ended many of Pattu's arguments before they even started.",
        type:"Bittu",
        hidden:false
    },

    {
        id:"memory17",
        image:"../images/memories/17 goa hottness bittu.jpeg",
        title:"Goa Bittu",
        caption:"Some photos do not need too many words. This one just says: Bittu.",
        type:"Goa",
        hidden:true
    },

    {
        id:"memory18",
        image:"../images/memories/18 hungy bittu.jpeg",
        title:"Hungry Bittu",
        caption:"Warning: hungry Bittu must be fed immediately. Delays may cause drama.",
        type:"Food",
        hidden:false
    },

    {
        id:"memory19",
        image:"../images/memories/19 lonavala couple kiss.jpeg",
        title:"Lonavala Kiss",
        caption:"A little Lonavala kiss, safely stored in the secret part of Memory Lake.",
        type:"Kiss",
        hidden:true
    },

    {
        id:"memory20",
        image:"../images/memories/20 night out with saali 2.jpeg",
        title:"Night Out With Saali",
        caption:"A night out memory with extra people, extra fun, and extra chaos.",
        type:"Night Out",
        hidden:false
    },

    {
        id:"memory21",
        image:"../images/memories/21 night out with saali.jpeg",
        title:"Another Saali Night Out",
        caption:"Some memories are not just couple memories — they come with the full madness package.",
        type:"Night Out",
        hidden:false
    },

    {
        id:"memory22",
        image:"../images/memories/22 pre night out hotness.jpeg",
        title:"Before the Night Out",
        caption:"The kind of photo that makes Pattu forget where they were supposed to go.",
        type:"Bittu",
        hidden:true
    },

    {
        id:"memory23",
        image:"../images/memories/23 bittu overdressed for wedding.jpeg",
        title:"Overdressed? Never.",
        caption:"Bittu did not overdress. Everyone else simply underperformed.",
        type:"Wedding Guest",
        hidden:false
    },

    {
        id:"memory24",
        image:"../images/memories/24 blurry lines.jpeg",
        title:"Blurry Lines",
        caption:"Not every perfect memory is perfectly clear. Some are blurry because they were alive.",
        type:"Memory",
        hidden:false
    },

    {
        id:"memory25",
        image:"../images/memories/25 car kiss.jpeg",
        title:"Car Kiss",
        caption:"A tiny private frame from the drives that started everything.",
        type:"Kiss",
        hidden:true
    },

    {
        id:"memory26",
        image:"../images/memories/26 car smiles.jpeg",
        title:"Car Smiles",
        caption:"The car was never just transport. It was where Pattu and Bittu became Pattu and Bittu.",
        type:"Drive",
        hidden:false
    },

    {
        id:"memory27",
        image:"../images/memories/27 charmie wedding.jpeg",
        title:"Charmie Wedding",
        caption:"One wedding, one dressed-up Bittu, and one Pattu probably staring again.",
        type:"Wedding Guest",
        hidden:false
    },

    {
        id:"memory28",
        image:"../images/memories/28 couple hug.jpeg",
        title:"Couple Hug",
        caption:"This is what comfort looks like — arms, warmth, and no need to explain anything.",
        type:"Hug",
        hidden:false
    },

    {
        id:"memory29",
        image:"../images/memories/29 day out 3.jpeg",
        title:"Day Out Again",
        caption:"The kind of normal day that later becomes a memory you wish you could walk back into.",
        type:"Day Out",
        hidden:false
    },

    {
        id:"memory30",
        image:"../images/memories/30 lonavala neon.jpeg",
        title:"Lonavala Neon",
        caption:"Neon lights, trip energy, and one more scene from the Pattu-Bittu movie.",
        type:"Trip",
        hidden:false
    },

    {
        id:"memory31",
        image:"../images/memories/31 day out 5.jpeg",
        title:"Little Day Out",
        caption:"Not every memory needs a big story. Some just quietly say: we were happy here.",
        type:"Day Out",
        hidden:false
    },

    {
        id:"memory32",
        image:"../images/memories/32 kissy bittu.jpeg",
        title:"Kissy Bittu",
        caption:"Kissy Bittu deserves her own protected corner in Memory Lake.",
        type:"Kiss",
        hidden:true
    },

    {
        id:"memory33",
        image:"../images/memories/33 love bittu.jpeg",
        title:"Love Bittu",
        caption:"A soft little frame that says exactly what this whole website is trying to say.",
        type:"Love",
        hidden:false
    },

    {
        id:"memory34",
        image:"../images/memories/34 patient bittu.jpeg",
        title:"Patient Bittu",
        caption:"Bittu being patient is rare enough to deserve a museum entry.",
        type:"Funny",
        hidden:false
    },

    {
        id:"memory35",
        image:"../images/memories/35 pretty bittu 2.jpeg",
        title:"Pretty Bittu Again",
        caption:"Pattu's camera roll is basically proof that Bittu keeps looking pretty for no reason.",
        type:"Bittu",
        hidden:false
    },

    {
        id:"memory36",
        image:"../images/memories/36 pretty dress kiss.jpeg",
        title:"Pretty Dress Kiss",
        caption:"Pretty dress, soft kiss, and one more private little scene.",
        type:"Kiss",
        hidden:true
    },

    {
        id:"memory37",
        image:"../images/memories/37 pretty dress propose.jpeg",
        title:"Pretty Dress Proposal Energy",
        caption:"Some moments already look like they are preparing for forever.",
        type:"Proposal",
        hidden:false
    },

    {
        id:"memory38",
        image:"../images/memories/38 sleepy bittu.jpeg",
        title:"Sleepy Bittu",
        caption:"Sleepy elephant mode: activated. Cuddles and nimbu paani recommended.",
        type:"Cute",
        hidden:false
    },

    {
        id:"memory39",
        image:"../images/memories/39 smile bittu.jpeg",
        title:"Smile Bittu",
        caption:"This smile is one of Pattu's favourite problems.",
        type:"Bittu",
        hidden:false
    },

    {
        id:"memory40",
        image:"../images/memories/40 proposal infront of light castle.jpeg",
        title:"The Castle Proposal",
        caption:"The moment Pattu asked Bittu for forever, in front of a castle bright enough to match the moment.",
        type:"Proposal",
        hidden:false
    },

    {
        id:"memory41",
        image:"../images/memories/41 singapore lights.jpeg",
        title:"Singapore Lights",
        caption:"Singapore lit up around them, but the real scene was always Pattu and Bittu.",
        type:"Singapore",
        hidden:false
    },

    {
        id:"memory42",
        image:"../images/memories/42 singapore 1.jpeg",
        title:"Singapore Chapter",
        caption:"A chapter from the trip where forever started looking very real.",
        type:"Singapore",
        hidden:false
    },

    {
        id:"memory43",
        image:"../images/memories/43 sangeet groom solo.jpeg",
        title:"Groom Solo",
        caption:"Pattu before becoming officially trapped by Bittu forever.",
        type:"Wedding",
        hidden:false
    },

    {
        id:"memory44",
        image:"../images/memories/44 haldi day.jpeg",
        title:"Haldi Day",
        caption:"Yellow, laughter, chaos, family, and the wedding slowly becoming real.",
        type:"Wedding",
        hidden:false
    },

    {
        id:"memory45",
        image:"../images/memories/45 sangeet day.jpeg",
        title:"Sangeet Day",
        caption:"Music, lights, celebration, and two people walking closer to forever.",
        type:"Wedding",
        hidden:false
    },

    {
        id:"memory46",
        image:"../images/memories/46 sangeet day 2.jpeg",
        title:"Another Sangeet Frame",
        caption:"One more frame from the days where everything felt loud, bright, and full of love.",
        type:"Wedding",
        hidden:false
    },

    {
        id:"memory47",
        image:"../images/memories/47 wedding hug.jpeg",
        title:"Wedding Hug",
        caption:"A hug on the edge of forever. The kind of frame that says more than words.",
        type:"Wedding",
        hidden:false
    },

    {
        id:"memory48",
        image:"../images/memories/48 wedding couple.jpeg",
        title:"Wedding Couple",
        caption:"Pattu and Bittu, dressed for the day their story became home.",
        type:"Wedding",
        hidden:false
    },

    {
        id:"memory49",
        image:"../images/memories/49 honeymoon start.jpeg",
        title:"Honeymoon Begins",
        caption:"The first chapter after the wedding. Same Pattu, same Bittu, brand new forever.",
        type:"Honeymoon",
        hidden:false
    },

    {
        id:"memory50",
        image:"../images/memories/50 maldives fly.jpeg",
        title:"Flying to Maldives",
        caption:"A flight, a new place, and Bittu carrying honeymoon energy.",
        type:"Honeymoon",
        hidden:false
    },

    {
        id:"memory51",
        image:"../images/memories/51 jet ski 3.jpeg",
        title:"Jet Ski Memory",
        caption:"Ocean, speed, and Pattu-Bittu doing something they will definitely remember.",
        type:"Maldives",
        hidden:false
    },

    {
        id:"memory52",
        image:"../images/memories/52 maldives jet ski.jpeg",
        title:"Maldives Jet Ski",
        caption:"The kind of honeymoon memory that feels adventurous and cute at the same time.",
        type:"Maldives",
        hidden:false
    },

    {
        id:"memory53",
        image:"../images/memories/53 Jet ski 2.jpeg",
        title:"Another Jet Ski Scene",
        caption:"One more action scene from the Maldives chapter.",
        type:"Maldives",
        hidden:false
    },

    {
        id:"memory54",
        image:"../images/memories/54 maldives food.jpeg",
        title:"Maldives Food",
        caption:"Because no Pattu-Bittu trip is complete without food becoming part of the memory.",
        type:"Food",
        hidden:false
    },

    {
        id:"memory55",
        image:"../images/memories/55 sangeet entry couple.jpeg",
        title:"Sangeet Entry",
        caption:"A proper entry moment. Two people walking into the celebration of their own story.",
        type:"Wedding",
        hidden:false
    },

    {
        id:"memory56",
        image:"../images/memories/56 wedding day.jpeg",
        title:"Wedding Day",
        caption:"6 February 2025. The day the story stopped being just a story and became home.",
        type:"Wedding",
        hidden:false
    },

    {
        id:"memory57",
        image:"../images/memories/57 wedding forehead kiss.jpeg",
        title:"Wedding Forehead Kiss",
        caption:"The softest ending to one chapter and the beginning of everything after.",
        type:"Wedding",
        hidden:false
    }

];


// Elements

const memoryGrid = document.getElementById("memoryGrid");

const memoryModal = document.getElementById("memoryModal");

const closeMemory = document.getElementById("closeMemory");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalCaption = document.getElementById("modalCaption");

const favoriteButton = document.getElementById("favoriteButton");

const previousMemory = document.getElementById("previousMemory");

const nextMemory = document.getElementById("nextMemory");

const whatsappMemory = document.getElementById("whatsappMemory");

const randomMemoryButton = document.getElementById("randomMemory");

const toast = document.getElementById("toast");

const memoryAdminPanel = document.getElementById("memoryAdminPanel");

const showHiddenMemories = document.getElementById("showHiddenMemories");

const resetFavoriteMemories = document.getElementById("resetFavoriteMemories");

const totalMemories = document.getElementById("totalMemories");

const favoriteMemories = document.getElementById("favoriteMemories");

const hiddenMemories = document.getElementById("hiddenMemories");


let selectedMemory = null;

let selectedMemoryIndex = 0;

let showHidden = false;


// Storage

function getFavoriteMemories(){

    return JSON.parse(localStorage.getItem("bittuFavoriteMemories")) || [];

}

function saveFavoriteMemories(favorites){

    localStorage.setItem("bittuFavoriteMemories", JSON.stringify(favorites));

}


// Toast

function showToast(message){

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);

}


// Visible Memories

function getVisibleMemories(){

    return memories.filter(memory => {

        return !memory.hidden || showHidden;

    });

}


// Counters

function updateMemoryCounters(){

    const favorites = getFavoriteMemories();

    totalMemories.innerText = memories.length;

    favoriteMemories.innerText = favorites.length;

    hiddenMemories.innerText = memories.filter(memory => memory.hidden).length;

}


// Admin Sync

function syncMemoryAdminMode(){

    if(isHubbyModeActive()){

        memoryAdminPanel.classList.add("active");

    }else{

        memoryAdminPanel.classList.remove("active");

        showHidden = false;

    }

    renderMemories();

}


// Render Memories

function renderMemories(){

    memoryGrid.innerHTML = "";

    const favorites = getFavoriteMemories();

    const visibleMemories = getVisibleMemories();

    visibleMemories.forEach(memory => {

        const card = document.createElement("button");

        card.className = "memory-card";

        if(favorites.includes(memory.id)){
            card.classList.add("favorite-memory");
        }

        if(memory.hidden){
            card.classList.add("hidden-memory");
        }

        card.innerHTML = `
            <img src="${memory.image}" alt="${memory.title}">
            <div class="memory-content">
                <h2>${memory.title}</h2>
                <p>${memory.caption}</p>
                <span class="memory-badge">
                    ${favorites.includes(memory.id) ? "⭐ Favorite" : memory.hidden ? "🔒 Hidden" : memory.type}
                </span>
            </div>
        `;

        card.addEventListener("click", () => {

            openMemory(memory);

        });

        memoryGrid.appendChild(card);

    });

    updateMemoryCounters();

}


// Open Memory

function openMemory(memory){

    selectedMemory = memory;

    const visibleMemories = getVisibleMemories();

    selectedMemoryIndex = visibleMemories.findIndex(item => item.id === memory.id);

    const favorites = getFavoriteMemories();

    modalImage.src = memory.image;

    modalTitle.innerText = memory.title;

    modalCaption.innerText = memory.caption;

    if(favorites.includes(memory.id)){

        favoriteButton.innerText = "Remove Favorite ⭐";

        favoriteButton.classList.add("favorited");

    }else{

        favoriteButton.innerText = "Add to Favorites ⭐";

        favoriteButton.classList.remove("favorited");

    }

    memoryModal.classList.add("active");

}


// Previous / Next

previousMemory.addEventListener("click", () => {

    const visibleMemories = getVisibleMemories();

    selectedMemoryIndex--;

    if(selectedMemoryIndex < 0){
        selectedMemoryIndex = visibleMemories.length - 1;
    }

    openMemory(visibleMemories[selectedMemoryIndex]);

});


nextMemory.addEventListener("click", () => {

    const visibleMemories = getVisibleMemories();

    selectedMemoryIndex++;

    if(selectedMemoryIndex >= visibleMemories.length){
        selectedMemoryIndex = 0;
    }

    openMemory(visibleMemories[selectedMemoryIndex]);

});


// Favorite Button

favoriteButton.addEventListener("click", () => {

    if(!selectedMemory) return;

    let favorites = getFavoriteMemories();

    if(favorites.includes(selectedMemory.id)){

        favorites = favorites.filter(id => id !== selectedMemory.id);

        showToast("Removed from favorites");

    }else{

        favorites.push(selectedMemory.id);

        showToast("Added to Bittu’s favorites ⭐");

    }

    saveFavoriteMemories(favorites);

    openMemory(selectedMemory);

    renderMemories();

});


// WhatsApp Memory

whatsappMemory.addEventListener("click", () => {

    if(!selectedMemory) return;

    if(PATTU_WHATSAPP_NUMBER === "91XXXXXXXXXX"){

        showToast("Add Pattu's WhatsApp number in memories.js first.");

        return;

    }

    const message =
`Pattu ❤️

Bittu opened this memory:

${selectedMemory.title}

Caption:
${selectedMemory.caption}

Memory type:
${selectedMemory.type}

Go ask her what she remembered.`;

    const whatsappUrl =
        "https://wa.me/" +
        PATTU_WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");

});


// Random Memory

randomMemoryButton.addEventListener("click", () => {

    const visibleMemories = getVisibleMemories();

    const randomMemory =
        visibleMemories[Math.floor(Math.random() * visibleMemories.length)];

    openMemory(randomMemory);

});


// Admin Buttons

showHiddenMemories.addEventListener("click", () => {

    if(!isHubbyModeActive()) return;

    showHidden = !showHidden;

    showHiddenMemories.innerText = showHidden
        ? "Hide Hidden Memories"
        : "Show Hidden Memories";

    renderMemories();

    showToast(showHidden ? "Hidden memories revealed 😏" : "Hidden memories hidden again");

});


resetFavoriteMemories.addEventListener("click", () => {

    if(!isHubbyModeActive()) return;

    localStorage.removeItem("bittuFavoriteMemories");

    renderMemories();

    showToast("Favorite memories reset");

});


// Close Modal

closeMemory.addEventListener("click", () => {

    memoryModal.classList.remove("active");

});

memoryModal.addEventListener("click", (event) => {

    if(event.target === memoryModal){

        memoryModal.classList.remove("active");

    }

});


// Detect Hubby Mode toggle

document.addEventListener("keydown", () => {

    setTimeout(() => {

        syncMemoryAdminMode();

    }, 100);

});


// Start

syncMemoryAdminMode();
/*
=========================================================
PRIVATE CORNER UNLOCK
Type: porn
=========================================================
*/

const privateCorner = document.getElementById("privateCorner");

const closePrivateCorner = document.getElementById("closePrivateCorner");

const privateGrid = document.getElementById("privateGrid");

let privateTypedSecret = "";


// Add private photos here later
// Keep filenames exactly same as your files inside images/private

const privateMemories = [

    /*
    Example after adding photos:

    {
        image:"../images/private/private1.jpeg",
        title:"Private Memory 1"
    },

    {
        image:"../images/private/private2.jpeg",
        title:"Private Memory 2"
    }

    */

];


// Render private corner

function renderPrivateCorner(){

    privateGrid.innerHTML = "";

    if(privateMemories.length === 0){

        const emptyMessage = document.createElement("div");

        emptyMessage.className = "private-empty";

        emptyMessage.innerHTML = `
            <p>No private memories added yet.</p>
            <p>Add photos inside <strong>images/private</strong> and update <strong>privateMemories</strong> in memories.js.</p>
        `;

        privateGrid.appendChild(emptyMessage);

        return;

    }

    privateMemories.forEach(memory => {

        const privatePhoto = document.createElement("button");

        privatePhoto.className = "private-photo";

        privatePhoto.innerHTML = `
            <img src="${memory.image}" alt="${memory.title}">
        `;

        privatePhoto.addEventListener("click", () => {

            modalImage.src = memory.image;

            modalTitle.innerText = memory.title;

            modalCaption.innerText = "Private memory unlocked for Pattu and Bittu only.";

            favoriteButton.style.display = "none";

            whatsappMemory.style.display = "none";

            previousMemory.style.display = "none";

            nextMemory.style.display = "none";

            privateCorner.classList.remove("active");

            memoryModal.classList.add("active");

        });

        privateGrid.appendChild(privatePhoto);

    });

}


// Type "porn" to unlock private corner

document.addEventListener("keydown", (event) => {

    privateTypedSecret += event.key.toLowerCase();

    if(privateTypedSecret.length > 10){

        privateTypedSecret = privateTypedSecret.slice(-10);

    }

    if(privateTypedSecret.includes("porn")){

        renderPrivateCorner();

        privateCorner.classList.add("active");

        showToast("Private Corner unlocked 🔒");

        privateTypedSecret = "";

    }

});


// Close private corner

closePrivateCorner.addEventListener("click", () => {

    privateCorner.classList.remove("active");

});

privateCorner.addEventListener("click", (event) => {

    if(event.target === privateCorner){

        privateCorner.classList.remove("active");

    }

});


// Restore normal memory modal buttons when opening regular memory

const originalOpenMemory = openMemory;

openMemory = function(memory){

    favoriteButton.style.display = "block";

    whatsappMemory.style.display = "block";

    previousMemory.style.display = "block";

    nextMemory.style.display = "block";

    originalOpenMemory(memory);

};