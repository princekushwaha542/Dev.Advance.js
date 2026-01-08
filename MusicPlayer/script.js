const songs = [
    "JholAcoustic.mp3",
    "Raanjhan.mp3",
    "BORDER_2_Ghar_Kab-Aaoge.mp3",
    "song3.mp3"
];

const titles = [
    "JHOL",
    "RAANJHAN",
    "Border 2 Ghar Kab Aaoge",
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
songss.forEach((song, i) => {
  song.addEventListener("click", () => {

    // same song click → pause
    if (song.classList.contains("active")) {
      audio.pause();
      song.classList.remove("active");
      playBtn.innerText = "▶";
      return;
    }

    // remove active from all
    songss.forEach(s => s.classList.remove("active"));

    // 🔥 MAIN FIX
    index = i;                 // global index update
    audio.src = songs[index];  // mp3 file
    title.innerText = titles[index];

    audio.load();
    audio.play();
    playBtn.innerText = "⏸";

    song.classList.add("active");
  });
});

let btn=document.querySelector("#btn");
let fileimp=document.querySelector("#fileimp");
let atag=document.getElementById("atag");

btn.addEventListener("click",function(){
    fileimp.click();
});
fileimp.addEventListener("change",function(val){
    btn.textContent=val.target.files[0].name;
   const file = val.target.files[0]; 
  if (file) {
    const url = URL.createObjectURL(file); 
    atag.setAttribute("href", url);
  }
  console.log(val.target.files[0]);
  atag.title=file.neme;
});
const submitBtn = document.getElementById("submitBtn");


submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // page refresh stop

    const file = fileimp.files[0];
    if (!file) {
        alert("Please select a song first");
        return;
    }

    // sirf audio allow
    if (!file.type.startsWith("audio")) {
        alert("Only MP3 / audio files allowed");
        return;
    }

    // browser URL
    const songURL = URL.createObjectURL(file);

    // arrays me add
    songs.push(songURL);
    titles.push(file.name);
    const newIndex = songs.length - 1;

    // song list me add
    const li = document.createElement("li");
    li.className = "songs";
    li.innerText = file.name;
    SongList.appendChild(li);
    

    // click event for new song
    li.addEventListener("click", () => {
        index = newIndex;
        audio.src = songs[index];
        title.innerText = titles[index];

        audio.play();
        playBtn.innerText = "⏸";

        document.querySelectorAll(".songs").forEach(s => s.classList.remove("active"));
        li.classList.add("active");
    });

    // view file link
    atag.href = songURL;
    atag.title = file.name;

    // reset input
    fileimp.value = "";
});

let loginPage = document.querySelector("#loginPage");
let loginBtn =document.querySelector(".btn");
let loginBtn1 =document.querySelector(".btn1");

loginBtn.addEventListener("click", () =>{
    if(getComputedStyle(loginPage).display === "none"){
        loginPage.style.display = "grid";
    }
     else{
        loginPage.style.display = "none";
    }
});
loginBtn1.addEventListener("click", () =>{
    if(getComputedStyle(loginPage).display === "none"){
        loginPage.style.display = "grid";
    }
     else{
        loginPage.style.display = "none";
    }
});
let exitBtn = document.querySelector(".exiit");
exitBtn.addEventListener("click", () =>{
    loginPage.style.display = "none";
});