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

let AddBtn = document.querySelector(".threebtn");
let OneBtn = document.querySelector(".onebtn");
let TwoBtn = document.querySelector(".twobtn");
let song = document.querySelector(".songs");
let songss = document.querySelectorAll(".songs");
let SongList = document.querySelector(".SongList")
let AddList = document.querySelector(".Addlist")
OneBtn.addEventListener("click", ()=>{
   SongList.style.display = "initial";
   OneBtn.style.backgroundColor = "black";
   TwoBtn.style.backgroundColor = "rgb(47, 46, 46)";
   AddBtn.style.backgroundColor = "rgb(47, 46, 46)";
   AddList.style.display = "none";
   
});
TwoBtn.addEventListener("click", ()=>{
   SongList.style.display = "initial";
   AddList.style.display = "none";
   TwoBtn.style.backgroundColor = "black"
   OneBtn.style.backgroundColor = "rgb(47, 46, 46)";
   AddBtn.style.backgroundColor = "rgb(47, 46, 46)";

})
AddBtn.addEventListener("click", ()=>{
   AddList.style.display = "initial";
   AddBtn.style.backgroundColor = "black";
   TwoBtn.style.backgroundColor = "rgb(47, 46, 46)";
   OneBtn.style.backgroundColor = "rgb(47, 46, 46)";
   SongList.style.display = "none";
});
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
