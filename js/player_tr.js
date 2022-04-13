
function initiate(){

    media = document.getElementById("media");
    play = document.getElementById("play");
    mute = document.getElementById("mute");
    bar = document.getElementById("bar");
    progress = document.getElementById("progress");
    volum = document.getElementById("volum");
    // play = document.getElementById("play");

    play.addEventListener("click", push);
    mute.addEventListener("click", push1);
    
    
}





addEventListener('load', initiate);





function push() {
    
if(!media.paused && !media.ended) {      
    media.pause();    
} else {       
    media.play();    
}

}

function push1() {
if (media.muted != true) {
    media.muted = true;
    mute.setAttribute('style','background:#b19b9b;');
    mute.setAttribute('value','звук ВЫКЛ');
    
} 
    else {media.muted = false;
        mute.setAttribute('style','background:0;');
        mute.setAttribute('value','звук ВКЛ');
        progress.setAttribute('style', `width: ${Math.round(media.currentTime)}px;`);

        
    }  
    progress.setAttribute('style', `width: ${Math.round(media.currentTime)}px;`);
}



progress.setAttribute('style', `width: ${Math.round(media.currentTime)}px;`);



