console.log("Welcome to spotify");
// initialize the variables
let songIndex = 0;
let audioElement = new Audio('C:\Users\hp\OneDrive\Desktop\spotify\Dj_Snake_Let_Me_Love_You_(NaijaMusic.NG).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
 {songName:"Let me love you",filepath: "C:\Users\hp\OneDrive\Desktop\spotify\Dj_Snake_Let_Me_Love_You_(NaijaMusic.NG).mp3", coverPath: "C:\Users\hp\OneDrive\Desktop\spotify\OIP.jfif"},
 {songName:"Shape of you",filepath: "C:\Users\hp\OneDrive\Desktop\spotify\Ed_Sheeran_Shape_of_You_(NaijaMusic.NG).mp3", coverPath: "C:\Users\hp\OneDrive\Desktop\spotify\OIP.jfif"},
 {songName:"Willow",filepath: "C:\Users\hp\OneDrive\Desktop\spotify\Taylor_Swift_-_Willow_Windsloaded.com.mp3", coverPath: "C:\Users\hp\OneDrive\Desktop\spotify\OIP.jfif"},
 {songName:"Love Story",filepath: "C:\Users\hp\OneDrive\Desktop\spotify\Love_Story_-_taylor_swift_(mp3.pm).mp3", coverPath: "C:\Users\hp\OneDrive\Desktop\spotify\OIP.jfif"},
 {songName:"Baby",filepath: "C:\Users\hp\OneDrive\Desktop\spotify\Justin Bieber - Baby_128-(PagalWorld.Ink).mp3", coverPath: "C:\Users\hp\OneDrive\Desktop\spotify\OIP.jfif"},
 {songName:"We don't talk anymore",filepath: "C:\Users\hp\OneDrive\Desktop\spotify\Charlie-Puth-We-Don-t-Talk-Anymore-feat.-Selena-Gomez.mp3", coverPath: "C:\Users\hp\OneDrive\Desktop\spotify\OIP.jfif"},
 {songName:"Unstoppable",filepath: "C:\Users\hp\OneDrive\Desktop\spotify\Unstoppable(PagalWorld.com.se).mp3", coverPath: "C:\Users\hp\OneDrive\Desktop\spotify\OIP.jfif"},
 {songName:"Attention",filepath: "C:\Users\hp\OneDrive\Desktop\spotify\Attention - Charlie Puth-(DJMaza).mp3", coverPath: "C:\Users\hp\OneDrive\Desktop\spotify\OIP.jfif"},
 {songName:"Closer",filepath: "C:\Users\hp\OneDrive\Desktop\spotify\The_Chainsmokers_ft_Halsey_-_Closer_(NaijaMusic.Ng).mp3", coverPath: "C:\Users\hp\OneDrive\Desktop\spotify\OIP.jfif"},
 {songName:"Senorita",filepath: "C:\Users\hp\OneDrive\Desktop\spotify\Senorita.mp3", coverPath: "C:\Users\hp\OneDrive\Desktop\spotify\OIP.jfif"},
]

songItems.forEach((element,i) => {
//  console.log(element,i);
 element.getElementsByTagName("img")[0].src = songs[i].coverPath;
 element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();
//Handle play pause click
masterPlay.addEventListener('click',()=>{
 if(audioElement.paused || audioElement.currentTime<=0){
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.opacity=1;
 }
 else{
   audioElement.pause();
  masterPlay.classList.remove('fa-pause-circle');
  masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;

 }
})
// Listen to eventss
audioElement.addEventListener('timeupdate',()=>{
 // console.log('timeupdate');
 //update seeker
 progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 // console.log(progress);
 myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
 audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})