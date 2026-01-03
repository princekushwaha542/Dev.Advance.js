const songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3"
];

const titles = [
    "SO Love Me Like You Do",
    "SO Love Me Like You Do",
    "SO Love Me Like You Do"
];

let index = 0;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const title = document.getElementById("songTitle");

loadSong();

function loadSong(){
    audio.src = songs[index];
    title.innerText = titles[index];
}

function playPause(){
    if(audio.paused){
        audio.play();
        playBtn.innerText = "⏸";
    }else{
        audio.pause();
        playBtn.innerText = "▶";
    }
}

function nextSong(){
    index = (index + 1) % songs.length;
    loadSong();
    audio.play();
    playBtn.innerText = "⏸";
}

function prevSong(){
    index = (index - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
    playBtn.innerText = "⏸";
}

audio.addEventListener("timeupdate", ()=>{
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", ()=>{
    audio.currentTime = (progress.value * audio.duration) / 100;
});

audio.addEventListener("ended", nextSong);

let OneBtn = document.querySelector(".onebtn");
let TwoBtn = document.querySelector(".twobtn");
let song = document.querySelector(".songs");
let songss = document.querySelectorAll(".songs");
let SongList = document.querySelector(".SongList")
OneBtn.addEventListener("click",function(){
  
if (OneBtn.style.backgroundColor = "black"){
   SongList.style.display = "none";
}
else {
    SongList.style.display = "initial";
   OneBtn.style.backgroundColor = "black"
}
});
TwoBtn.addEventListener("click", ()=>{

})
songss.forEach(song => {
song.addEventListener("click",function(){
    if (song.classList.contains("active"))
    {
    song.classList.remove("active")
    }
    else {
    songss.forEach(song => song.classList.remove("active"));
    song.classList.add("active")
    
    }
});
});
