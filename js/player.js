let wMax = 400;
function initiate(){

    media = document.getElementById("media");
    play = document.getElementById("play");
    mute = document.getElementById("mute");
    bar = document.getElementById("bar");
    progress = document.getElementById("progress");
    volume = document.getElementById("volume");
    // play = document.getElementById("play");

    play.addEventListener("click", push);
    media.addEventListener("click", push);
    mute.addEventListener("click", sound);
    bar.addEventListener("click", move);
    volume.addEventListener("input", level);
}


addEventListener('load', initiate);

function level() {
    media.volume = volume.value;
}


function move(e) {
    if(!media.ended) {
        let mouseX = e.pageX - bar.offsetLeft;
        let newTime = mouseX*media.duration/wMax;
        media.currentTime = newTime;
        progress.style.width = mouseX + "px";
    }
}

function sound(){
if(media.muted) {
    media.muted = false;
    mute.style.textDecoration = "none";
    mute.style.colore = "#000";
}
    else {
        media.muted = true;
        mute.style.textDecoration = "line-through";
        mute.style.colore = "#999";
    }
}





function push() {
    
if(!media.paused && !media.ended) {      
        media.pause();  
        play.value = "Воспр.";  
        clearInterval(loop);
    } else {       
        media.play(); 
        play.value = "Пауза";

        loop = setInterval(statusBar, 1000);
    }
}

function statusBar() {

    if(!media.ended) {
        let size = media.currentTime*wMax/media.duration;
        progress.style.width = size + "px";
            } else {
                progress.style.width = size + "px";
                clearInterval(loop);
                play.value = "Воспр.";
            }
}









