/*
=========================================================
BITTU'S WORLD
Love Letters Controller
Version 14.3
Always 8 Letters + 8 Private Letters
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

const lettersGrid = document.getElementById("lettersGrid");

const randomLetterButton = document.getElementById("randomLetterButton");

const letterModal = document.getElementById("letterModal");

const closeLetter = document.getElementById("closeLetter");

const letterIcon = document.getElementById("letterIcon");

const letterCategory = document.getElementById("letterCategory");

const letterTitle = document.getElementById("letterTitle");

const letterBody = document.getElementById("letterBody");

const favoriteLetterButton = document.getElementById("favoriteLetterButton");

const sendLetterWhatsapp = document.getElementById("sendLetterWhatsapp");

const openAnotherLetter = document.getElementById("openAnotherLetter");

const favoriteLetterList = document.getElementById("favoriteLetterList");

const toast = document.getElementById("toast");

const lettersOpened = document.getElementById("lettersOpened");

const favoriteLetters = document.getElementById("favoriteLetters");

const privateLetters = document.getElementById("privateLetters");

const lettersAdminPanel = document.getElementById("lettersAdminPanel");

const resetLetterStats = document.getElementById("resetLetterStats");

const unlockPrivateLetters = document.getElementById("unlockPrivateLetters");


let selectedLetter = null;

let privateLettersUnlocked =
    localStorage.getItem("bittuPrivateLettersUnlocked") === "true";


// Public Letter Pool

const publicLetterPool = [

    {
        id:"coffee-01",
        icon:"☕",
        title:"The One Coffee Letter",
        category:"Charni Road",
        body:
`Bittu,

Sometimes I think about how small the beginning looked.

One drive.
One college drop.
One coffee.

Nothing dramatic from outside. But inside that simple routine, my life quietly changed direction.

You became familiar before I understood what you were becoming.
Your presence became normal.
Your voice became known.
Your mood started mattering.

That one coffee was never just one coffee.

It was the first page of us.

- Pattu`,
        private:false
    },

    {
        id:"home-01",
        icon:"🏡",
        title:"You Became Home",
        category:"Soft",
        body:
`Bittu,

Home is not only a place.

Sometimes home is one person getting angry in a very specific way.
One person saying “I don’t like you” but still wanting attention.
One person needing hugs, food, drives, and forehead kisses.

Somewhere between all our fights, jokes, trips, kisses, and madness, you became that place for me.

You became home.

Not perfect.
Not always easy.
But mine.

And I would choose this home again.

- Pattu`,
        private:false
    },

    {
        id:"bad-days-01",
        icon:"🤍",
        title:"For Your Bad Days",
        category:"Comfort",
        body:
`Bittu,

On the days you feel heavy, tired, irritated, sad, or quiet, you do not have to perform happiness for me.

You can be silent.
You can be dramatic.
You can be annoyed.
You can ask for space.
You can ask for hugs.

You do not need to become easy to love.

I love you in your difficult moods too.

So when the world feels too much, come here.
Or come to me.

I will not always fix everything perfectly.
But I will stay.

- Pattu`,
        private:false
    },

    {
        id:"stubborn-01",
        icon:"🐘",
        title:"My Stubborn Elephant",
        category:"Funny",
        body:
`Bittu,

You are stubborn.

Very stubborn.
Extremely stubborn.
Professionally stubborn.

But somehow even that became one of my favourite things about you.

You will argue.
You will make faces.
You will say you do not care.
Then you will care more than anyone.

You are soft with armour.
Drama with love.
Anger with attachment.
A tiny elephant with too much attitude.

And I love all of it.

Even when you are being impossible.

- Pattu`,
        private:false
    },

    {
        id:"married-01",
        icon:"💍",
        title:"The Married Letter",
        category:"Forever",
        body:
`Bittu,

We got married.

Sometimes that still feels unreal.

From drives and coffee to wedding clothes and forever promises.
From random talking to families, rituals, photos, chaos, and home.

You became my wife.

Not just my girlfriend.
Not just my person.
My wife.

And every time I remember that, something inside me feels proud, scared, happy, and lucky at the same time.

I know I annoy you.
I know I am not perfect.
But I am yours.

Properly.

- Pattu`,
        private:false
    },

    {
        id:"pretty-01",
        icon:"🌹",
        title:"When You Forget You Are Pretty",
        category:"Love",
        body:
`Bittu,

Sometimes I wish you could see yourself the way I see you.

Not only when you are dressed up.
Not only in good photos.
Not only when you are smiling.

Even when you are sleepy.
Even when you are angry.
Even when your hair is messy.
Even when you are making that irritated face.

You are beautiful to me in such normal moments that I do not always know how to explain it.

You do not have to try so hard to be loved.

You already are.

- Pattu`,
        private:false
    },

    {
        id:"fights-01",
        icon:"🌧️",
        title:"After We Fight",
        category:"Repair",
        body:
`Bittu,

I hate when we fight.

Not because I want to win.
Not because I want to prove a point.

I hate it because I do not like the distance it creates between us.

Even when I am angry, I still love you.
Even when I act stupid, I still want us.
Even when my ego comes in between, my heart is still standing on your side.

So this letter is for after the fight.

Come back slowly.
I will also come back slowly.

And then we will become us again.

- Pattu`,
        private:false
    },

    {
        id:"forever-01",
        icon:"❤️",
        title:"Forever Is Not One Big Moment",
        category:"Forever",
        body:
`Bittu,

Forever is not only the proposal.
Not only the wedding.
Not only the big photos.

Forever is also small things.

Making the bed.
Ordering food.
Asking if you reached.
Fighting and still sleeping near each other.
Going for drives.
Sending stupid messages.
Remembering what hurts.
Trying again.

Forever is built quietly.

And with you, I want all the quiet parts too.

- Pattu`,
        private:false
    },

    {
        id:"drive-01",
        icon:"🚗",
        title:"The Drive Letter",
        category:"Memory",
        body:
`Bittu,

So many people sit in cars.

But with you, the car became something else.

It became a place where we talked, fought, laughed, sat quietly, listened to music, and slowly became closer.

The road saw versions of us that people did not.
The traffic heard our nonsense.
The night drives carried our moods.

I think some part of me will always connect love with roads because of you.

Because somewhere between Kandivali, town, coffee, and random drives, I started wanting you beside me for every route.

- Pattu`,
        private:false
    },

    {
        id:"wife-01",
        icon:"👰",
        title:"My Wife",
        category:"Marriage",
        body:
`Bittu,

Calling you my wife still feels special.

Not because marriage magically makes everything easy.
It does not.

But because it means we chose each other beyond just cute days.

We chose each other through families, pressure, fear, fights, planning, confusion, and all the real things.

You are my wife.

That means I get to annoy you forever.
But also love you forever.
Protect you forever.
Come back to you forever.

And yes, make the bed also.

- Pattu`,
        private:false
    },

    {
        id:"smile-01",
        icon:"😊",
        title:"Your Smile",
        category:"Cute",
        body:
`Bittu,

Your smile does something stupid to me.

It makes me forget that you are the same person who argues like a lawyer, gets dramatic, and says “I don’t like you” with full confidence.

Then you smile.

And suddenly I become useless.

Maybe that is unfair.
Maybe you use it knowingly.
Maybe I still fall for it every time.

But I hope you smile often.

Not for photos.
Not for anyone else.

Just because life feels light for you in that moment.

- Pattu`,
        private:false
    },

    {
        id:"safe-01",
        icon:"🫂",
        title:"Safe With Me",
        category:"Comfort",
        body:
`Bittu,

I want you to feel safe with me.

Not only physically.
Emotionally too.

Safe to be quiet.
Safe to be needy.
Safe to be angry.
Safe to cry.
Safe to not explain everything immediately.
Safe to ask for love without feeling like you are asking too much.

I may not always get everything right, but I want to learn how to love you in the way you actually need.

You are not too much.

You are my Bittu.

- Pattu`,
        private:false
    }

];


// Private Letter Pool

const privateLetterPool = [

    {
        id:"private-singapore-balcony",
        icon:"🌃",
        title:"Singapore Balcony",
        category:"Private",
        body:
`Bittu,

That Singapore balcony belongs to a private part of our story.

The city was outside.
Lights everywhere.
The air felt different.
And then there was you.

Close to me.
Mine.
Soft and nervous and wanted.

I still remember the feeling more than anything else — not just what happened, but how it felt to want you there, in that little world above the city.

It was not just sex.

It was us crossing into a version of closeness that only we know.

A secret scene from the Pattu-Bittu movie.

- Pattu`,
        private:true
    },

    {
        id:"private-maldives-balcony",
        icon:"🌊",
        title:"Maldives Balcony",
        category:"Private",
        body:
`Bittu,

The Maldives balcony was different.

The ocean was there.
The air was warm.
Everything outside felt too beautiful, but somehow you still became the only thing I could focus on.

That memory feels soft and wild at the same time.

A little risky.
A little dreamy.
Very us.

I remember wanting you slowly.
I remember the closeness.
I remember how the whole world felt far away for a while.

Just you.
Me.
The sea.
And one private memory that belongs only to us.

- Pattu`,
        private:true
    },

    {
        id:"private-hotel-room",
        icon:"🛏️",
        title:"Hotel Room Letter",
        category:"Private",
        body:
`Bittu,

Some hotel rooms are just rooms.

But some become memories.

The door closes, the outside world disappears, and suddenly there is only us.

Your laugh.
Your mood.
Your little shyness.
Your confidence when you know I want you.

Those moments are not only physical for me.

They are reminders that you are my wife, my person, my safest chaos, and the woman I still get pulled toward again and again.

I love the softness after.
The cuddles.
The quiet.
The feeling that you are mine and I am yours.

- Pattu`,
        private:true
    },

    {
        id:"private-aftercare",
        icon:"🤍",
        title:"Aftercare Letter",
        category:"Private",
        body:
`Bittu,

My favourite private memories are not only the intense parts.

They are also what comes after.

Fixing the blanket.
Holding you close.
Forehead kisses.
Water nearby.
Your body relaxing.
Your face becoming soft.
That quiet feeling where no one needs to perform anything.

I want you to always feel safe with me before, during, and after every private moment.

Because you are not just someone I desire.

You are someone I love.

- Pattu`,
        private:true
    },

    {
        id:"private-wanted",
        icon:"🔥",
        title:"I Want You Letter",
        category:"Private",
        body:
`Bittu,

I want you to know something clearly.

I still want you.

Not only on perfect days.
Not only when you dress up.
Not only when everything is romantic.

I want sleepy Bittu.
Angry Bittu.
Pretty dress Bittu.
Messy hair Bittu.
Wife Bittu.
Drama Bittu.

There is something about you that keeps pulling me in.

Your softness.
Your attitude.
Your body.
Your face.
Your little reactions.
The way you become mine in private.

You are wanted.
Properly.

- Pattu`,
        private:true
    },

    {
        id:"private-slow",
        icon:"🕯️",
        title:"Slow Night",
        category:"Private",
        body:
`Bittu,

This letter is for a slow night.

No rushing.
No phones.
No outside noise.

Just soft light, slow kisses, gentle touching, and enough time for you to feel beautiful without pressure.

I want to make you feel wanted in a way that also feels safe.

Not hurried.
Not casual.
Not taken for granted.

Just my wife being loved properly.

And Pattu paying full attention.

- Pattu`,
        private:true
    },

    {
        id:"private-queen",
        icon:"👑",
        title:"Bedroom Queen",
        category:"Private",
        body:
`Bittu,

In this private corner, you are the queen.

You choose the mood.
You choose the pace.
You choose when Pattu behaves and when Pattu suffers.

You deserve to feel adored.
Desired.
Listened to.
Touched with patience.
Kissed like there is nowhere else to be.

I want you to feel like the only woman in the world.

Because in that moment, you are.

- Pattu`,
        private:true
    },

    {
        id:"private-honeymoon",
        icon:"💍",
        title:"Honeymoon Body Memory",
        category:"Private",
        body:
`Bittu,

Honeymoon memories feel different.

Because you were not just my girlfriend anymore.
You were my wife.

That made everything softer and more intense at the same time.

The way I looked at you changed.
The way I wanted you felt deeper.
The private moments felt like a new chapter opening.

I think a part of me was still realizing:

This beautiful, stubborn, dramatic, soft woman is actually my wife.

And I get to love her like this.

- Pattu`,
        private:true
    },

    {
        id:"private-balcony-secret",
        icon:"🌙",
        title:"Balcony Secret",
        category:"Private",
        body:
`Bittu,

Balcony memories have their own madness.

There is always that tiny feeling that the world is nearby, but somehow still locked out.

It becomes our secret.

Your closeness.
The night air.
The danger of the moment.
The way everything feels more alive.

I do not remember it like a scene meant for anyone else.

I remember it like something only we were allowed to know.

A small private secret between husband and wife.

- Pattu`,
        private:true
    },

    {
        id:"private-make-her-melt",
        icon:"🫠",
        title:"Make Bittu Melt",
        category:"Private",
        body:
`Bittu,

Some nights should exist only to make you melt.

No overthinking.
No asking too many questions.
No making you feel shy about wanting attention.

Just Pattu taking his time with you.

Kisses.
Closeness.
Warmth.
Soft teasing.
And that private feeling where you slowly stop being annoyed and start becoming mine again.

You deserve that kind of attention.

The full kind.

- Pattu`,
        private:true
    },

    {
        id:"private-wife",
        icon:"❤️",
        title:"My Wife, Privately",
        category:"Private",
        body:
`Bittu,

There is something different about wanting you as my wife.

It is not just attraction.
It is belonging.

When we are close, I do not feel like I am chasing something temporary.

I feel like I am coming closer to the person I chose.

The person I married.
The person I fight with, laugh with, sleep beside, annoy, protect, and come back to.

In private, you are not just beautiful.

You are mine in the softest, deepest, most real way.

- Pattu`,
        private:true
    },

    {
        id:"private-morning-after",
        icon:"☀️",
        title:"Morning After",
        category:"Private",
        body:
`Bittu,

The morning after a private night has its own sweetness.

Messy hair.
Sleepy face.
Soft body.
Tiny smiles.
Maybe some teasing.
Maybe some shyness.
Maybe pretending nothing happened while both of us know exactly what happened.

I love that softness.

The part after desire.
The part where love stays.

That is the part I want you to always feel with me.

Wanted at night.
Safe in the morning.

- Pattu`,
        private:true
    }

];


// Storage

function getLetterData(){

    const savedData = JSON.parse(localStorage.getItem("bittuLetterData")) || {};

    return {
        opened:savedData.opened || 0,
        favorites:savedData.favorites || [],
        publicSlots:savedData.publicSlots || [],
        privateSlots:savedData.privateSlots || []
    };

}

function saveLetterData(data){

    localStorage.setItem("bittuLetterData", JSON.stringify(data));

}


// Helpers

function shuffleItems(items){

    return [...items].sort(() => Math.random() - 0.5);

}

function getAllLetters(){

    return [...publicLetterPool, ...privateLetterPool];

}

function getLetterById(id){

    return getAllLetters().find(letter => letter.id === id);

}

function getFreshIds(pool, existingIds, count){

    const favorites = getLetterData().favorites;

    let available = pool.filter(letter => {

        return !existingIds.includes(letter.id) && !favorites.includes(letter.id);

    });

    if(available.length < count){

        available = pool.filter(letter => !favorites.includes(letter.id));

    }

    return shuffleItems(available).slice(0, count).map(letter => letter.id);

}

function refillSlots(){

    const data = getLetterData();

    data.publicSlots = data.publicSlots.filter(id => {

        return publicLetterPool.some(letter => letter.id === id);

    });

    while(data.publicSlots.length < 8){

        const newIds = getFreshIds(publicLetterPool, data.publicSlots, 8 - data.publicSlots.length);

        if(newIds.length === 0) break;

        data.publicSlots.push(...newIds);

    }

    data.publicSlots = data.publicSlots.slice(0,8);


    data.privateSlots = data.privateSlots.filter(id => {

        return privateLetterPool.some(letter => letter.id === id);

    });

    while(data.privateSlots.length < 8){

        const newIds = getFreshIds(privateLetterPool, data.privateSlots, 8 - data.privateSlots.length);

        if(newIds.length === 0) break;

        data.privateSlots.push(...newIds);

    }

    data.privateSlots = data.privateSlots.slice(0,8);

    saveLetterData(data);

}


// Stats

function updateLetterStats(){

    const data = getLetterData();

    lettersOpened.innerText = data.opened;

    favoriteLetters.innerText = data.favorites.length;

    privateLetters.innerText = privateLetterPool.length;

}


// Toast

function showToast(message){

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

}


// Render Letters

function renderLetters(){

    refillSlots();

    const data = getLetterData();

    lettersGrid.innerHTML = "";

    let visibleIds = [...data.publicSlots];

    if(privateLettersUnlocked){

    visibleIds = [...visibleIds, ...data.privateSlots];

}

    visibleIds.forEach(id => {

        const letter = getLetterById(id);

        if(!letter) return;

        const card = document.createElement("button");

        card.className = "letter-card";

        if(letter.private){
            card.classList.add("private-letter");
        }

        if(data.favorites.includes(letter.id)){
            card.classList.add("favorite-letter");
        }

        card.innerHTML = `
            <div class="icon">${letter.icon}</div>
            <h2>${letter.title}</h2>
            <p>${letter.body.substring(0, 95)}...</p>
            <span class="letter-badge">
                ${letter.private ? "🔐 Private" : letter.category}
            </span>
        `;

        card.addEventListener("click", () => {

            openLetter(letter, true);

        });

        lettersGrid.appendChild(card);

    });

}


// Replace Opened Letter

function replaceOpenedLetter(letter){

    const data = getLetterData();

    if(letter.private){

        data.privateSlots = data.privateSlots.filter(id => id !== letter.id);

        const newIds = getFreshIds(privateLetterPool, data.privateSlots, 1);

        if(newIds.length > 0){
            data.privateSlots.push(newIds[0]);
        }

    }else{

        data.publicSlots = data.publicSlots.filter(id => id !== letter.id);

        const newIds = getFreshIds(publicLetterPool, data.publicSlots, 1);

        if(newIds.length > 0){
            data.publicSlots.push(newIds[0]);
        }

    }

    data.opened += 1;

    saveLetterData(data);

}


// Open Letter

function openLetter(letter, shouldReplace){

    selectedLetter = letter;

    if(shouldReplace){

        replaceOpenedLetter(letter);

    }

    const data = getLetterData();

    letterIcon.innerText = letter.icon;

    letterCategory.innerText = letter.category;

    letterTitle.innerText = letter.title;

    letterBody.innerText = letter.body;

    if(data.favorites.includes(letter.id)){

        favoriteLetterButton.innerText = "Remove Favorite ⭐";

    }else{

        favoriteLetterButton.innerText = "Add to Favorites ⭐";

    }

    letterModal.classList.add("active");

    updateLetterStats();

    renderFavoriteLetters();

    renderLetters();

}


// Random Letter

function openRandomLetter(){

    refillSlots();

    const data = getLetterData();

    let availableIds = [...data.publicSlots];

    if(privateLettersUnlocked){

    availableIds = [...availableIds, ...data.privateSlots];

}

    const randomId = availableIds[Math.floor(Math.random() * availableIds.length)];

    const letter = getLetterById(randomId);

    if(letter){

        openLetter(letter, true);

    }

}


// Favorite

function toggleFavoriteLetter(){

    if(!selectedLetter) return;

    const data = getLetterData();

    if(data.favorites.includes(selectedLetter.id)){

        data.favorites = data.favorites.filter(id => id !== selectedLetter.id);

        showToast("Removed from favorite letters");

    }else{

        data.favorites.push(selectedLetter.id);

        showToast("Added to favorite letters ⭐");

    }

    saveLetterData(data);

    openLetter(selectedLetter, false);

    renderLetters();

    updateLetterStats();

}


function renderFavoriteLetters(){

    const data = getLetterData();

    favoriteLetterList.innerHTML = "";

    if(data.favorites.length === 0){

        favoriteLetterList.innerHTML = `
            <div class="favorite-letter-item">
                No favorite letters yet. Open letters and save the ones Bittu likes.
            </div>
        `;

        return;

    }

    data.favorites.forEach(id => {

        const letter = getLetterById(id);

        if(!letter) return;

        const item = document.createElement("button");

        item.className = "favorite-letter-item";

        item.innerHTML = `
            <strong>${letter.icon} ${letter.title}</strong>
            <br>
            ${letter.category}
        `;

        item.addEventListener("click", () => {

            openLetter(letter, false);

        });

        favoriteLetterList.appendChild(item);

    });

}


// WhatsApp

function sendLetterToPattu(){

    if(!selectedLetter) return;

    const message =
`Pattu ❤️

Bittu opened this letter:

${selectedLetter.icon} ${selectedLetter.title}

Category:
${selectedLetter.category}

She may want you to remember this one.

Go ask her what she felt after reading it.`;

    const whatsappUrl =
        "https://wa.me/" +
        PATTU_WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappUrl;

}


// Admin

function syncLettersAdminMode(){

    if(isHubbyModeActive()){

        lettersAdminPanel.classList.add("active");

    }else{

        lettersAdminPanel.classList.remove("active");

    }

    unlockPrivateLetters.innerText = privateLettersUnlocked
        ? "Lock Private Letters"
        : "Unlock Private Letters";

    renderLetters();

}

resetLetterStats.addEventListener("click", () => {

    localStorage.removeItem("bittuLetterData");

    refillSlots();

    updateLetterStats();

    renderFavoriteLetters();

    renderLetters();

    showToast("Letter stats reset by Hubby Mode.");

});

unlockPrivateLetters.addEventListener("click", () => {

    if(!isHubbyModeActive()) return;

    privateLettersUnlocked = !privateLettersUnlocked;

    localStorage.setItem(
        "bittuPrivateLettersUnlocked",
        privateLettersUnlocked ? "true" : "false"
    );

    syncLettersAdminMode();

    showToast(
        privateLettersUnlocked
            ? "Private letters unlocked 😏"
            : "Private letters locked again"
    );

});

document.addEventListener("keydown", () => {

    setTimeout(() => {

        syncLettersAdminMode();

    }, 100);

});


// Events

randomLetterButton.addEventListener("click", () => {

    openRandomLetter();

});

openAnotherLetter.addEventListener("click", () => {

    openRandomLetter();

});

favoriteLetterButton.addEventListener("click", () => {

    toggleFavoriteLetter();

});

sendLetterWhatsapp.addEventListener("click", () => {

    sendLetterToPattu();

});

closeLetter.addEventListener("click", () => {

    letterModal.classList.remove("active");

});

letterModal.addEventListener("click", (event) => {

    if(event.target === letterModal){

        letterModal.classList.remove("active");

    }

});


// Start

refillSlots();

updateLetterStats();

renderFavoriteLetters();

syncLettersAdminMode();