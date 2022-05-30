console.log("welcome to stotify");
let songIndex = 0;
let audioElement = new Audio('music.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('MyProgressBar');
let gif= document.getElementById('gif');

let songs =[
    {songName: "salame-e-isque",filepath:"song/music.mp3",coverpath: "covers/music.mp3"},
    {songName: "salame-e-isque",filepath:"song/music.mp3",coverpath: "covers/music.mp3"},
    {songName: "salame-e-isque",filepath:"song/music.mp3",coverpath: "covers/music.mp3"}
]


//play and pause
masterPlay.addEventListener('click', ()=>{

    if(audioElement.paused || audioElement.currentTime<=0)
    {
        console.log('play');

        audioElement.play();
      
      
        masterPlay.classList.add('fa-play-circle');
        // masterPlay.classList.remove('pause.png');
       gif.style.opacity =0;

    
    }
    else{
        audioElement.pause();
   gif.style.opacity=0.8;
      


        //  masterPlay.classList.add('pause.png');
        masterPlay.classList.remove('fa-play-circle');
      
       gif.style.opacity=0.8;
       console.log('pause');
      
    }
})
//list of event
audioElement.addEventListener('timeupdate', ()=>{

Progress = parseInt((audioElement.currentTime/audioElement.duration)*80);

    console.log('MyProgressBar');
    console.log('timeupdate');

    myProgressbar.value =Progress;


})