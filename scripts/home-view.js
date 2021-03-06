const os = require('os');
const username = os.userInfo().username;
const Flickity = require('flickity');

var headerTexts = {
    morning: {
        main: "Good morning",
        splash: [
            "Let's play some music",
            "Let's start the day off right",
            "Today's a new day!",
            "Seize the day"
        ]
    },
    afternoon: {
        main: "Good afternoon",
        splash: [
            "Let's play some music",
            "Relax to some tunes",
            "Let's jam!",
            "Play that song",
            "Kick back to some tunes"
        ]
    },
    evening: {
        main: "Good evening",
        splash: [
            "Let's play some music",
            "Put on some beats",
            "Set the mood",
            "Find your focus"
        ]
    },
    night: {
        main: "Good night",
        splash: [
            "Let's play some music",
            "Time to wind down",
            "Relax to some tunes",
            "Pulling an all-nighter?"
        ]
    }
}    

// write main header text according to time
let hour = new Date().getHours();
let selectedHeaderTexts = 
      hour >= 5 && hour < 12 ? headerTexts.morning
    : hour >= 12 && hour < 17 ? headerTexts.afternoon
    : hour >= 17 && hour < 21 ? headerTexts.evening
    : headerTexts.night;
document.getElementById('main-header').innerText = selectedHeaderTexts.main + ", " + username.replace(/\b\w/g, function(c) {
    return c.toUpperCase();
});

// write splash text randomly
document.getElementById('splash-text').innerText = selectedHeaderTexts.splash[Math.floor(Math.random() * selectedHeaderTexts.splash.length)];

//populate recently played list
let recentlyPlayedCarousel = document.getElementById('recently-played');
recentlyPlayedCarousel.className = 'main-carousel';
recentlyPlayedCarousel.setAttribute('data-flickity', '{"pageDots": false, "freeScroll": true, "cellAlign": "left", "contain": true, "prevNextButtons": false}');
for (var i = 0; i < 20; i++) {
    let albumEntry = document.createElement('a'); 
    albumEntry.className = 'carousel-cell album-entry selectable';
    recentlyPlayedCarousel.appendChild(albumEntry);

    let frame = document.createElement('div'); 
    frame.className = 'album-frame acrylic-backdrop';
    albumEntry.appendChild(frame);

    let img = document.createElement('img'); 
    img.className = 'album-img';
    img.setAttribute('src', '../media/AlbumDefault.png');
    frame.appendChild(img);

    let caption = document.createElement('div');
    caption.innerText = 'Album';
    albumEntry.appendChild(caption);    
}

//populate most played list
let mostPlayedCarousel = document.getElementById('most-played');
mostPlayedCarousel.className = 'main-carousel';
mostPlayedCarousel.setAttribute('data-flickity', '{"pageDots": false, "freeScroll": true, "cellAlign": "left", "contain": true, "prevNextButtons": false}');
for (var i = 0; i < 20; i++) {
    let albumEntry = document.createElement('a'); 
    albumEntry.className = 'carousel-cell album-entry selectable';
    mostPlayedCarousel.appendChild(albumEntry);

    let frame = document.createElement('div'); 
    frame.className = 'album-frame';
    albumEntry.appendChild(frame);

    let img = document.createElement('img'); 
    img.className = 'album-img';
    img.setAttribute('src', '../media/AlbumDefault.png');
    frame.appendChild(img);

    let caption = document.createElement('div');
    caption.innerText = 'Album';
    albumEntry.appendChild(caption);
}