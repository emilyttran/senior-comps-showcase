

var audioButtons = document.getElementsByTagName('audio');

 function stopAllAudio() {
    for(var i = 0; i < audioButtons.length; i++){
      audioButtons[i].pause();
    
    }
    
  }

function PlaySound(id) {
        stopAllAudio();
        document.getElementById(id).play();
  }


document.body.onkeyup = function(e){
    if(e.keyCode == 83){
        for(var j = 0; j < audioButtons.length; j++){
      audioButtons[j].pause();
    
    }
    }
}