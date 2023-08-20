const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-btn");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const playlistItems = document.querySelectorAll(".playlist li");

let currentSongIndex = 0;

playButton.addEventListener("click", () => {
    audioPlayer.play();
});

prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + playlistItems.length) % playlistItems.length;
    updateSongInfo();
});

nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
    updateSongInfo();
});

playlistItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentSongIndex = index;
        updateSongInfo();
    });
});

const songs = [
    { title: "Song 1", artist: "Artist 1", src: "music1.mp3" },
    { title: "Song 2", artist: "Artist 2", src: "music2.mp3" },
    { title: "Song 3", artist: "Artist 3", src: "music3.mp3" },
    
];

function updateSongInfo() {
    const songTitle = songs[currentSongIndex].title;
    const artistName = songs[currentSongIndex].artist;
    const songSrc = songs[currentSongIndex].src;
    audioPlayer.src = songSrc;
    audioPlayer.load();
    audioPlayer.play();
    document.querySelector(".song-details h2").textContent = songTitle;
    document.querySelector(".song-details p").textContent = artistName;

    playlistItems.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}


updateSongInfo();
